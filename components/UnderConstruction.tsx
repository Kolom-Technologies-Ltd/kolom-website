import AnimatedLogo from "@/components/AnimatedLogo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface UnderConstructionProps {
  title?: string;
}

export default function UnderConstruction({
  title = "This Page",
}: UnderConstructionProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #4093FF 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <AnimatedLogo className="mb-10 h-auto w-20 sm:w-24" />

        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
          Under Construction
        </p>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}{" "}
          <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="mb-10 max-w-md text-base leading-relaxed text-white/40">
          We&apos;re crafting something extraordinary. Check back soon.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-[#4093FF]/50 hover:text-white"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
