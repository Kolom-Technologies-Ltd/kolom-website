"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black">
      {/* FaultyTerminal WebGL background */}
      <div className="absolute inset-0">
        <FaultyTerminal
          scale={2.2}
          gridMul={[2.5, 1.2]}
          digitSize={2.6}
          timeScale={0.18}
          scanlineIntensity={0.15}
          glitchAmount={1.2}
          flickerAmount={0.6}
          noiseAmp={0.8}
          chromaticAberration={2}
          curvature={0.08}
          tint="#2d6ab9"
          mouseReact={true}
          mouseStrength={0.35}
          brightness={0.35}
          pageLoadAnimation={true}
          dither={1}
        />
      </div>

      {/* Gradient overlays for depth and readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black" />

      {/* Content — pointer-events-none so mouse passes through to FaultyTerminal */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4093FF] animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-white/70">
            Software &middot; Design &middot; AI
          </span>
        </div>

        {/* Headline */}
        <h1
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)" }}
        >
          We engineer digital
          <br />
          <span
            className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)" }}
          >
            experiences that matter
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg md:mt-8 md:text-xl"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
        >
          Kolom Technologies is an elite team of engineers, designers and AI
          specialists building the next generation of software products.
        </p>

        {/* Enlisted on */}
        <div className="my-8 flex flex-col items-center gap-2 md:mt-10">
          <span
            className="text-[11px] font-medium tracking-[0.2em] text-white/10 uppercase"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
          >
            Enlisted on
          </span>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Image
                src="/enlisted/goodfirms.webp"
                alt="Goodfirms"
                width={100}
                height={28}
                className="h-5 w-auto rounded-full"
                unoptimized
              />
              <span className="text-xs font-medium text-white/30">Goodfirms</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/enlisted/clutch.webp"
                alt="Clutch"
                width={100}
                height={28}
                className="h-5 w-auto rounded-full"
                unoptimized
              />
              <span className="text-xs font-medium text-white/30">Clutch</span>
            </div>
          </div>
        </div>

        {/* CTAs — re-enable pointer events for clickable elements */}
        <div className="pointer-events-auto mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#4093FF] hover:text-white hover:shadow-[0_0_30px_rgba(64,147,255,0.3)]"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Our Services
          </Link>
        </div>

        {/* Trust line */}
        <p
          className="mt-12 text-[11px] font-medium tracking-[0.2em] text-white/25 uppercase md:mt-16"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}
        >
          Kolom Technologies Ltd.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#services"
          className="flex flex-col items-center gap-1 text-white/30 transition-colors hover:text-white/50"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
