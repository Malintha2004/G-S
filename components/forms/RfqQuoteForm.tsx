"use client";

import React, { useState } from "react";
import { quoteFormSchema, QuoteFormData } from "@/lib/validation/quote";
import { validateUploadFile } from "@/lib/security/upload-validation";
import { Send, Upload, CheckCircle2, AlertCircle } from "lucide-react";

export const RfqQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    serviceRequired: "both",
    preferredColor: "",
    estimatedQuantity: "",
    requiredDate: "",
    projectScope: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validation = validateUploadFile(file.name, file.size);
      if (!validation.valid) {
        setFileError(validation.error || "Invalid file.");
        setSelectedFile(null);
      } else {
        setFileError(null);
        setSelectedFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);
    setErrors({});

    const result = quoteFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(data.message);
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          serviceRequired: "both",
          preferredColor: "",
          estimatedQuantity: "",
          requiredDate: "",
          projectScope: "",
        });
        setSelectedFile(null);
      } else {
        setSubmitError(data.error || "Failed to log quote submission.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("A network error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl bg-surface-container p-space-lg shadow-xl border border-outline-variant/40">
      <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
        <Send className="w-5 h-5 text-secondary" />
        <span className="font-label text-label-sm uppercase tracking-widest font-bold">
          Fast Quote Protocol
        </span>
      </div>
      <h3 className="font-headline text-headline-md text-on-surface uppercase font-bold mb-space-xs">
        Request A Commercial Specification Quote
      </h3>
      <p className="font-body text-body-sm text-on-surface-variant mb-space-lg">
        Upload CAD files, part dimensions, or batch quantities. Our workshop estimators respond with confirmed pricing and production lead times within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-space-md" noValidate>
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Smith"
              className={`w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md ${
                errors.fullName ? "border-error" : "border-outline-variant/30"
              }`}
            />
            {errors.fullName && (
              <span className="font-body text-body-sm text-error mt-1 block">
                {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Prime Steelworks Pty Ltd"
              className="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md"
            />
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0400 000 000"
              className={`w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md ${
                errors.phone ? "border-error" : "border-outline-variant/30"
              }`}
            />
            {errors.phone && (
              <span className="font-body text-body-sm text-error mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="procurement@company.com.au"
              className={`w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md ${
                errors.email ? "border-error" : "border-outline-variant/30"
              }`}
            />
            {errors.email && (
              <span className="font-body text-body-sm text-error mt-1 block">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Service & Preferred Color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Service Required *
            </label>
            <select
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleInputChange}
              className="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md"
            >
              <option value="both">Both Metal Fabrication & Powder Coating</option>
              <option value="powder">Powder Coating Only</option>
              <option value="fabrication">Metal Fabrication / Welding Only</option>
              <option value="custom">Custom Architectural Prototype</option>
            </select>
          </div>

          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Preferred Colour / Spec
            </label>
            <input
              type="text"
              name="preferredColor"
              value={formData.preferredColor}
              onChange={handleInputChange}
              placeholder="e.g. Satin Black, Monument, Custom RAL"
              className="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md"
            />
          </div>
        </div>

        {/* Quantity & Deadline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Estimated Quantity / Parts
            </label>
            <input
              type="text"
              name="estimatedQuantity"
              value={formData.estimatedQuantity}
              onChange={handleInputChange}
              placeholder="e.g. 25 frames, 100 brackets, 1 off"
              className="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md"
            />
          </div>

          <div>
            <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
              Required By (Deadline)
            </label>
            <input
              type="date"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleInputChange}
              className="w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md"
            />
          </div>
        </div>

        {/* Scope & Sizing */}
        <div>
          <label className="block font-label text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
            Project Scope & Sizing Dimensions *
          </label>
          <textarea
            name="projectScope"
            rows={4}
            value={formData.projectScope}
            onChange={handleInputChange}
            placeholder="Detail part lengths, steel gauge/material, pretreatment needs, or delivery requirements..."
            className={`w-full px-space-md py-space-sm bg-surface-container-low text-on-surface rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary font-body text-body-md ${
              errors.projectScope ? "border-error" : "border-outline-variant/30"
            }`}
          />
          {errors.projectScope && (
            <span className="font-body text-body-sm text-error mt-1 block">
              {errors.projectScope}
            </span>
          )}
        </div>

        {/* Upload Box */}
        <div className="p-space-md rounded-lg bg-surface-container-low border border-dashed border-outline-variant text-center cursor-pointer hover:bg-surface-container-high transition-colors relative">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.dxf,.step,.stp,.dwg,.jpg,.jpeg,.png,.webp"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Upload CAD drawings or images"
          />
          <Upload className="w-6 h-6 text-primary mx-auto mb-1" />
          <p className="font-label text-label-sm text-on-surface font-semibold">
            {selectedFile ? `Attached: ${selectedFile.name}` : "Click to attach Drawings / PDF / STEP / DXF"}
          </p>
          <span className="font-body text-body-sm text-on-surface-variant block">
            Max file size 25MB (PDF, CAD DXF/STEP, JPG, PNG)
          </span>
          {fileError && (
            <span className="font-body text-body-sm text-error mt-1 block font-semibold">
              {fileError}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase tracking-wider rounded-lg hover:bg-secondary-bright transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? "Processing RFQ..." : "Submit Spec For Factory Quote"}
        </button>

        {/* Feedback Messages */}
        {submitSuccess && (
          <div className="p-space-md rounded-lg bg-surface-container-high text-primary font-label text-label-md text-center flex items-center justify-center gap-2 border border-primary/40">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            <span>{submitSuccess}</span>
          </div>
        )}

        {submitError && (
          <div className="p-space-md rounded-lg bg-error-container text-on-error-container font-label text-label-md text-center flex items-center justify-center gap-2 border border-error">
            <AlertCircle className="w-5 h-5 text-error shrink-0" />
            <span>{submitError}</span>
          </div>
        )}
      </form>
    </div>
  );
};
