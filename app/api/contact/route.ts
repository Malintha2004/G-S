import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/security/rate-limit";
import { z } from "zod";

export const dynamic = "force-static";

const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(8).max(20),
  message: z.string().min(5).max(2000),
});

export async function GET() {
  return NextResponse.json({
    name: "G & S Engineering Contact API",
    status: "active",
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "client-ip";
    const limitResult = await rateLimit(`contact-${ip}`, 5, 60 * 1000);

    if (!limitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many contact requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your form input.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We will respond within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred.",
      },
      { status: 500 }
    );
  }
}
