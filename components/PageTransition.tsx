"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
      >
        {/* Black + blue glow overlay */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9998]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(64,147,255,0.08) 0%, black 70%)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
