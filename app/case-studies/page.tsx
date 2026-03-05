import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyIcons } from "@/lib/case-study-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — Kolom Technologies",
  description:
    "Explore our portfolio of software products — from workforce scheduling to AI-powered news intelligence.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black pt-32 pb-24">
        {/* Background radial glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "80vw",
            height: "60vh",
            background:
              "radial-gradient(ellipse at center, rgba(64,147,255,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
          {/* ── Back link ── */}
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-[#4093FF]"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to Home
          </Link>

          {/* ── Section heading ── */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Case{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
              Real products we&apos;ve built — from idea to launch and beyond.
            </p>
          </div>

          {/* ── Project cards ── */}
          <div className="grid grid-cols-1 gap-6">
            {caseStudies.map((study) => {
              const Icon = caseStudyIcons[study.iconName];
              return (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative grid grid-cols-1 md:grid-cols-[1fr_320px]">
                    {/* Text content */}
                    <div className="p-7 sm:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10">
                          <Icon
                            size={20}
                            strokeWidth={1.5}
                            className="text-white/40 transition-colors duration-500 group-hover:text-[#4093FF]"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-white sm:text-xl">
                            {study.title}
                          </h2>
                          <p className="text-sm font-medium text-[#4093FF]/60">
                            {study.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/35"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-white/40 line-clamp-3">
                        {study.description}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30 transition-colors duration-300 group-hover:text-[#4093FF]">
                        View case study
                        <ArrowRight
                          size={14}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: study.objectPosition }}
                          sizes="320px"
                        />
                        {/* Left fade */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/60 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
