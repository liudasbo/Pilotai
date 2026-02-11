"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Activities", href: "#activities" },
  { label: "Aircraft", href: "#aircraft" },
  { label: "The Club", href: "#the-club" },
  { label: "About US", href: "#about" },
  { label: "Contacts", href: "#contacts" },
];

function NavLink({ link, onClick, mobile }) {
  return (
    <Link
      href={link.href}
      className={`text-white text-num-13 leading-num-23 uppercase font-medium hover:opacity-90 ${
        mobile ? "py-4 min-h-[44px] flex items-center justify-center" : ""
      }`}
      onClick={onClick}
    >
      {link.label}
    </Link>
  );
}

export default function Header({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className={`w-full flex flex-col items-start z-10 shrink-0 text-left text-[12px] text-white font-jost relative ${className}`}
    >
      <div className="hidden desktop:flex w-full flex-col items-start">
        <div className="self-stretch h-8 border-gray-400 border-solid border-b-[1px] box-border">
          <div className="h-full flex items-center justify-end pr-[60px] gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="h-full inline-flex items-center px-2 leading-[13.2px] font-medium hover:opacity-80"
            >
              FB.
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-full inline-flex items-center px-2 leading-[13.2px] font-medium hover:opacity-80"
            >
              IN.
            </a>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-14 px-[60px] gap-[260px]">
          <Link
            href="/"
            className="w-num-140_6 flex flex-col items-center gap-[8.2px]"
          >
            <div className="self-stretch flex flex-col items-center gap-[4.9px]">
              <Image
                className="cursor-pointer border-none p-num-0 bg-[transparent] w-6 h-[18.2px] relative"
                width={24}
                height={18.2}
                sizes="24px"
                alt=""
                src="/images/Group-17.svg"
              />
              <Image
                className="w-num-140_6 h-[27.3px] relative"
                loading="lazy"
                width={140.6}
                height={27.3}
                sizes="140.6px"
                alt="Pilotai"
                src="/images/Group-18.svg"
              />
            </div>
            <Image
              className="w-[72.5px] h-[5.2px] relative"
              loading="lazy"
              width={72.5}
              height={5.2}
              sizes="72.5px"
              alt=""
              src="/images/Program.svg"
            />
          </Link>
          <nav className="m-0 flex items-center gap-12 text-left text-num-13 text-white font-jost">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </nav>
        </div>
      </div>

      <div className="flex desktop:hidden w-full flex-col items-start">
        <div
          className={`self-stretch flex items-center justify-between py-num-14 px-4 sm:px-6 relative ${menuOpen ? "z-[10001]" : "z-50"}`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="w-6 h-[18.2px]"
              width={24}
              height={18.2}
              sizes="24px"
              alt=""
              src="/images/Group-17.svg"
            />
            <Image
              className="h-[27.3px] w-auto"
              width={140.6}
              height={27.3}
              sizes="120px"
              alt="Pilotai"
              src="/images/Group-18.svg"
            />
          </Link>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-white"
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

      <div
        id="frame-mobile-menu"
        className={`fixed inset-0 z-[10000] desktop:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/90"
          onClick={closeMenu}
          aria-hidden
        />
        <nav className="absolute inset-0 flex flex-col items-center justify-center gap-6 pt-20">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} link={link} onClick={closeMenu} mobile />
          ))}
        </nav>
      </div>
    </header>
  );
}
