import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "team@kolom.ai",
    href: "mailto:team@kolom.ai",
  },
  {
    icon: Phone,
    label: "+880 1410 502043",
    href: "tel:+8801410502043",
  },
  {
    icon: MapPin,
    label: "889 Apollo Rd, Dhaka 1229",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4093FF]/30 to-transparent" />

      {/* ── CTA Section ── */}
      <div className="relative py-24 sm:py-32">
        {/* Background radial glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "70vw",
            height: "50vh",
            background:
              "radial-gradient(ellipse at center, rgba(64,147,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
            Start a Conversation
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Extraordinary
            </span>
            ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
            Let&apos;s turn your vision into a production-grade product.
            Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:team@kolom.ai"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#4093FF] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5aa3ff] hover:shadow-[0_0_40px_rgba(64,147,255,0.3)]"
            >
              Get in Touch
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="tel:+8801410502043"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              <Phone size={14} strokeWidth={2} />
              +880 1410 502043
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* ── Main footer ── */}
      <div className="relative py-16 sm:py-20">
        {/* Watermark logo */}
        <div className="pointer-events-none absolute bottom-0 right-0 opacity-[0.02]">
          <Image
            src="/logo/logo-icon-white.svg"
            alt=""
            width={500}
            height={500}
            className="h-[400px] w-auto translate-x-1/4 translate-y-1/4 sm:h-[500px]"
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr]">
            {/* Column 1 — Brand */}
            <div>
              <Link href="/" className="inline-block" aria-label="Home">
                <Image
                  src="/logo/logo-full-white.svg"
                  alt="Kolom Technologies"
                  width={504}
                  height={160}
                  className="h-7 w-auto sm:h-8"
                />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/35">
                An innovation-led software company specializing in
                enterprise-grade web, mobile, and AI-driven solutions. Bridging
                technology and human impact worldwide.
              </p>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/25">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 transition-colors duration-300 hover:text-[#4093FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact */}
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/25">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-white/25 transition-colors duration-300 group-hover:text-[#4093FF]"
                        />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Kolom Technologies Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/40">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-xs text-white/20 transition-colors duration-300 hover:text-white/40">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
