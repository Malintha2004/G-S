export const ALLOWED_FILE_EXTENSIONS = [
  "pdf",
  "dxf",
  "step",
  "stp",
  "dwg",
  "jpg",
  "jpeg",
  "png",
  "webp",
];

export const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export interface FileValidationResult {
  valid: boolean;
  error?: string;
}

export function validateUploadFile(
  filename: string,
  size: number,
  mimeType?: string
): FileValidationResult {
  if (size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File exceeds maximum allowed size of 25MB.`,
    };
  }

  const extension = filename.split(".").pop()?.toLowerCase();
  if (!extension || !ALLOWED_FILE_EXTENSIONS.includes(extension)) {
    return {
      valid: false,
      error: `File type .${extension} is not allowed. Please upload CAD (DXF, STEP, DWG), PDF, or image files (JPG, PNG, WEBP).`,
    };
  }

  // Prevent dangerous executable filenames
  if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
    return {
      valid: false,
      error: `Invalid filename format.`,
    };
  }

  return { valid: true };
}
