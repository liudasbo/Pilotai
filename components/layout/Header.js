"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "Aircraft", href: "/aircraft" },
  { label: "Pilot License", href: "/pilot-license" },
  { label: "The Club", href: "/the-club" },
  { label: "About Us", href: "/about-us" },
  { label: "Contacts", href: "/contact-us" },
];

const SOCIAL_LINKS = [
  {
    label: "FB.",
    mobileLabel: "Facebook",
    href: SITE_CONFIG.socials.facebook,
    ariaLabel: "Facebook",
  },
  {
    label: "IN.",
    mobileLabel: "Instagram",
    href: SITE_CONFIG.socials.instagram,
    ariaLabel: "Instagram",
  },
  {
    label: "LI.",
    mobileLabel: "LinkedIn",
    href: SITE_CONFIG.socials.linkedin,
    ariaLabel: "LinkedIn",
  },
];

function NavLink({ link, onClick, mobile, className = "" }) {
  return (
    <Link
      href={link.href}
      className={`nav-link-base ${
        mobile
          ? "w-full py-3 min-h-[44px] flex items-center justify-between text-[22px] leading-[28px] tracking-[0.6px]"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {link.label}
    </Link>
  );
}

export default function Header({
  className = "",
  textColor = "white",
  topSocialGray = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isDarkText = textColor === "black";
  const useDarkTone = isDarkText || hasScrolled;

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24);
    };

    setIsMounted(true);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const desktopHeaderTone = useDarkTone
    ? "bg-white border-b border-black/10"
    : "bg-transparent border-b border-transparent";
  const mobileHeaderTone = useDarkTone
    ? "bg-white border-b border-black/10"
    : "bg-transparent border-b border-transparent";

  if (!isMounted) {
    return null;
  }

  const headerContent = (
    <header
      className={`w-full flex flex-col items-start shrink-0 text-left text-[12px] ${
        useDarkTone ? "text-black" : "text-white"
      } font-jost fixed top-0 left-0 z-[1200] transition-[background-color,border-color,backdrop-filter,color] duration-500 ${className}`}
    >
      <div
        className={`hidden xl:flex w-full flex-col items-start transition-[background-color,border-color,backdrop-filter] duration-500 ${desktopHeaderTone}`}
      >
        <div
          className={`self-stretch h-8 border-solid border-b-[1px] box-border ${
            useDarkTone
              ? "border-black/10 bg-white"
              : topSocialGray
                ? "border-gray-400 bg-whitesmoke-100"
                : "border-white/20 bg-transparent"
          }`}
        >
          <div className="h-full flex items-center justify-end pr-6 lg:pr-10 xl:pr-14 2xl:pr-16 gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.ariaLabel}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="social-link"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-14 px-6 lg:px-10 xl:px-14 2xl:px-16">
          <Link
            href="/"
            className="w-num-140_6 flex flex-col items-center gap-[8.2px]"
          >
            <Image quality={90}
              className="w-num-140_6 h-auto"
              loading="lazy"
              width={140.6}
              height={63.8}
              sizes="140.6px"
              alt="Pilotai Program"
              src={useDarkTone ? "/images/logoBlack.svg" : "/images/logo.svg"}
            />
          </Link>
          <nav
            className={`m-0 ml-auto flex items-center gap-6 2xl:gap-10 text-left text-num-13 ${
              useDarkTone ? "text-black" : "text-white"
            } font-jost`}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                link={link}
                className={useDarkTone ? "!text-black" : ""}
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="flex xl:hidden w-full flex-col items-start">
        <div
          className={`self-stretch flex items-center justify-between py-num-14 px-4 sm:px-6 relative z-[10020] transition-[background-color,border-color,backdrop-filter] duration-500 ${mobileHeaderTone}`}
        >
          <Link href="/" className="touch-target flex items-center gap-2">
            <Image quality={90}
              className="h-[40px] w-auto"
              width={140.6}
              height={63.8}
              sizes="120px"
              alt="Pilotai Program"
              src={useDarkTone ? "/images/logoBlack.svg" : "/images/logo.svg"}
            />
          </Link>
          <button
            type="button"
            className={`touch-target w-11 h-11 justify-center ${
              useDarkTone ? "text-black" : "text-white"
            }`}
            aria-expanded={menuOpen}
            aria-controls="frame-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMounted
        ? createPortal(
            <div
              id="frame-mobile-menu"
              className={`xl:hidden fixed inset-0 z-[1300] transition-opacity duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!menuOpen}
              inert={!menuOpen}
            >
              <div
                className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
                onClick={closeMenu}
                aria-hidden
              />
              <aside
                className={`absolute top-0 right-0 h-full w-[88%] max-w-[420px] bg-[#122232]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="h-full flex flex-col px-6 sm:px-8 pb-8 pt-24">
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="absolute top-5 right-5 touch-target w-11 h-11 justify-center text-white/85 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="text-white/60 text-[11px] uppercase tracking-[2px] mb-6">
                    Navigation
                  </div>

                  <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                      <NavLink
                        key={link.label}
                        link={link}
                        onClick={closeMenu}
                        mobile
                      />
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/contact-us"
                      onClick={closeMenu}
                      className="inline-flex items-center justify-center w-full min-h-[48px] px-5 bg-white text-[#122232] text-[12px] font-semibold uppercase tracking-[1px] hover:bg-white/90"
                    >
                      Contact Us
                    </Link>
                    <div className="mt-5 flex items-center justify-between text-white/70 text-[12px] tracking-[1px]">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.mobileLabel}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="touch-target hover:text-white"
                        >
                          {social.mobileLabel}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>,
            document.body
          )
        : null}
    </header>
  );

  // Render header at document root to avoid local stacking-context clipping.
  return createPortal(headerContent, document.body);
}
