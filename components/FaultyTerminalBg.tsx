"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});

export default function FaultyTerminalBg() {
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

  // When resuming, wait a frame for the WebGL canvas to render before fading in
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
        <FaultyTerminal
          scale={2.2}
          gridMul={[2.5, 1.2]}
          digitSize={2.6}
          timeScale={0.18}
          scanlineIntensity={0.15}
          glitchAmount={1.2}
          flickerAmount={0.6}
          noiseAmp={0.8}
          chromaticAberration={2}
          curvature={0.08}
          tint="#2d6ab9"
          mouseReact={true}
          mouseStrength={0.35}
          brightness={0.35}
          pageLoadAnimation={true}
          dither={1}
          pause={!visible}
        />
      </div>
    </div>
  );
}
