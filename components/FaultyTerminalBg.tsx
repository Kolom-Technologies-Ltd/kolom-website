"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});

export default function FaultyTerminalBg() {
  return (
    <div className="absolute inset-0">
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
      />
    </div>
  );
}
