"use client";

import { useState } from "react";
import Image from "next/image";

const CARD_CONTENT = (
  <>
    <div className="flex flex-col gap-2">
      <span className="text-[#cc6e36] font-jost text-[22px] leading-none select-none">&ldquo;</span>
      <p className="m-0 text-white font-jost text-[13px] leading-[20px] tracking-[0.2px] italic opacity-95">
        Every single day felt like a new adventure. If I could do it again tomorrow, I wouldn&apos;t hesitate.
      </p>
    </div>
    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-white/10">
        <Image
          src="/images/home/testimonial-avatar.png"
          alt="Yousef Alseddeeqi"
          width={36}
          height={36}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-white font-jost text-[12px] font-medium leading-[15px] truncate">
          Yousef Alseddeeqi
        </span>
        <a
          href="https://www.instagram.com/yalseddeeqi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-white/50 hover:text-white/80 transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="text-[11px] tracking-[0.3px]">@yalseddeeqi</span>
        </a>
      </div>
    </div>
  </>
);

const glassStyle = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.14)",
};

export default function TestimonialWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-6 right-4 sm:right-6 lg:bottom-[10%] lg:right-10 xl:right-14 2xl:right-16 z-[1]">
      {/* Expanded card */}
      <div
        className="w-[272px] sm:w-[290px] lg:w-[300px] flex flex-col gap-4 p-5 lg:p-6 origin-bottom-right relative"
        style={{
          ...glassStyle,
          opacity: open ? 1 : 0,
          transform: open ? "scale(1) translateY(0)" : "scale(0.94) translateY(10px)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
        aria-hidden={!open}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close testimonial"
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-150"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l10 10M11 1L1 11"/>
          </svg>
        </button>
        {CARD_CONTENT}
      </div>

      {/* Trigger pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Read client testimonial"
        className="mt-3 flex items-center gap-2.5 px-3 py-2 transition-opacity duration-200"
        style={{
          ...glassStyle,
          opacity: open ? 0 : 1,
          pointerEvents: open ? "none" : "auto",
          position: open ? "absolute" : "relative",
          bottom: open ? 0 : undefined,
        }}
      >
        <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 bg-white/10">
          <Image
            src="/images/home/testimonial-avatar.png"
            alt="Yousef Alseddeeqi"
            width={28}
            height={28}
            className="w-full h-full object-cover"
          />
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center text-white"
            style={{ background: "#cc6e36", fontSize: "8px", lineHeight: 1 }}
          >
            ❝
          </span>
        </div>
        <span className="text-white font-jost text-[12px] tracking-[0.3px] opacity-90 whitespace-nowrap">
          Client review
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
          <path d="M5 8V2M2 5l3-3 3 3"/>
        </svg>
      </button>
    </div>
  );
}
