import {
  BarChart3,
  Landmark,
  GraduationCap,
  HeartPulse,
  Film,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Domain {
  icon: LucideIcon;
  name: string;
  description: string;
}

const domains: Domain[] = [
  {
    icon: BarChart3,
    name: "Business Intelligence",
    description:
      "Data-driven dashboards, analytics platforms, and decision engines that turn raw data into strategic advantage.",
  },
  {
    icon: Landmark,
    name: "FinTech",
    description:
      "Secure payment systems, digital banking interfaces, and financial infrastructure built for scale and compliance.",
  },
  {
    icon: GraduationCap,
    name: "Ed-Tech",
    description:
      "Immersive learning platforms, adaptive curricula, and AI-powered tools that redefine modern education.",
  },
  {
    icon: HeartPulse,
    name: "HealthCare",
    description:
      "HIPAA-ready patient portals, telemedicine solutions, and clinical tools that prioritize care and privacy.",
  },
  {
    icon: Film,
    name: "MediaTech",
    description:
      "Streaming architectures, content management systems, and creator tools for the next era of digital media.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40"
    >
      {/* Subtle top gradient for seamless hero transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />

      {/* Faint radial glow behind the section */}
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
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Domains We{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
            We bring deep technical expertise to the industries that matter
            most, delivering solutions engineered for impact and built to last.
          </p>
        </div>

        {/* Domain cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.name}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8 [&:nth-child(4)]:lg:col-start-1 [&:nth-child(4)]:lg:col-end-2 [&:nth-child(4)]:lg:translate-x-[50%] [&:nth-child(5)]:lg:col-start-2 [&:nth-child(5)]:lg:col-end-3 [&:nth-child(5)]:lg:translate-x-[50%]"
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
                <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                  />
                </div>

                {/* Name */}
                <h3 className="relative text-lg font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-white">
                  {domain.name}
                </h3>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55">
                  {domain.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
