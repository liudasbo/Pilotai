"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const INITIAL_STATE = {
  email: "",
  honeypot: "",
};

export default function NewsletterForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

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
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload?.error?.message || "Subscription failed.");
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
    <>
      <form
        className="w-full border-b border-black flex items-center justify-between gap-4 py-2"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email Address"
          aria-label="Email Address"
          autoComplete="email"
          className="w-full border-none outline-none bg-transparent text-num-16 leading-num-24 text-darkslategray-100 placeholder:text-darkslategray-100 placeholder:opacity-100 font-jost"
        />

        <label htmlFor="newsletter-website" className="sr-only">
          Website
        </label>
        <input
          id="newsletter-website"
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
          aria-label="Subscribe to newsletter"
          disabled={isSubmitting}
          className="disabled:opacity-60"
        >
          <Image
            src="/images/Button.svg"
            alt=""
            width={17}
            height={12}
            className="w-[17px] h-3"
          />
        </button>
      </form>

      <p aria-live="polite" className={`m-0 mt-3 text-[13px] ${statusClassName}`}>
        {message}
      </p>
    </>
  );
}
