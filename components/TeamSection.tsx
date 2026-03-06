import TeamCarousel from "@/components/TeamCarousel";

export default function TeamSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(64,147,255,0.04)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* ── Header: heading left, description right ── */}
        <div className="lg:flex lg:items-end lg:gap-20">
          <div className="shrink-0 text-center sm:text-left">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4093FF]" />
              Who We Are
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[0.95]">
              Leadership
              <br />
              <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
          </div>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/40 sm:text-lg lg:mt-0 lg:pb-2">
            An innovation-led team specializing in enterprise-grade web, mobile,
            and AI-driven solutions bridging sophisticated technology and
            human impact to deliver{" "}
            <span className="font-semibold text-white/70">
              extraordinary results
            </span>{" "}
            worldwide.
          </p>
        </div>

        {/* ── Interactive carousel (client component) ── */}
        <TeamCarousel />
      </div>
    </section>
  );
}
