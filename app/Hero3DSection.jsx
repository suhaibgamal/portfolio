"use client";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export default function Hero3DSection() {
  return (
    <div className="flex justify-center mb-6">
      <Hero3D />
    </div>
  );
}
