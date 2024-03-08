import { z } from "zod";

// use `prisma` in your application to read and write data in your DB
export const ValidationSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(2, "description is required").max(255),
});

export const PatchValidationSchema = z.object({
  title: z.string().min(1, "title is required").max(255).optional(),
  description: z.string().min(2, "description is required").max(255).optional(),
  assignedToUserId: z
    .string()
    .min(1, "required the assigned user id")
    .max(255)
    .optional(),
});
