import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation/quote";
import { rateLimit } from "@/lib/security/rate-limit";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    name: "G & S Engineering RFQ Quote API",
    status: "active",
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "client-ip";
    const limitResult = await rateLimit(`quote-${ip}`, 5, 60 * 1000);

    if (!limitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many quote requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validationResult = quoteFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your form input.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    console.log("RFQ Submission received:", {
      fullName: data.fullName,
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      serviceRequired: data.serviceRequired,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Quote request successfully logged. Our Campbellfield estimator will review your specification and contact you shortly.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("RFQ Submission error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your quote request.",
      },
      { status: 500 }
    );
  }
}
