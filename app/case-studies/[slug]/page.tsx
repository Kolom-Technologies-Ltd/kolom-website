import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import {
  caseStudies,
  getCaseStudyBySlug,
  getOtherCaseStudies,
} from "@/lib/case-studies";
import { caseStudyIcons } from "@/lib/case-study-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Kolom Technologies`,
    description: study.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const others = getOtherCaseStudies(slug);
  const Icon = caseStudyIcons[study.iconName];

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
            href="/#work"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-[#4093FF]"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to Home
          </Link>

          {/* ── Header ── */}
          <div className="mb-10">
            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title row */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#4093FF]"
                    />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    {study.title}
                  </h1>
                </div>
                <p className="mt-1 text-sm font-medium text-[#4093FF]/60 sm:text-base">
                  {study.tagline}
                </p>
              </div>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-[#4093FF]/30 bg-[#4093FF]/10 px-6 py-2.5 text-sm font-medium text-[#4093FF] transition-all duration-300 hover:bg-[#4093FF]/20 hover:text-white hover:shadow-[0_0_24px_rgba(64,147,255,0.15)]"
              >
                Visit Live Project
                <ExternalLink
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                />
              </a>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/40 sm:text-lg">
              {study.description}
            </p>
          </div>

          {/* ── Hero image ── */}
          <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-900">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              style={{ objectPosition: study.objectPosition }}
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          </div>

          {/* ── Challenge & Solution ── */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Challenge */}
            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#4093FF]/40 hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10">
                  <Target
                    size={18}
                    strokeWidth={1.5}
                    className="text-white/40 transition-colors duration-500 group-hover:text-[#4093FF]"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  The Challenge
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/40 sm:text-base">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#4093FF]/40 hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10">
                  <Lightbulb
                    size={18}
                    strokeWidth={1.5}
                    className="text-white/40 transition-colors duration-500 group-hover:text-[#4093FF]"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Our Solution
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/40 sm:text-base">
                {study.solution}
              </p>
            </div>
          </div>

          {/* ── Key Features ── */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Key{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {study.features.map((f) => (
                <div
                  key={f.title}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-7"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/35">
                      {f.description}
                    </p>
                  </div>
                  {/* Bottom accent line */}
                  <div className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Tech Stack ── */}
          <div className="mb-16">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Tech{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/50 transition-all duration-300 hover:border-[#4093FF]/30 hover:text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Results ── */}
          <div className="mb-20">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The{" "}
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <div
              className={cn(
                "grid gap-5",
                study.results.length === 4
                  ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-3"
              )}
            >
              {study.results.map((r) => (
                <div
                  key={r.label}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center transition-all duration-500 hover:border-[#4093FF]/40 hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]"
                >
                  <p className="text-3xl font-bold text-[#4093FF] sm:text-4xl">
                    {r.value}
                  </p>
                  <p className="mt-2 text-sm text-white/40">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Explore More ── */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              <h2 className="shrink-0 text-sm font-semibold uppercase tracking-widest text-white/25">
                Explore More
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {others.map((o) => {
                const OIcon = caseStudyIcons[o.iconName];
                return (
                  <Link
                    key={o.slug}
                    href={`/case-studies/${o.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)] sm:p-7"
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
                      }}
                    />

                    <div className="relative flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10">
                        <OIcon
                          size={18}
                          strokeWidth={1.5}
                          className="text-white/40 transition-colors duration-500 group-hover:text-[#4093FF]"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-white">
                          {o.title}
                        </h3>
                        <p className="text-xs text-white/30">{o.tagline}</p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="shrink-0 text-white/20 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-[#4093FF]"
                      />
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
