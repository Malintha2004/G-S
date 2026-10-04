import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation/quote";
import { rateLimit } from "@/lib/security/rate-limit";
import { validateUploadFile } from "@/lib/security/upload-validation";
import { sendQuoteEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    name: "G & S Engineering RFQ Quote API",
    status: "active",
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "client-ip";
    const limitResult = await rateLimit(`quote-${ip}`, 10, 60 * 1000);

    if (!limitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many quote requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    let rawBody: Record<string, any> = {};
    let fileAttachment: { filename: string; content: Buffer; contentType?: string } | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      rawBody = {
        fullName: formData.get("fullName"),
        companyName: formData.get("companyName") || "",
        phone: formData.get("phone"),
        email: formData.get("email"),
        serviceRequired: formData.get("serviceRequired"),
        preferredColor: formData.get("preferredColor") || "",
        estimatedQuantity: formData.get("estimatedQuantity") || "",
        requiredDate: formData.get("requiredDate") || "",
        projectScope: formData.get("projectScope"),
      };

      const file = formData.get("file") as File | null;
      if (file && file.size > 0 && file.name) {
        const fileVal = validateUploadFile(file.name, file.size, file.type);
        if (!fileVal.valid) {
          return NextResponse.json(
            {
              success: false,
              error: fileVal.error || "Invalid file attachment.",
            },
            { status: 400 }
          );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

        fileAttachment = {
          filename: sanitizedFilename,
          content: buffer,
          contentType: file.type || "application/octet-stream",
        };
      }
    } else {
      rawBody = await request.json();
    }

    const validationResult = quoteFormSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const firstIssue = validationResult.error.issues[0]?.message;
      return NextResponse.json(
        {
          success: false,
          error: firstIssue || "Validation failed. Please check your form input.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const emailResult = await sendQuoteEmail({
      fullName: data.fullName,
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      serviceRequired: data.serviceRequired,
      preferredColor: data.preferredColor,
      estimatedQuantity: data.estimatedQuantity,
      requiredDate: data.requiredDate,
      projectScope: data.projectScope,
      attachment: fileAttachment,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || "Failed to deliver email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          emailResult.message ||
          "Your quote request has been sent successfully. We'll get back to you shortly.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("RFQ Submission error:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          err?.message || "An internal error occurred while processing your quote request.",
      },
      { status: 500 }
    );
  }
}
