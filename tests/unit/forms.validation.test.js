import test from "node:test";
import assert from "node:assert/strict";
import { contactFormSchema, newsletterFormSchema } from "../../lib/validation/forms.js";

test("contactFormSchema accepts valid payload", () => {
  const result = contactFormSchema.safeParse({
    name: "John Doe",
    phone: "+370 600 00000",
    email: "john@example.com",
    message: "I am interested in your pilot training program.",
    honeypot: "",
  });

  assert.equal(result.success, true);
});

test("contactFormSchema rejects invalid email", () => {
  const result = contactFormSchema.safeParse({
    name: "John Doe",
    phone: "+370 600 00000",
    email: "invalid-email",
    message: "I am interested in your pilot training program.",
    honeypot: "",
  });

  assert.equal(result.success, false);
});

test("newsletterFormSchema rejects honeypot value", () => {
  const result = newsletterFormSchema.safeParse({
    email: "john@example.com",
    honeypot: "bot-filled",
  });

  assert.equal(result.success, false);
});
