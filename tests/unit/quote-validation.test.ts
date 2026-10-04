import { describe, it, expect } from "vitest";
import { quoteFormSchema } from "../../lib/validation/quote";
import { rateLimit } from "../../lib/security/rate-limit";
import { validateUploadFile } from "../../lib/security/upload-validation";
import { sendQuoteEmail } from "../../lib/email";

describe("Quote Form Validation", () => {
  it("should validate correct form input", () => {
    const validInput = {
      fullName: "John Smith",
      companyName: "Apex Metals",
      phone: "0415668527",
      email: "john@apexmetals.com.au",
      serviceRequired: "powder-coating",
      preferredColor: "Satin Black",
      estimatedQuantity: "50 frames",
      requiredDate: "2026-10-01",
      projectScope: "Batch aluminum louvres satin black powder coating.",
    };

    const result = quoteFormSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  it("should reject invalid email and short phone number", () => {
    const invalidInput = {
      fullName: "J",
      phone: "123",
      email: "invalid-email",
      serviceRequired: "invalid_service",
      projectScope: "hi",
    };

    const result = quoteFormSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});

describe("File Upload Security", () => {
  it("should allow valid CAD, STEP, image and PDF files under 25MB", () => {
    expect(validateUploadFile("drawing.dxf", 1024 * 1024).valid).toBe(true);
    expect(validateUploadFile("part.step", 5 * 1024 * 1024).valid).toBe(true);
    expect(validateUploadFile("photo.png", 2 * 1024 * 1024).valid).toBe(true);
    expect(validateUploadFile("spec.pdf", 10 * 1024 * 1024).valid).toBe(true);
  });

  it("should reject dangerous file extensions", () => {
    const result = validateUploadFile("script.exe", 1024);
    expect(result.valid).toBe(false);
  });

  it("should reject files over 25MB", () => {
    const result = validateUploadFile("drawing.pdf", 30 * 1024 * 1024);
    expect(result.valid).toBe(false);
  });
});

describe("Email Service Abstraction", () => {
  it("should process quote request and format email parameters correctly", async () => {
    const res = await sendQuoteEmail({
      fullName: "Jane Doe",
      companyName: "Steel Crafters",
      phone: "0415668527",
      email: "jane@steelcrafters.com.au",
      serviceRequired: "industrial-powder-coating",
      preferredColor: "Monument Satin",
      estimatedQuantity: "10 brackets",
      requiredDate: "2026-11-15",
      projectScope: "Heavy industrial steel bracket coating.",
      attachment: {
        filename: "bracket_drawing.pdf",
        content: Buffer.from("dummy pdf content"),
      },
    });

    expect(res.success).toBe(true);
    expect(res.message).toBeDefined();
  });
});

describe("Rate Limiting Abstraction", () => {
  it("should allow requests under limit and block when limit exceeded", async () => {
    const ip = "test-ip-address-quote";
    for (let i = 0; i < 5; i++) {
      const res = await rateLimit(ip, 5, 10000);
      expect(res.success).toBe(true);
    }
    const resBlocked = await rateLimit(ip, 5, 10000);
    expect(resBlocked.success).toBe(false);
  });
});
