import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  GitBranch,
  Database,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsSection from "@/components/SolutionsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export const metadata: Metadata = {
  title: "Solutions — Kolom Technologies",
  description:
    "AI-powered products, SaaS platforms, enterprise systems, data platforms, and information platforms, engineered end to end through Kolom's five-phase method: Experience, Insight, Innovate, Accelerate, Assure.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SolutionPattern {
  icon: LucideIcon;
  name: string;
  description: string;
  proof?: { label: string; href: string };
}

const solutionPatterns: SolutionPattern[] = [
  {
    icon: Sparkles,
    name: "AI-Powered Products",
    description:
      "Intelligence embedded where your users already work: retrieval, generation, and decision support built into the product itself, engineered to hold up in production.",
    proof: { label: "Live proof: Kolom AI", href: "/case-studies/kolomai" },
  },
  {
    icon: Layers,
    name: "SaaS Platforms",
    description:
      "Multi-tenant, subscription-ready platforms designed for recurring revenue, with authentication, roles, billing, and scale handled from day one.",
    proof: {
      label: "Live proof: Who Works When",
      href: "/case-studies/who-works-when",
    },
  },
  {
    icon: GitBranch,
    name: "Enterprise Systems & Integrations",
    description:
      "Internal platforms and business process automation that connect the systems your company already runs on, removing manual load without disrupting operations.",
  },
  {
    icon: Database,
    name: "Data & Analytics Platforms",
    description:
      "From raw events to executive dashboards: warehousing, pipelines, and visualization engineered as one coherent platform, not a patchwork of tools.",
  },
  {
    icon: Newspaper,
    name: "Digital Publishing & Information Platforms",
    description:
      "Content and information systems built for credibility: multi-perspective publishing, editorial workflows, and intelligent delivery at scale.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SolutionsPage() {
  return (
    <>
      <Header />

      <main className="bg-black">
        {/* ══ Hero ══ */}
        <section className="relative overflow-hidden bg-black pt-44 pb-6 sm:pt-52 sm:pb-10">
          {/* Background radial glow */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "80vw",
              height: "60vh",
              background:
                "radial-gradient(ellipse at center, rgba(64,147,255,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Blueprint grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 35%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 35%, black 20%, transparent 75%)",
            }}
          />

          {/* Watermark logo */}
          <div className="pointer-events-none absolute -top-8 -left-14 opacity-[0.03] sm:-left-6">
            <Image
              src="/logo/logo-icon-white.svg"
              alt=""
              width={400}
              height={400}
              aria-hidden="true"
              className="h-64 w-auto -rotate-12 sm:h-80"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
              Our Solutions
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Outcomes,{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Engineered
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
              We don&apos;t sell hours. We take responsibility for results:
              measurable, maintainable systems that keep working long after
              launch.
            </p>
          </div>
        </section>

        {/* ══ Solution patterns ══ */}
        <section className="relative overflow-hidden bg-black py-24 sm:py-32">
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
            {/* Section header */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
                What We Build
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Systems That{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Endure
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
                Five solution patterns we return to because they work. Each
                one proven in production, not in slideware.
              </p>
            </div>

            {/* Editorial numbered list */}
            <div className="mx-auto mt-16 max-w-5xl border-t border-white/[0.06] lg:mt-20">
              {solutionPatterns.map((pattern, i) => {
                const Icon = pattern.icon;
                return (
                  <div
                    key={pattern.name}
                    className="group relative grid grid-cols-[3rem_1fr] items-start gap-4 border-b border-white/[0.06] py-8 transition-colors duration-500 hover:bg-white/[0.015] sm:grid-cols-[5rem_1fr_auto] sm:gap-6 sm:py-10"
                  >
                    <span className="pt-1 text-sm font-medium tabular-nums text-white/25 transition-colors duration-500 group-hover:text-[#4093FF] sm:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold tracking-tight text-white transition-colors duration-500 sm:text-2xl">
                        {pattern.name}
                      </h3>
                      <p className="max-w-2xl text-sm leading-relaxed text-white/40 sm:text-base">
                        {pattern.description}
                      </p>
                      {pattern.proof && (
                        <Link
                          href={pattern.proof.href}
                          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#4093FF]/30 bg-[#4093FF]/10 px-3.5 py-1 text-xs font-medium text-[#4093FF] transition-all duration-300 hover:bg-[#4093FF]/20 hover:text-white"
                        >
                          {pattern.proof.label}
                          <ArrowRight size={12} strokeWidth={2} />
                        </Link>
                      )}
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)] sm:flex">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                      />
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ Our Methodology (reused from homepage) ══ */}
        <SolutionsSection />

        {/* ══ Proof (reused from homepage) ══ */}
        <CaseStudiesSection />
      </main>

      <Footer />
    </>
  );
}
