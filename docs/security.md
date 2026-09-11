# Security Architecture — G & S Engineering

## Security Controls Implemented

1. **HTTP Security Headers**:
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

2. **Server-Side Input Validation**:
   - All RFQ quote requests and contact form submissions are validated using strict Zod schemas on the server (`app/api/quote/route.ts` and `app/api/contact/route.ts`). Client-side validation is enforced as UX feedback only.

3. **Rate Limiting**:
   - Rate limiting abstraction is configured for public endpoints to prevent spam and brute-force submissions.

4. **File Upload Hardening**:
   - Allowed file extensions: `.pdf`, `.dxf`, `.step`, `.stp`, `.dwg`, `.jpg`, `.jpeg`, `.png`, `.webp`.
   - Maximum upload size strictly capped at 25MB (`lib/security/upload-validation.ts`).
   - Filename sanitization against path traversal (`..`, `/`, `\`).

5. **Secrets & Environment Isolation**:
   - `.env` and `.env.local` are added to `.gitignore`.
   - Sample configuration template provided in `.env.example`.
