import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Building2, Lock } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import ClientLogos from "@/components/ClientLogos";

export const metadata: Metadata = {
  title: "About — Kolom Technologies",
  description:
    "Kolom Technologies Ltd. is an innovation-led software company headquartered in Dhaka, Bangladesh. A registered, contract-governed engineering partner whose leadership has shipped for Daraz (Alibaba Group), bKash, and NASA's Astrobee program.",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-black">
        {/* ══ Hero + story ══ */}
        <section className="relative overflow-hidden bg-black pt-44 pb-24 sm:pt-52 sm:pb-32">
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
                "radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 25%, black 20%, transparent 75%)",
            }}
          />

          {/* Watermark logo behind heading */}
          <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 opacity-[0.04] sm:top-10">
            <Image
              src="/logo/logo-icon-white.svg"
              alt=""
              width={560}
              height={560}
              aria-hidden="true"
              className="h-80 w-auto sm:h-[26rem]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
                Our Story
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Built on Craft. Bound by{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Trust
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
                Kolom Technologies Ltd. is an{" "}
                <span className="font-semibold text-white/70">
                  innovation-led software company
                </span>{" "}
                headquartered in Dhaka, Bangladesh, and a{" "}
                <span className="font-semibold text-white/70">
                  registered, contract-governed partner
                </span>{" "}
                to clients worldwide.
              </p>
            </div>

            {/* Story */}
            <div className="mx-auto mt-16 max-w-4xl sm:mt-24">
              {/* Thesis statement, centered under a kolom drop line */}
              <div className="mx-auto max-w-2xl text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-8 block h-10 w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#4093FF]/60 to-[#4093FF] sm:h-14"
                />
                <p className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
                  We exist to transform{" "}
                  <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                    complexity into clarity.
                  </span>
                </p>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
                  Businesses today run on systems that have outgrown the
                  people who built them: tangled data, manual processes,
                  software that resists change. We build products that make
                  the complex legible, dependable, and fast.
                </p>
              </div>

              {/* What we believe, centered columns */}
              <div className="mt-14 grid grid-cols-1 gap-y-10 border-y border-white/[0.06] py-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-0 sm:divide-x sm:divide-white/[0.06] sm:py-12">
                <div className="group relative px-2 text-center sm:px-8">
                  <span className="text-sm font-medium tabular-nums text-white/25 transition-colors duration-500 group-hover:text-[#4093FF] sm:text-base">
                    01
                  </span>
                  <h3 className="mt-2 mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Senior craft beats headcount
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-white/40 sm:text-base">
                    Kolom is deliberately built around a compact leadership
                    team of engineers, designers, and AI specialists.
                    Software that cannot afford to fail is the standard we
                    bring to yours.
                  </p>
                  <div className="absolute inset-x-8 hidden h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:-bottom-12 sm:block" />
                </div>

                <div className="group relative px-2 text-center sm:px-8">
                  <span className="text-sm font-medium tabular-nums text-white/25 transition-colors duration-500 group-hover:text-[#4093FF] sm:text-base">
                    02
                  </span>
                  <h3 className="mt-2 mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Technology should serve people
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-white/40 sm:text-base">
                    An intelligent system that sharpens a company&apos;s edge,
                    or an information platform that gives people the full
                    picture: technology should serve people as much as
                    businesses.
                  </p>
                  <div className="absolute inset-x-8 hidden h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:-bottom-12 sm:block" />
                </div>
              </div>

              {/* Closing question */}
              <div className="mt-14 sm:mt-16">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                  <span className="shrink-0 text-[11px] font-medium tracking-[0.2em] text-white/30 uppercase">
                    Measured by one question
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                </div>
                <p className="mt-6 text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Does it make the complex{" "}
                  <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                    clear?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ Mission & Vision ══ */}
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
                What Drives Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Precision, with{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Purpose
                </span>
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
              {/* Mission */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                  }}
                />
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
                    To craft intelligent, dependable systems that give
                    businesses a real edge, and to build information platforms
                    people can genuinely trust. We engineer with precision and
                    deliver with purpose, because software that matters
                    deserves nothing less.
                  </p>
                </div>

                <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-10" />
              </div>

              {/* Vision */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                  }}
                />
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
                    A future where intelligent systems raise what businesses
                    can do, and honest information raises what people can know.
                    We are building the engineering partner that future will be
                    trusted to: precise in method, global in reach,
                    accountable in every line of code.
                  </p>
                </div>

                <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ Client showcase (shared with homepage) ══ */}
        <ClientLogos large />

        {/* ══ Review platforms (root hero pattern, enlarged) ══ */}
        <section className="relative overflow-hidden bg-black py-14 sm:py-16">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:px-10">
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/50 uppercase">
              Enlisted on
            </span>
            <div className="flex items-center gap-8 sm:gap-12">
              <div className="flex items-center gap-3">
                <Image
                  src="/enlisted/goodfirms.webp"
                  alt="Goodfirms"
                  width={100}
                  height={28}
                  className="h-8 w-auto rounded-full sm:h-10"
                />
                <span className="text-base font-medium text-white/30 sm:text-lg">
                  Goodfirms
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/enlisted/clutch.webp"
                  alt="Clutch"
                  width={100}
                  height={28}
                  className="h-8 w-auto rounded-full sm:h-10"
                />
                <span className="text-base font-medium text-white/30 sm:text-lg">
                  Clutch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ Who We Are (reused from homepage) ══ */}
        <TeamSection />

        {/* ══ Legal & accountability ══ */}
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
                Accountability
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                On the Record, by{" "}
                <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                  Design
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/40 sm:text-lg md:mt-6">
                Trust shouldn&apos;t be taken on faith. Ours is written down
                in contracts, in policy, in law.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-20">
              {/* Registered entity */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                    <Building2
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                    Registered Entity
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                    Kolom Technologies Ltd., 889 Apollo Rd, Dhaka 1229,
                    Bangladesh. A registered company whose engagements are
                    governed by written contracts under the laws of Bangladesh.
                  </p>
                  <Link
                    href="/terms"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30 transition-colors duration-300 hover:text-[#4093FF]"
                  >
                    Read our Terms &amp; Conditions
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8" />
              </div>

              {/* Data protection */}
              <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]">
                    <Lock
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/50 transition-colors duration-500 group-hover:text-[#4093FF]"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                    Data Protection
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                    A GDPR-aware privacy program: encryption in transit and at
                    rest, access controls, regular security audits, and a
                    standing commitment that we never sell personal data.
                  </p>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30 transition-colors duration-300 hover:text-[#4093FF]"
                  >
                    Read our Privacy Policy
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-8" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
