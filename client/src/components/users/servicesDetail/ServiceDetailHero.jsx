// src/components/ServiceDetailHero.jsx
import React from "react";

/**
 * ServiceDetailHero
 * - Clean hero banner for the pricing or service comparison page
 * - Consistent with slate + teal theme
 * - Responsive typography and subtle gradient for depth
 */

export default function ServiceDetailHero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white py-20 md:py-28 overflow-hidden">
      {/* decorative accent glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 via-transparent to-amber-500/10 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Compare Our Membership Plans
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Explore a range of flexible pricing options designed for every business —
          from pay-as-you-go access to enterprise memberships that deliver maximum
          value and the most comprehensive reports on the market.
        </p>
      </div>
    </section>
  );
}
