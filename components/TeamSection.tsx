"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
  yearsOfExperience: number;
  highlights: string[];
  techStack: string[];
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Asif Shariar Likhon",
    role: "CEO",
    yearsOfExperience: 4,
    highlights: [
      "Secured Shark Tank investment for Stickon.xyz, reducing CAC by 45%",
      "Scaled Quran Touch to over 1 million international users",
      "Generated $80K+ in client revenue via scalable B2B sales funnels",
    ],
    techStack: ["HubSpot", "Google Ads", "Klaviyo", "CRM", "Scikit-learn", "Data Analytics"],
    image: "/team/likhon.png",
  },
  {
    name: "Md. Hashibul Islam",
    role: "CTO",
    yearsOfExperience: 4,
    highlights: [
      "Built logistics platforms for Daraz (Alibaba Group)",
      "Engineered real-time ride-sharing systems at scale",
      "Developed mission-critical software for NASA's Astrobee on the ISS",
    ],
    techStack: ["Java", "Spring", "Microservices", "Python", "PostgreSQL", "AWS", "Docker", "K8s"],
    image: "/team/hasib.png",
  },
  {
    name: "Shitab Mir",
    role: "Head of Mobile & Integration",
    yearsOfExperience: 8,
    highlights: [
      "Engineered apps scaling to 10M+ users for Daraz",
      "Built multi-layered logistics & fintech platforms for HungryNaki & bKash",
      "Drove enterprise digital transformation through robust MSME solutions",
    ],
    techStack: ["Android", "iOS", "Flutter", "Kotlin Multiplatform", "API Integration"],
    image: "/team/shitab.png",
  },
  {
    name: "Md. Raihan Rahman",
    role: "COO",
    yearsOfExperience: 4,
    highlights: [
      "Spearheaded IoT project management at Aqualink",
      "Ensured strict HIPAA compliance for Therap's Oracle-backed systems",
      "End-to-end lifecycle leadership for secure, scalable enterprise solutions",
    ],
    techStack: ["E2E Testing", "Product Strategy", "Oracle SQL", "HIPAA Security", "IoT", "JIRA"],
    image: "/team/raihan.png",
  },
  {
    name: "Touhidul Islam Chayan",
    role: "Head of Design & Web",
    yearsOfExperience: 5,
    highlights: [
      "Led ADIQ MVP, securing a $23M CAD investment",
      "Architected Canada's first instant tenant verification platform",
      "IEEE-published ML medical imaging solution",
    ],
    techStack: ["React/Next.js", "TypeScript", "React Native", "Node.js", "Go", ".NET Core", "Python", "AWS"],
    image: "/team/chayan.png",
  },
  {
    name: "A. A. Noman Ansary",
    role: "Head of AI & Data Security",
    yearsOfExperience: 6,
    highlights: [
      "Maintained DHL's OCR engine and built AI training platforms",
      "Engineered secure infrastructure for 200+ enterprise systems",
      "Created interactive 3D educational web games",
    ],
    techStack: ["Django", "FastAPI", ".NET", "Three.js", "PyTorch", "vLLM", "Redis", "Docker"],
    image: "/team/ansary.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setDisplayIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [activeIndex, isTransitioning]
  );

  const prev = useCallback(() => {
    switchTo((activeIndex - 1 + team.length) % team.length);
  }, [activeIndex, switchTo]);

  const next = useCallback(() => {
    switchTo((activeIndex + 1) % team.length);
  }, [activeIndex, switchTo]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const active = team[displayIndex];

  return (
    <section
      id="team"
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
        {/* ── Top header: heading left, description right ── */}
        <div className="lg:flex lg:items-end lg:gap-20">
          <div className="shrink-0">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
              Who We Are
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[0.95]">
              Leadership
              <br />
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
          </div>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/40 sm:text-lg lg:mt-0 lg:pb-2">
            An innovation-led team specializing in enterprise-grade web, mobile,
            and AI-driven solutions bridging sophisticated technology and
            human impact to deliver{" "}
            <span className="font-semibold text-white/70">
              extraordinary results
            </span>{" "}
            worldwide.
          </p>
        </div>

        {/* ── Showcase area ── */}
        <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-[1fr_440px] lg:items-end lg:gap-12 xl:grid-cols-[1fr_500px]">
          {/* Featured image — first in DOM for mobile, right column on desktop */}
          <div className="relative lg:order-2">
            {/* Blue geometric triangle accent */}
            <div
              className="absolute -bottom-6 -right-6 z-0 h-[55%] w-[60%] rounded-br-3xl"
              style={{
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                background:
                  "linear-gradient(135deg, rgba(64,147,255,0.12), rgba(64,147,255,0.35))",
              }}
            />

            {/* Image container */}
            <div
              className={cn(
                "relative z-10 aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 transition-all duration-500 ease-out",
                isTransitioning
                  ? "scale-[0.97] opacity-0"
                  : "scale-100 opacity-100"
              )}
            >
              <Image
                src={active.image}
                alt={active.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
                unoptimized
              />
              {/* Subtle bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
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
                      unoptimized
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Active member info — crossfade */}
            <div
              className={cn(
                "transition-all duration-300 ease-out",
                isTransitioning
                  ? "translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100"
              )}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
