// src/components/AccuracySection.jsx
import React from "react";
import { motion } from "framer-motion";
import percentImg from "../../assets/99percent.png"; // update path if needed

/**
 * AccuracySection
 * - Professional navy + teal + warm-gold color scheme
 * - Responsive and production-ready
 * - Uses framer-motion for subtle animations (install `framer-motion` if not yet)
 *
 * Palette used:
 *  - Text / base: slate-900
 *  - Accent / CTA: teal-600 -> teal-700
 *  - Decorative warm accent: amber-300 (very subtle)
 */

export default function AccuracySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* soft radial accent in the background (warm gold) */}
      <div className="absolute inset-0 pointer-events-none opacity-6">
        <div className="absolute -top-24 -right-32 w-72 h-72 rounded-full bg-amber-300 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* animated badge/image */}
        <motion.img
          src={percentImg}
          alt="99% Accuracy Guarantee"
          className="mx-auto mb-6 w-28 md:w-40 rounded-full shadow-xl ring-1 ring-slate-100 bg-white"
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          <span className="text-teal-600">99%</span> Accuracy Guarantee
        </motion.h2>

        <motion.p
          className="text-slate-700 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.16, duration: 0.55 }}
        >
          We combine intelligent aerial analysis with human review to deliver highly accurate measurement
          reports. Reduce rework, improve estimates, and speed up material ordering — every RoofScope report
          comes with a 99% accuracy guarantee so you can bid with confidence.
        </motion.p>

        <motion.button
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-teal-200 transition-transform"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          aria-label="See our accuracy report"
        >
          {/* subtle icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v6M9 12h6" />
            <circle cx="12" cy="12" r="10" stroke="none" />
          </svg>
          SEE OUR ACCURACY REPORT
        </motion.button>
      </div>

      {/* decorative navy circle (subtle, bottom-left) */}
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-slate-800 opacity-5 blur-2xl pointer-events-none"></div>
    </section>
  );
}
