import { z } from "zod";

const honeypotSchema = z
  .string()
  .trim()
  .max(0, "Spam field must stay empty")
  .optional()
  .default("");

const emailSchema = z
  .string({ required_error: "Email is required" })
  .trim()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .max(254, "Email is too long")
  .transform((value) => value.toLowerCase());

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(120, "Name is too long"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(6, "Phone number is too short")
    .max(32, "Phone number is too long")
    .regex(/^[+()\d\s-]+$/, "Phone number contains invalid characters"),
  email: emailSchema,
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(3000, "Message is too long"),
  honeypot: honeypotSchema,
});

export const newsletterFormSchema = z.object({
  email: emailSchema,
  honeypot: honeypotSchema,
});

export function getFieldErrors(error) {
  if (!error || !error.flatten) {
    return {};
  }

  return error.flatten().fieldErrors;
}
