"use client";

import { useMemo, useState } from "react";

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
  message: "",
  honeypot: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const isSubmitting = status === "submitting";

  const statusClassName = useMemo(() => {
    if (status === "success") return "text-green-700";
    if (status === "error") return "text-red-700";
    return "text-darkslategray-100";
  }, [status]);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((previous) => {
        const next = { ...previous };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(
          payload?.error?.message ||
            "Something went wrong. Please check your details and retry."
        );
        setFieldErrors(payload?.error?.fieldErrors || {});
        return;
      }

      setStatus("success");
      setMessage(payload.data.message);
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      className="w-full flex flex-col items-start gap-6 text-num-14 text-darkslategray-100 font-jost"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <div className="w-full border-b border-gainsboro pb-1">
        <input
          id="contact-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Name"
          className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
        />
      </div>
      {fieldErrors.name?.[0] ? (
        <p id="contact-name-error" className="m-0 text-[13px] text-red-700">
          {fieldErrors.name[0]}
        </p>
      ) : null}

      <label className="sr-only" htmlFor="contact-phone">
        Phone number
      </label>
      <div className="w-full border-b border-gainsboro pb-1">
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
          placeholder="Phone number"
          className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
        />
      </div>
      {fieldErrors.phone?.[0] ? (
        <p id="contact-phone-error" className="m-0 text-[13px] text-red-700">
          {fieldErrors.phone[0]}
        </p>
      ) : null}

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <div className="w-full border-b border-gainsboro pb-1">
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="Email"
          className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
        />
      </div>
      {fieldErrors.email?.[0] ? (
        <p id="contact-email-error" className="m-0 text-[13px] text-red-700">
          {fieldErrors.email[0]}
        </p>
      ) : null}

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <div className="w-full border-b border-gainsboro pb-1">
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          value={values.message}
          onChange={handleChange}
          placeholder="Enter Message"
          className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 resize-none placeholder:text-darkslategray-100 placeholder:opacity-100"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
        />
      </div>
      {fieldErrors.message?.[0] ? (
        <p id="contact-message-error" className="m-0 text-[13px] text-red-700">
          {fieldErrors.message[0]}
        </p>
      ) : null}

      <label className="sr-only" htmlFor="contact-company-website">
        Company website
      </label>
      <input
        id="contact-company-website"
        type="text"
        name="honeypot"
        value={values.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer border-none py-3.5 px-[42px] bg-[#cc6e36] text-num-13 tracking-[0.39px] leading-[15.6px] uppercase font-semibold font-jost text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      <p aria-live="polite" className={`m-0 text-[13px] ${statusClassName}`}>
        {message}
      </p>
    </form>
  );
}
