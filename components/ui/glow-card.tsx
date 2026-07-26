import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Kolom glow card                                                    */
/*                                                                     */
/*  The site's signature card hover treatment: a glassy dark surface   */
/*  that on hover gains a kolom-blue border, a radial glow washing     */
/*  in from the top, a soft outer shadow, and a gradient accent line   */
/*  sliding in along the bottom edge.                                  */
/*                                                                     */
/*  The hover glow is an absolutely-positioned overlay, so direct      */
/*  children that must sit above it need the `relative` class (same    */
/*  convention as the hand-written cards in the section components).   */
/*                                                                     */
/*  Pass `accentClassName` to align the accent line's inset with the   */
/*  card's horizontal padding (default `inset-x-6`, matching `p-6`).   */
/* ------------------------------------------------------------------ */

type GlowCardProps<T extends ElementType> = {
  /** Element to render as, e.g. `Link` or `"button"` (default `"div"`) */
  as?: T;
  /** Radial hover glow overlay (default true) */
  glow?: boolean;
  /** Bottom gradient accent line (default true) */
  accent?: boolean;
  /** Overrides the accent line inset to match the card padding */
  accentClassName?: string;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function GlowCard<T extends ElementType = "div">({
  as,
  glow = true,
  accent = true,
  accentClassName,
  className,
  children,
  ...props
}: GlowCardProps<T>) {
  const Component: ElementType = as ?? "div";

  return (
    <Component
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 ease-out hover:border-[#4093FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(64,147,255,0.06)]",
        className
      )}
      {...props}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at 30% 0%, rgba(64,147,255,0.08) 0%, transparent 60%)",
          }}
        />
      )}

      {children}

      {accent && (
        <div
          className={cn(
            "absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#4093FF]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100",
            accentClassName
          )}
        />
      )}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  Icon tile                                                          */
/*                                                                     */
/*  The matching icon container. Lucide icons inherit currentColor,    */
/*  so the tile's text color drives the icon's white -> blue shift.    */
/* ------------------------------------------------------------------ */

export function GlowCardIcon({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all duration-500 group-hover:border-[#4093FF]/30 group-hover:bg-[#4093FF]/10 group-hover:text-[#4093FF] group-hover:shadow-[0_0_20px_rgba(64,147,255,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
