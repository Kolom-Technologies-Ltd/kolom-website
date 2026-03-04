"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total preloader duration: ~2.8s
    // Stars animate in: 0-1.2s (staggered)
    // Rocket draws in: 0.4-1.6s
    // Hold: 1.6-2.2s
    // Fade out: 2.2-2.8s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1] as const,
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content — renders underneath, revealed when preloader fades */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}

