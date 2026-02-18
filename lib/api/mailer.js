import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "info@pilotaiprogram.com";
let cachedTransporter = null;

function parsePort(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : 465;
}

function parseSecure(value, port) {
  if (typeof value === "string" && value.length > 0) {
    return value === "true";
  }

  return port === 465;
}

export function getMissingSmtpEnv() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  return required.filter((key) => !process.env[key]);
}

function getMailConfig() {
  const port = parsePort(process.env.SMTP_PORT);

  return {
    host: process.env.SMTP_HOST,
    port,
    secure: parseSecure(process.env.SMTP_SECURE, port),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO || DEFAULT_RECIPIENT,
  };
}

function getTransporter(config) {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  cachedTransporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return cachedTransporter;
}

function throwMissingConfig() {
  const missing = getMissingSmtpEnv();
  if (missing.length === 0) {
    return;
  }

  const error = new Error(`Missing SMTP env: ${missing.join(", ")}`);
  error.code = "SMTP_CONFIG_MISSING";
  error.missing = missing;
  throw error;
}

export async function sendContactSubmissionEmail({
  name,
  phone,
  email,
  message,
  receivedAt,
}) {
  throwMissingConfig();
  const config = getMailConfig();
  const transporter = getTransporter(config);

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: email,
    subject: `[Pilotai] New contact form submission: ${name}`,
    text: [
      "New contact form submission",
      `Received at: ${receivedAt}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });
}

export async function sendNewsletterSubscriberEmail({ email, receivedAt }) {
  throwMissingConfig();
  const config = getMailConfig();
  const transporter = getTransporter(config);

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    subject: "[Pilotai] New newsletter subscriber",
    text: [
      "New newsletter subscription",
      `Received at: ${receivedAt}`,
      "",
      `Subscriber email: ${email}`,
    ].join("\n"),
  });
}
