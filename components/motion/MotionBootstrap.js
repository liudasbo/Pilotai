"use client";

import dynamic from "next/dynamic";

const SiteMotionOrchestrator = dynamic(
  () => import("@/components/motion/SiteMotionOrchestrator"),
  { ssr: false }
);

export default function MotionBootstrap() {
  return <SiteMotionOrchestrator />;
}
