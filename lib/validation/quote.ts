import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name must be less than 100 characters." }),
  companyName: z.string().max(100).optional().or(z.literal("")),
  phone: z
    .string()
    .min(8, { message: "Please enter a valid phone number." })
    .max(20, { message: "Phone number is too long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  serviceRequired: z.enum(
    ["both", "powder", "fabrication", "custom"],
    { errorMap: () => ({ message: "Please select a valid service option." }) }
  ),
  preferredColor: z.string().max(100).optional().or(z.literal("")),
  estimatedQuantity: z.string().max(100).optional().or(z.literal("")),
  requiredDate: z.string().optional().or(z.literal("")),
  projectScope: z
    .string()
    .min(5, { message: "Please provide details about your project scope or part dimensions." })
    .max(2000, { message: "Project scope description is too long." }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
