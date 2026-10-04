import nodemailer, { SendMailOptions } from "nodemailer";
import { SITE_CONFIG } from "./config/site";

export interface QuoteEmailParams {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredColor?: string;
  estimatedQuantity?: string;
  requiredDate?: string;
  projectScope: string;
  attachment?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  } | null;
}

const SERVICE_LABELS: Record<string, string> = {
  "powder-coating": "Commercial & Batch Powder Coating",
  "industrial-powder-coating": "Industrial Powder Coating",
  "architectural-coating": "Architectural Powder Coating",
  powder: "Commercial & Batch Powder Coating",
  industrial: "Industrial Powder Coating",
  architectural: "Architectural Powder Coating",
};

export async function sendQuoteEmail(params: QuoteEmailParams): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  const companyEmail = process.env.COMPANY_EMAIL || SITE_CONFIG.email;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const serviceLabel =
    SERVICE_LABELS[params.serviceRequired] || params.serviceRequired;

  const subject = `New Workshop Quote Request - ${params.fullName}`;

  const textBody = `New Workshop Quote Request

Customer Details
Name: ${params.fullName}
Company: ${params.companyName || "N/A"}
Phone: ${params.phone}
Email: ${params.email}

Project Details
Service Required: ${serviceLabel}
Preferred Colour / Spec: ${params.preferredColor || "N/A"}
Estimated Quantity / Parts: ${params.estimatedQuantity || "N/A"}
Required By: ${params.requiredDate || "N/A"}

Project Scope & Sizing Dimensions:
${params.projectScope}
${
  params.attachment
    ? `\nAttached File: ${params.attachment.filename}`
    : "\nAttached File: None"
}
`;

  const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; color: #1c2025; line-height: 1.6;">
  <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-top: 0;">New Workshop Quote Request</h2>
  
  <h3 style="background-color: #f1f5f9; padding: 6px 12px; border-radius: 4px; margin-top: 20px; color: #0f172a;">Customer Details</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 4px 8px; font-weight: bold; width: 180px;">Name:</td><td style="padding: 4px 8px;">${params.fullName}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Company:</td><td style="padding: 4px 8px;">${params.companyName || "N/A"}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Phone:</td><td style="padding: 4px 8px;"><a href="tel:${params.phone}" style="color: #0284c7;">${params.phone}</a></td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Email:</td><td style="padding: 4px 8px;"><a href="mailto:${params.email}" style="color: #0284c7;">${params.email}</a></td></tr>
  </table>

  <h3 style="background-color: #f1f5f9; padding: 6px 12px; border-radius: 4px; margin-top: 20px; color: #0f172a;">Project Details</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 4px 8px; font-weight: bold; width: 180px;">Service Required:</td><td style="padding: 4px 8px;">${serviceLabel}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Preferred Colour / Spec:</td><td style="padding: 4px 8px;">${params.preferredColor || "N/A"}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Estimated Quantity / Parts:</td><td style="padding: 4px 8px;">${params.estimatedQuantity || "N/A"}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Required By:</td><td style="padding: 4px 8px;">${params.requiredDate || "N/A"}</td></tr>
  </table>

  <h3 style="background-color: #f1f5f9; padding: 6px 12px; border-radius: 4px; margin-top: 20px; color: #0f172a;">Project Scope & Sizing Dimensions</h3>
  <p style="white-space: pre-wrap; background-color: #fafafa; padding: 12px; border-radius: 4px; border: 1px solid #e2e8f0;">${params.projectScope}</p>

  ${
    params.attachment
      ? `<p style="font-size: 13px; color: #64748b; margin-top: 16px;"><strong>Attached File:</strong> ${params.attachment.filename}</p>`
      : ""
  }
</div>
`;

  // If SMTP credentials are not set, check RESEND_API_KEY
  if (!smtpUser || !smtpPass) {
    if (process.env.RESEND_API_KEY) {
      return sendViaResend({
        apiKey: process.env.RESEND_API_KEY,
        to: companyEmail,
        replyTo: params.email,
        subject,
        text: textBody,
        html: htmlBody,
        attachment: params.attachment,
      });
    }

    console.warn(
      "⚠️ Email credentials (SMTP_USER/SMTP_PASS or RESEND_API_KEY) are not configured in environment variables."
    );
    console.log("Logged Quote Request:", {
      to: companyEmail,
      replyTo: params.email,
      subject,
      customer: params.fullName,
      phone: params.phone,
      email: params.email,
      attachment: params.attachment?.filename || "None",
    });

    if (process.env.NODE_ENV !== "production") {
      return {
        success: true,
        message:
          "Your quote request has been sent successfully. We'll get back to you shortly.",
      };
    }

    return {
      success: false,
      error:
        "Server email configuration missing. Please set SMTP_USER and SMTP_PASS environment variables.",
    };
  }

  // Send via Nodemailer SMTP
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"${params.fullName} (G&S RFQ Form)" <${smtpUser}>`,
      to: companyEmail,
      replyTo: params.email,
      subject: subject,
      text: textBody,
      html: htmlBody,
      attachments: params.attachment
        ? [
            {
              filename: params.attachment.filename,
              content: params.attachment.content,
              contentType: params.attachment.contentType,
            },
          ]
        : [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ RFQ Email sent successfully:", info.messageId);

    return {
      success: true,
      message:
        "Your quote request has been sent successfully. We'll get back to you shortly.",
    };
  } catch (err: any) {
    console.error("❌ SMTP Error sending RFQ email:", err);
    return {
      success: false,
      error: `Failed to deliver email: ${err?.message || "Mail server error"}`,
    };
  }
}

async function sendViaResend(options: {
  apiKey: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachment?: { filename: string; content: Buffer } | null;
}): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";
    const attachments = options.attachment
      ? [
          {
            filename: options.attachment.filename,
            content: options.attachment.content.toString("base64"),
          },
        ]
      : undefined;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [options.to],
        reply_to: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
        attachments,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message || "Resend API error");
    }

    return {
      success: true,
      message:
        "Your quote request has been sent successfully. We'll get back to you shortly.",
    };
  } catch (err: any) {
    console.error("❌ Resend API error:", err);
    return {
      success: false,
      error: `Failed to deliver email via Resend: ${err?.message || "API error"}`,
    };
  }
}
