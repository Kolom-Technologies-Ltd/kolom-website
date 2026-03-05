"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { team } from "@/lib/team";

const imageVariants = {
  initial: { scale: 0.97, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.97, opacity: 0 },
};

const infoVariants = {
  initial: { y: 12, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 12, opacity: 0 },
};

const transition = { duration: 0.3, ease: "easeOut" as const };

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const switchTo = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  const prev = () =>
    setActiveIndex((i) => (i - 1 + team.length) % team.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % team.length);

  const active = team[activeIndex];

  return (
    <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-[1fr_440px] lg:items-end lg:gap-12 xl:grid-cols-[1fr_500px]">
      {/* Featured image — first in DOM for mobile, right column on desktop */}
      <div className="relative lg:order-2">
        {/* Blue geometric triangle accent */}
        <div
          className="absolute -bottom-6 -right-6 z-0 h-[55%] w-[60%] rounded-br-3xl bg-gradient-to-br from-[rgba(64,147,255,0.12)] to-[rgba(64,147,255,0.35)] [clip-path:polygon(100%_0%,100%_100%,0%_100%)]"
        />

        {/* Image container */}
        <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900">
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
                alt={active.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
                loading="lazy"
              />
              {/* Subtle bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Logo accent */}
        <div className="absolute -top-8 -right-8 z-20">
          <Image
            src="/logo/logo-icon-white.svg"
            alt=""
            width={80}
            height={80}
            className="h-auto w-16 sm:w-20"
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        {/* Navigation arrows */}
        <div className="absolute -bottom-5 right-0 z-20 flex items-center gap-2">
          <span className="mr-2 text-xs font-medium tabular-nums text-white/30">
            {String(activeIndex + 1).padStart(2, "0")}/
            {String(team.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            aria-label="Previous member"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#4093FF]/50 hover:text-white"
          >
            <ArrowLeft size={16} strokeWidth={2} />
          </button>
          <button
            onClick={next}
            aria-label="Next member"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4093FF]/50 bg-[#4093FF]/10 text-[#4093FF] backdrop-blur-sm transition-all duration-300 hover:bg-[#4093FF]/20 hover:text-white"
          >
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Info column — second in DOM for mobile, left column on desktop */}
      <div className="mt-10 lg:order-1 lg:mt-0">
        {/* Thumbnail strip */}
        <div className="mb-8 flex gap-3 overflow-x-auto p-1 scrollbar-hide">
          {team.map((m, i) => (
            <button
              key={m.name}
              onClick={() => switchTo(i)}
              className={cn(
                "relative h-[72px] w-[72px] shrink-0 rounded-xl border-2 transition-all duration-500",
                activeIndex === i
                  ? "scale-105 border-[#4093FF] opacity-100"
                  : "border-white/[0.08] opacity-40 grayscale hover:opacity-60 hover:grayscale-0"
              )}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  sizes="72px"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Active member info — crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={infoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            {/* Name + badge */}
            <div className="mb-1.5 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {active.name}
              </h3>
              <span className="rounded-full border border-[#4093FF]/30 bg-[#4093FF]/10 px-3 py-0.5 text-xs font-semibold tabular-nums text-[#4093FF]">
                {active.yearsOfExperience}yr+ exp
              </span>
            </div>

            {/* Role */}
            <p className="mb-6 text-base font-medium text-[#4093FF]/60">
              {active.role}
            </p>

            {/* Career highlights */}
            <div className="mb-6 space-y-2.5">
              {active.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-sm leading-relaxed text-white/40"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#4093FF]/50" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5">
              {active.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
