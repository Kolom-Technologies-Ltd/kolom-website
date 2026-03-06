import { Target, Eye, ShieldCheck, Cpu, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Users,
    title: "Client-Focused Delivery",
    description: "Measurable outcomes, clear milestones, and transparent reporting at every stage.",
  },
  {
    icon: Cpu,
    title: "AI-First Expertise",
    description: "Practical, explainable machine learning that integrates with real business workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "Built-in compliance, data protection, and operational resilience from day one.",
  },
  {
    icon: Zap,
    title: "End-to-End Capability",
    description: "From discovery and prototyping to long-term operations and optimization.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSection() {
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
            About Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Transforming Complexity{" "}
            <br className="hidden sm:block" />
            into{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
            Kolom Technologies is an innovation-led software company specializing
            in enterprise-grade web, mobile, and AI-driven solutions. We bridge
            sophisticated technology and human impact to deliver end-to-end
            products that empower businesses and strengthen societies worldwide.
          </p>
        </div>

        {/* ── Mission & Vision ── */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-10">
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
              }}
            />

            {/* Decorative large number */}
            <span className="pointer-events-none absolute -top-4 -right-2 text-[120px] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[#4093FF]/[0.04] sm:text-[160px]">
              01
            </span>

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                <Target
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                Transforming complexity into clarity. We craft intelligent systems
                that empower businesses globally while strengthening people through
                transparent, multi-perspective information. Building technology with
                precision, delivering with purpose.
              </p>
            </div>

            {/* Bottom accent */}
            <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-10" />
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-10">
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
              }}
            />

            {/* Decorative large number */}
            <span className="pointer-events-none absolute -top-4 -right-2 text-[120px] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[#4093FF]/[0.04] sm:text-[160px]">
              02
            </span>

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                <Eye
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                To build a future where intelligent systems empower businesses and
                transparent information empowers people. Innovation engineered with
                precision, scaled with impact, trusted worldwide.
              </p>
            </div>

            {/* Bottom accent */}
            <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-10" />
          </div>
        </div>

        {/* ── Differentiators ── */}
        <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-2.5 sm:grid-rows-none sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                    }}
                  />
                </div>

                <div className="relative mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                  <Icon
                    strokeWidth={1.5}
                    className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                  />
                </div>

                <h4 className="relative mb-1.5 text-xs sm:text-sm font-semibold tracking-tight text-white">
                  {d.title}
                </h4>
                <p className="relative text-xs sm:text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55">
                  {d.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute inset-x-4 sm:inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
