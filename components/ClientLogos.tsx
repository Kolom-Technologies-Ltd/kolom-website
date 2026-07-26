"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/*  To add a logo: drop the file in public/clients/ and add an entry.  */
/*  `light` renders a white chip (for marks too dark for black),       */
/*  `imgClass` sizes the mark inside the chip, and `x`/`y` place the   */
/*  chip on the dome stage (% coordinates, md+ only).                  */
/* ------------------------------------------------------------------ */

interface ClientLogo {
  name: string;
  logo: string;
  light?: boolean;
  imgClass: string;
  x: number;
  y: number;
}

const clients: ClientLogo[] = [
  {
    name: "Daraz (Alibaba Group)",
    logo: "/clients/daraz.png",
    imgClass: "h-auto w-9 md:w-10",
    x: 8,
    y: 74,
  },
  {
    name: "NASA Astrobee",
    logo: "/clients/nasa.svg",
    light: true,
    imgClass: "h-7 w-auto md:h-8",
    x: 27.5,
    y: 22,
  },
  {
    name: "DHL",
    logo: "/clients/dhl.svg",
    imgClass: "h-auto w-9 md:w-10",
    x: 72.5,
    y: 22,
  },
  {
    name: "HungryNaki",
    logo: "/clients/hungrynaki.svg",
    imgClass: "h-8 w-auto md:h-12",
    x: 92,
    y: 74,
  },
  {
    name: "bKash",
    logo: "/clients/bkash.svg",
    light: true,
    imgClass: "h-6 w-auto md:h-7",
    x: 22,
    y: 66,
  },
  {
    name: "Therap",
    logo: "/clients/therap.svg",
    light: true,
    imgClass: "h-8 w-auto md:h-12",
    x: 78,
    y: 66,
  },
];

const easeOutQuint = [0.23, 1, 0.32, 1] as const;
const viewport = { once: true, margin: "-40px" as const };

/* ------------------------------------------------------------------ */
/*  Logo chip                                                          */
/* ------------------------------------------------------------------ */

function LogoChip({
  client,
  index,
  reduced,
}: {
  client: ClientLogo;
  index: number;
  reduced: boolean;
}) {
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.85 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.08,
        ease: easeOutQuint,
      }}
      className="group/chip relative"
    >
      {/* Idle float, phased per chip so they drift independently */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -7, 0] }}
        transition={
          reduced
            ? undefined
            : {
                duration: 4.5 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }
        }
      >
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover/chip:scale-110 group-hover/chip:shadow-[0_0_30px_rgba(64,147,255,0.25)] md:h-16 md:w-16 ${
            client.light
              ? "bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              : "border border-white/10 bg-white/[0.05] backdrop-blur-sm group-hover/chip:border-[#4093FF]/40"
          }`}
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={160}
            height={48}
            className={`${client.imgClass} object-contain`}
          />
        </div>
      </motion.div>

      {/* Name tag on hover */}
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 rounded-full border border-white/10 bg-black/80 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-white/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/chip:translate-y-0 group-hover/chip:opacity-100">
        {client.name}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Center content                                                     */
/* ------------------------------------------------------------------ */

function CenterContent({ label, reduced }: { label: string; reduced: boolean }) {
  const reveal = (delay: number) => ({
    initial: reduced
      ? { opacity: 0 }
      : { opacity: 0, y: 14, filter: "blur(6px)" },
    whileInView: reduced
      ? { opacity: 1 }
      : { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport,
    transition: { duration: 0.6, delay, ease: easeOutQuint },
  });

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 text-center">
      <motion.p
        {...reveal(0)}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 uppercase backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
        {label}
      </motion.p>

      <motion.h2
        {...reveal(0.1)}
        className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        Our Leadership Has Shipped{" "}
        <br className="hidden sm:block" />
        for{" "}
        <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
          Global Brands
        </span>
      </motion.h2>

      <motion.p
        {...reveal(0.18)}
        className="mt-4 max-w-md text-sm leading-relaxed text-white/40 md:text-base"
      >
        From e-commerce and logistics to fintech and aerospace, our team has
        delivered production software used by millions.
      </motion.p>

      <motion.div {...reveal(0.26)}>
        <Link
          href="/case-studies"
          className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
        >
          Explore Case Studies
          <ArrowUpRight
            size={15}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface ClientLogosProps {
  label?: string;
  large?: boolean;
}

export default function ClientLogos({
  label = "Trusted Experience",
  large = false,
}: ClientLogosProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className={`relative overflow-hidden bg-black ${large ? "py-24 md:py-32" : "py-16 md:py-24"}`}
    >
      {/* ── Dome layout (md+) ── */}
      <div className="hidden md:block">
        <div className="relative mx-auto aspect-[2/1] w-full max-w-5xl overflow-hidden">
          {/* Dome fill glow — circle centered on the stage's bottom edge */}
          <div
            className="absolute inset-x-0 top-0 aspect-square rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(64,147,255,0.08) 0%, rgba(64,147,255,0.03) 45%, transparent 68%)",
            }}
          />

          {/* Beam accents on the outer arc */}
          <div
            className="absolute inset-x-0 top-0 aspect-square rounded-full opacity-60 blur-[6px]"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent 28deg, rgba(64,147,255,0.35) 48deg, transparent 68deg, transparent 292deg, rgba(64,147,255,0.35) 312deg, transparent 332deg)",
              maskImage:
                "radial-gradient(circle at 50% 50%, transparent 55%, black 62%, black 88%, transparent 92%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, transparent 55%, black 62%, black 88%, transparent 92%)",
            }}
          />

          {/* Concentric arc rings */}
          <div className="absolute inset-x-0 top-0 aspect-square rounded-full border border-white/[0.06]" />
          <div className="absolute top-[24%] left-[12%] aspect-square w-[76%] rounded-full border border-white/[0.05]" />
          <div className="absolute top-[48%] left-[24%] aspect-square w-[52%] rounded-full border border-white/[0.04]" />

          {/* Logo chips on the arcs */}
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${client.x}%`, top: `${client.y}%` }}
            >
              <LogoChip client={client} index={i} reduced={reduced} />
            </div>
          ))}

          {/* Center content inside the dome */}
          <div className="absolute inset-x-0 bottom-4 z-10">
            <CenterContent label={label} reduced={reduced} />
          </div>
        </div>
      </div>

      {/* ── Stacked layout (mobile) ── */}
      <div className="relative md:hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-full w-[140%] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(64,147,255,0.06) 0%, transparent 65%)",
          }}
        />
        <CenterContent label={label} reduced={reduced} />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 px-6">
          {clients.map((client, i) => (
            <LogoChip key={client.name} client={client} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
