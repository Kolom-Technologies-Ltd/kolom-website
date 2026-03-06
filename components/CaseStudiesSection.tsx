"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyIcons } from "@/lib/case-study-icons";

const imageVariants = {
  initial: { scale: 0.98, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.98, opacity: 0 },
};

const contentVariants = {
  initial: { y: 12, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 12, opacity: 0 },
};

const transition = { duration: 0.3, ease: "easeOut" as const };

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const switchTo = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  const active = caseStudies[activeIndex];
  const ActiveIcon = caseStudyIcons[active.iconName];

  return (
    <section
      className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "80vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse at center, rgba(64,147,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
            Case Studies
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Case{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Studies
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
            Products we have shipped end-to-end — from discovery and design
            through development, launch, and ongoing iteration.
          </p>
        </div>

        {/* ── Project selector tabs ── */}
        <div className="mt-12 flex justify-center gap-3 lg:mt-16">
          {caseStudies.map((s, i) => {
            const Icon = caseStudyIcons[s.iconName];
            return (
              <button
                key={s.title}
                onClick={() => switchTo(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out",
                  activeIndex === i
                    ? "border-[#4093FF]/50 bg-[#4093FF]/10 text-white shadow-[0_0_20px_rgba(64,147,255,0.1)]"
                    : "border-white/[0.08] bg-white/[0.02] text-white/40 hover:border-white/15 hover:text-white/60"
                )}
              >
                <Icon size={16} strokeWidth={1.5} />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* ── Showcase card ── */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] lg:mt-12">
          <div className="lg:grid lg:grid-cols-2">
            {/* Image half */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 lg:aspect-auto lg:min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: active.objectPosition }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  {/* Subtle edge blend */}
                  <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/20 to-transparent lg:block" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content half */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                >
                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + tagline */}
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                      <ActiveIcon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#4093FF]"
                      />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {active.title}
                    </h3>
                  </div>
                  <p className="mb-5 text-sm font-medium text-[#4093FF]/60">
                    {active.tagline}
                  </p>

                  {/* Description */}
                  <p className="mb-8 text-sm leading-relaxed text-white/40 sm:text-base">
                    {active.description}
                  </p>

                  {/* Mini stats row */}
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {active.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xs text-white/25">{stat.label}</p>
                        <p className="mt-0.5 text-sm font-semibold text-white/70">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-[#4093FF]/30 bg-[#4093FF]/10 px-6 py-2.5 text-sm font-medium text-[#4093FF] transition-all duration-300 hover:bg-[#4093FF]/20 hover:text-white hover:shadow-[0_0_24px_rgba(64,147,255,0.15)]"
                    >
                      Visit Live Project
                      <ExternalLink
                        size={14}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </a>
                    <Link
                      href={`/case-studies/${active.slug}`}
                      className="group/cs inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-2.5 text-sm font-medium text-white/50 transition-all duration-300 hover:border-white/15 hover:text-white/80"
                    >
                      View Case Study
                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover/cs:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Bottom project cards (quick nav) ── */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {caseStudies.map((s, i) => {
            const Icon = caseStudyIcons[s.iconName];
            return (
              <button
                key={s.title}
                onClick={() => switchTo(i)}
                className={cn(
                  "group relative rounded-2xl border p-5 text-left transition-all duration-500 ease-out sm:p-6",
                  activeIndex === i
                    ? "border-[#4093FF]/30 bg-white/[0.04]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
                )}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-500",
                      activeIndex === i
                        ? "border-[#4093FF]/30 bg-[#4093FF]/10"
                        : "border-white/[0.08] bg-white/[0.04] group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10"
                    )}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className={cn(
                        "transition-colors duration-500",
                        activeIndex === i
                          ? "text-[#4093FF]"
                          : "text-white/40 group-hover:text-[#4093FF]"
                      )}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {s.title}
                    </h4>
                    <p className="text-xs text-white/30">{s.tagline}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className={cn(
                      "ml-auto shrink-0 transition-all duration-500",
                      activeIndex === i
                        ? "text-[#4093FF]"
                        : "text-white/20 group-hover:text-white/40"
                    )}
                  />
                </div>

                {/* Active indicator line */}
                <div
                  className={cn(
                    "absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 sm:inset-x-6",
                    activeIndex === i ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
