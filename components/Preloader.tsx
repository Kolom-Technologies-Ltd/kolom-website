"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MIN_DISPLAY = 1800;
    const start = Date.now();

    function dismiss() {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(() => setExiting(true), remaining);
    }

    if (document.readyState === "complete") {
      dismiss();
      return;
    }

    window.addEventListener("load", dismiss);
    return () => window.removeEventListener("load", dismiss);
  }, []);

  // After exit animation finishes, unmount the overlay
  useEffect(() => {
    if (!exiting) return;
    const el = overlayRef.current;
    if (!el) { setIsLoading(false); return; }

    const handler = () => setIsLoading(false);
    el.addEventListener("transitionend", handler, { once: true });
    // Fallback in case transitionend doesn't fire
    const fallback = setTimeout(handler, 700);
    return () => { clearTimeout(fallback); el.removeEventListener("transitionend", handler); };
  }, [exiting]);

  return (
    <>
      {isLoading && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          style={{
            opacity: exiting ? 0 : 1,
            transition: "opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {/* Subtle radial glow behind the logo */}
          <div
            className="absolute h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, #4093FF 0%, transparent 70%)",
            }}
          />

          <AnimatedLogo className="relative z-10 h-auto w-24 sm:w-28 md:w-32" />
        </div>
      )}

      {/* Page content — revealed when preloader fades */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out 0.1s",
        }}
      >
        {children}
      </div>
    </>
  );
}
