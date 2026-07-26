import {
  Code2,
  Cpu,
  BarChart3,
  Landmark,
  Blocks,
  MessageSquareText,
  ClipboardCheck,
  UsersRound,
  Compass,
  Award,
  ShieldCheck,
  Scale,
  Activity,
} from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Kolom Technologies",
  description:
    "Custom application development, applied AI, data & business intelligence, fintech engineering, blockchain, and senior advisory, delivered end to end under contract by Kolom Technologies Ltd.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ServiceLine {
  icon: LucideIcon;
  name: string;
  description: string;
  deliverables: string[];
}

const serviceLines: ServiceLine[] = [
  {
    icon: Code2,
    name: "Custom Application Development",
    description:
      "Web and mobile products engineered for scale, from a first release that wins users to enterprise-grade platforms that serve millions.",
    deliverables: [
      "Product Engineering with Next.js, React & Node",
      "Native & Cross-Platform Mobile Apps",
      "API Design & Platform Architecture",
      "Legacy Modernization & Re-Platforming",
    ],
  },
  {
    icon: Cpu,
    name: "AI & Intelligent Automation",
    description:
      "Applied AI that ships to production. Intelligent features and automation wired into real business workflows, not demos.",
    deliverables: [
      "LLM-Powered Product Features",
      "Workflow & Process Automation",
      "ML Pipelines & Model Operations",
      "AI Strategy & Readiness Assessment",
    ],
  },
  {
    icon: BarChart3,
    name: "Data & Business Intelligence",
    description:
      "Decision infrastructure for leadership teams: pipelines, dashboards, and metrics you can actually run a company on.",
    deliverables: [
      "Analytics Platforms & Dashboards",
      "Data Warehousing & Pipelines",
      "KPI Frameworks & Measurement Design",
      "Predictive & Behavioral Analytics",
    ],
  },
  {
    icon: Landmark,
    name: "FinTech Engineering",
    description:
      "Financial software with compliance in its bones, built by leadership that has shipped platforms for bKash and Daraz (Alibaba Group).",
    deliverables: [
      "Payment Systems & Digital Wallets",
      "Digital Banking Infrastructure",
      "Regulatory & Compliance-Aware Builds",
      "Transaction Security & Fraud Controls",
    ],
  },
  {
    icon: Blocks,
    name: "Blockchain Applications",
    description:
      "Custom blockchain where it genuinely earns its place: smart contracts and distributed systems engineered without the hype.",
    deliverables: [
      "Smart Contract Development & Review",
      "Custom Chain & Protocol Engineering",
      "Tokenization & Digital Asset Platforms",
      "Web3 Integration for Existing Products",
    ],
  },
  {
    icon: MessageSquareText,
    name: "Consulting & Advisory",
    description:
      "Senior judgment on demand. The perspective of engineers who have shipped at global scale, applied to your roadmap.",
    deliverables: [
      "Architecture & Codebase Reviews",
      "Technology Evaluation & Selection",
      "AI Adoption & Data Strategy",
      "Fractional CTO Engagement",
    ],
  },
];

interface EngagementModel {
  icon: LucideIcon;
  number: string;
  name: string;
  description: string;
}

const engagementModels: EngagementModel[] = [
  {
    icon: ClipboardCheck,
    number: "01",
    name: "Fixed-Scope Delivery",
    description:
      "A defined outcome at a defined price. We scope together, put deliverables and milestones in writing, and own the result until handover, with clear IP terms in every contract.",
  },
  {
    icon: UsersRound,
    number: "02",
    name: "Dedicated Team",
    description:
      "An embedded squad of senior engineers and designers working as an extension of yours: sprint cadence, transparent reporting, and direct access to the people writing the code.",
  },
  {
    icon: Compass,
    number: "03",
    name: "Advisory Retainer",
    description:
      "Ongoing access to our principals for architecture, AI, and product decisions. Continuous senior guidance without the overhead of a full build. NDAs welcome from day one.",
  },
];

interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: Award,
    title: "Senior-Only Team",
    description:
      "Staffed by leadership that shipped for Daraz (Alibaba Group), bKash, and NASA's Astrobee aboard the ISS.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Encryption in transit and at rest, access controls, and regular audits, applied to every build.",
  },
  {
    icon: Scale,
    title: "Registered & Accountable",
    description:
      "A registered company in Dhaka, Bangladesh. Every engagement runs under a written contract.",
  },
  {
    icon: Activity,
    title: "Proven in Production",
    description:
      "WhoWorksWhen, Lienzo, and Kolom AI are live today. Products we built and stand behind.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
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
          <div className="pointer-events-none absolute -top-8 -right-14 opacity-[0.03] sm:-right-6">
            <Image
              src="/logo/logo-icon-white.svg"
              alt=""
              width={400}
              height={400}
              aria-hidden="true"
              className="h-64 w-auto rotate-12 sm:h-80"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
              Our Services
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Full-Stack Delivery,{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                End to End
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
              From first workshop to production SLA, one accountable team of
              senior engineers, designers, and AI specialists. Registered,
              contract-governed, and built for the long term.
            </p>
          </div>
        </section>

        {/* ══ Service lines (bento) ══ */}
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
                What We Deliver
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Six Ways We{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Ship
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
                Every service line delivered under one contract, by one
                accountable team. No handoffs, no finger-pointing.
              </p>
            </div>

            {/* Bento grid */}
            <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
              {serviceLines.map((service, i) => {
                const Icon = service.icon;
                const isWide = i % 3 === 0;
                return (
                  <div
                    key={service.name}
                    className={[
                      "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8",
                      isWide ? "lg:col-span-2" : "",
                    ].join(" ")}
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                      }}
                    />

                    {/* Decorative large number */}
                    <span className="pointer-events-none absolute -top-4 -right-2 text-[100px] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[#4093FF]/[0.04] sm:text-[140px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                        />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {service.name}
                      </h3>
                      <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55">
                        {service.description}
                      </p>

                      <ul
                        className={[
                          "grid gap-2.5",
                          isWide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
                        ].join(" ")}
                      >
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm text-white/40"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#4093FF]/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ Engagement models + trust ══ */}
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
                How We Engage
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Built Around{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Your Cadence
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
                Three ways to work with us, each governed by a written
                contract and each with direct access to leadership.
              </p>
            </div>

            {/* Engagement model cards */}
            <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
              {engagementModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
                  >
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
                      {model.number}
                    </span>

                    <div className="relative">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                        {model.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                        {model.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>

            {/* Trust points */}
            <div className="mt-12 grid grid-cols-2 gap-2.5 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
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
                      {point.title}
                    </h4>
                    <p className="relative text-xs sm:text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55">
                      {point.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute inset-x-4 sm:inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
