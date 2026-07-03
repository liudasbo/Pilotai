"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => setFading(false), 350);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const el = document.querySelector(".page-root");
    if (!el) return;
    el.style.transition = "opacity 350ms ease";
    el.style.opacity = fading ? "0" : "1";
  }, [fading]);

  return null;
}
