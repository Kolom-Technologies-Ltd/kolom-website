"use client";

import { useState } from "react";
import {
  Users,
  ScanSearch,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Code2,
  GitBranch,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Pillar {
  label: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  capabilities: string[];
}

const pillars: Pillar[] = [
  {
    label: "Experience",
    icon: Users,
    tagline: "Understand the Human",
    description:
      "We start every engagement by mapping the human experience uncovering pain points, motivations, and unmet needs through research-driven discovery so every solution is grounded in real-world context.",
    capabilities: [
      "User Research & Journey Mapping",
      "Stakeholder Interviews & Workshops",
      "Experience Audits & Heuristic Reviews",
      "Persona Development & Scenario Modeling",
    ],
  },
  {
    label: "Insight",
    icon: ScanSearch,
    tagline: "Decode the Data",
    description:
      "Raw data becomes strategic clarity. We analyze behavioural patterns, market signals, and operational metrics to surface the insights that inform smarter decisions and sharper priorities.",
    capabilities: [
      "Data Analytics & Visualization",
      "Competitive & Market Intelligence",
      "Behavioral Pattern Analysis",
      "KPI Frameworks & Measurement Design",
    ],
  },
  {
    label: "Innovate",
    icon: Lightbulb,
    tagline: "Architect the Future",
    description:
      "Ideas crystallize into executable blueprints. We design forward-looking architectures, validate concepts rapidly, and create innovation roadmaps that balance ambition with feasibility.",
    capabilities: [
      "Solution Architecture & System Design",
      "Rapid Prototyping & PoC Development",
      "Technology Evaluation & Selection",
      "Innovation Roadmap Planning",
    ],
  },
  {
    label: "Accelerate",
    icon: Rocket,
    tagline: "Build at Velocity",
    description:
      "Velocity without compromise. Our agile delivery engine turns validated designs into production-grade software through disciplined sprints, CI/CD pipelines, and cross-functional collaboration.",
    capabilities: [
      "Agile Sprint Delivery & Scrum",
      "CI/CD Pipeline Automation",
      "Cloud-Native Development",
      "Cross-Functional Team Integration",
    ],
  },
  {
    label: "Assure",
    icon: ShieldCheck,
    tagline: "Guarantee the Outcome",
    description:
      "Launch is just the beginning. We embed quality at every layer automated testing, security hardening, performance tuning, and proactive monitoring ensure solutions that endure.",
    capabilities: [
      "Automated Testing & QA Frameworks",
      "Security Audits & Compliance",
      "Performance Optimization & Monitoring",
      "Post-Launch Support & SLA Management",
    ],
  },
];

interface ServiceCategory {
  icon: LucideIcon;
  name: string;
}

const serviceCategories: ServiceCategory[] = [
  { icon: Code2, name: "Application Development & Maintenance" },
  { icon: GitBranch, name: "Business Process Management" },
  { icon: MessageSquareText, name: "Consulting Services" },
  { icon: Sparkles, name: "Incubating Emerging Offerings" },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const contentVariants = {
  initial: { y: 8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
};

const contentTransition = { duration: 0.25, ease: "easeOut" as const };

const capVariants = {
  initial: { x: -12, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  const active = pillars[activeIndex];
  const ActiveIcon = active.icon;

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
            Our Methodology
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Engineered{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
            A five-phase methodology that transforms vision into validated,
            production-grade outcomes from first insight to lasting assurance.
          </p>
        </div>

        {/* ── Mobile pill tabs (wrapped) ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 lg:hidden">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.label}
                onClick={() => handleTabClick(i)}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-500 ease-out",
                  activeIndex === i
                    ? "border-[#4093FF]/50 bg-[#4093FF]/10 text-white"
                    : "border-white/[0.08] bg-white/[0.02] text-white/40 hover:border-white/15 hover:text-white/60"
                )}
              >
                <Icon size={14} strokeWidth={1.5} className="sm:h-4 sm:w-4" />
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* ── Desktop layout: sidebar + content ── */}
        <div className="mt-8 lg:mt-16 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sidebar (desktop only) */}
          <div className="relative hidden lg:block">
            {/* Sliding blue indicator */}
            <div
              className="absolute left-0 top-0 w-[3px] rounded-full bg-[#4093FF] transition-transform duration-500 ease-out"
              style={{
                height: 48,
                transform: `translateY(${activeIndex * (48 + 8)}px)`,
              }}
            />

            <div className="flex flex-col gap-2">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <button
                    key={pillar.label}
                    onClick={() => handleTabClick(i)}
                    className={cn(
                      "flex h-12 items-center gap-3 rounded-lg pl-5 pr-4 text-left text-sm font-medium transition-all duration-500 ease-out",
                      activeIndex === i
                        ? "bg-white/[0.04] text-white"
                        : "text-white/35 hover:bg-white/[0.02] hover:text-white/60"
                    )}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className={cn(
                        "shrink-0 transition-colors duration-500",
                        activeIndex === i ? "text-[#4093FF]" : "text-white/30"
                      )}
                    />
                    {pillar.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Content area ── */}
          <div className="mt-6 sm:mt-8 min-h-[320px] sm:min-h-[420px] lg:mt-0">
            {/* Step counter + dots */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-xs font-medium tabular-nums text-white/30">
                {String(activeIndex + 1).padStart(2, "0")}/05
              </span>
              <div className="flex items-center gap-1.5">
                {pillars.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 ease-out",
                      activeIndex === i
                        ? "w-6 bg-[#4093FF]"
                        : "w-1.5 bg-white/15"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Crossfade wrapper */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={contentTransition}
              >
                {/* Icon + title + tagline */}
                <div className="mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <ActiveIcon
                      strokeWidth={1.5}
                      className="h-5 w-5 sm:h-6 sm:w-6 text-[#4093FF]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white sm:text-2xl">
                      {active.label}
                    </h3>
                    <p className="text-sm text-[#4093FF]/70">
                      {active.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 sm:mb-8 max-w-xl text-xs sm:text-base leading-relaxed text-white/40">
                  {active.description}
                </p>

                {/* Capability cards — staggered entrance */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {active.capabilities.map((cap, i) => (
                    <motion.div
                      key={cap}
                      variants={capVariants}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: 0.5,
                        ease: "easeOut" as const,
                        delay: i * 0.075,
                      }}
                      className="rounded-lg sm:rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 sm:px-5 sm:py-4 text-xs sm:text-sm text-white/50"
                    >
                      <span className="mr-2 text-[#4093FF]/50">&#x2022;</span>
                      {cap}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Service categories bar ── */}
        <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-2.5 sm:mt-16 sm:gap-4 lg:mt-20 lg:grid-cols-4 lg:grid-rows-none">
          {serviceCategories.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.name}
                className="group relative rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6 transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
              >
                {/* Hover glow overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Icon */}
                <div className="relative mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                  <Icon
                    strokeWidth={1.5}
                    className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                  />
                </div>

                {/* Name */}
                <h4 className="relative text-xs sm:text-sm font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-white">
                  {svc.name}
                </h4>

                {/* Bottom accent line */}
                <div className="absolute inset-x-4 sm:inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
