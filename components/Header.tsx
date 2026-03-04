"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyIcons } from "@/lib/case-study-icons";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (megaTimeout.current) clearTimeout(megaTimeout.current);
    };
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  return (
    <>
      <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl">
        {/* ── Main pill ── */}
        <div
          className={[
            "relative flex items-center justify-between gap-2 mx-auto",
            "rounded-full border border-white/15 bg-white/5 backdrop-blur-xl",
            "pl-2 pr-2 py-2 md:px-2 md:py-2",
            "transition-all duration-500 ease-in-out",
            scrolled
              ? "max-w-2xl shadow-2xl shadow-black/40"
              : "max-w-4xl shadow-xl shadow-black/20",
          ].join(" ")}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center pl-2 transition-opacity duration-300 hover:opacity-80 select-none"
            aria-label="Home"
          >
            <Image
              src="/logo/logo-full-white.svg"
              alt="Kolom Technologies"
              width={504}
              height={160}
              priority
              className="h-5 w-auto md:h-6"
            />
          </Link>

          {/* ── Desktop navigation (center) ── */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-1">
            {navLinks.map((link) =>
              link.label === "Case Studies" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <Link
                    href={link.href}
                    className={[
                      "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full",
                      megaOpen
                        ? "text-white bg-white/5"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-1.5 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white rounded-full hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── CTA button (right) ── */}
          <Link
            href="mailto:team@kolom.ai"
            className="hidden md:inline-flex items-center flex-shrink-0 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            team@kolom.ai
          </Link>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-[60] inline-flex md:hidden items-center justify-center w-10 h-10 rounded-full text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
          </button>
        </div>

        {/* ── Megamenu (desktop only) ── */}
        <div
          className={[
            "hidden md:block absolute left-1/2 -translate-x-1/2 w-full max-w-2xl pt-3",
            "transition-all duration-300 ease-out",
            megaOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 -translate-y-2 pointer-events-none",
          ].join(" ")}
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-2xl p-4 shadow-2xl shadow-black/60">
            <div className="mb-3 flex items-center justify-between px-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25">
                Our Projects
              </p>
              <Link
                href="/case-studies"
                onClick={() => setMegaOpen(false)}
                className="group flex items-center gap-1 text-[11px] font-medium text-white/30 transition-colors duration-300 hover:text-[#4093FF]"
              >
                View all
                <ArrowRight
                  size={10}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {caseStudies.map((study) => {
                const Icon = caseStudyIcons[study.iconName];
                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    onClick={() => setMegaOpen(false)}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#4093FF]/30 hover:bg-white/[0.05]"
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 0%, rgba(64,147,255,0.1) 0%, transparent 70%)",
                      }}
                    />

                    <div className="relative">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] transition-all duration-300 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10">
                        <Icon
                          size={14}
                          strokeWidth={1.5}
                          className="text-white/40 transition-colors duration-300 group-hover:text-[#4093FF]"
                        />
                      </div>
                      <h4 className="mb-0.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-white">
                        {study.title}
                      </h4>
                      <p className="text-[11px] leading-snug text-white/30">
                        {study.tagline}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute inset-x-4 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* ── Full-page mobile menu ── */}
      <div
        className={[
          "fixed inset-0 z-[55] md:hidden",
          "transition-all duration-500 ease-out",
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={closeMobile}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between px-8 pt-28 pb-12">
          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className={[
                  "group flex items-center justify-between py-4 border-b border-white/[0.06]",
                  "transition-all duration-500 ease-out",
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: mobileOpen ? `${100 + i * 60}ms` : "0ms" }}
              >
                <span className="text-2xl font-semibold tracking-tight text-white/80 transition-colors duration-300 group-hover:text-[#4093FF]">
                  {link.label}
                </span>
                <span className="text-xs font-medium tabular-nums text-white/20">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div
            className={[
              "flex flex-col gap-5 transition-all duration-500 ease-out",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: mobileOpen ? `${100 + navLinks.length * 60 + 40}ms` : "0ms" }}
          >
            {/* CTA */}
            <Link
              href="mailto:team@kolom.ai"
              onClick={closeMobile}
              className="group flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#4093FF] hover:text-white hover:shadow-[0_0_30px_rgba(64,147,255,0.3)]"
            >
              team@kolom.ai
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Company line */}
            <p className="text-center text-[11px] font-medium tracking-[0.2em] uppercase text-white/20">
              Kolom Technologies Ltd.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
