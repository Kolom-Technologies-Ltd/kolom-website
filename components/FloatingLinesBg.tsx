"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
  ssr: false,
});

export default function FloatingLinesBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setVisible(isVisible);
        if (!isVisible) setReady(false);
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleFrame = useCallback(() => {
    if (visible && !ready) {
      requestAnimationFrame(() => setReady(true));
    }
  }, [visible, ready]);

  useEffect(handleFrame, [handleFrame]);

  return (
    <div ref={containerRef} className="absolute inset-0 bg-black">
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <FloatingLines
          linesGradient={["#0a1628", "#1a3a6e", "#4093FF"]}
          enabledWaves={["middle", "bottom"]}
          lineCount={[5, 4]}
          lineDistance={[4, 6]}
          animationSpeed={0.6}
          interactive={true}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
          pause={!visible}
        />
      </div>
    </div>
  );
}
