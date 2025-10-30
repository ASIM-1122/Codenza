// src/components/FinalCTASection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * FinalCTASection
 * - Uses same brand palette: slate-900, teal-600, amber-300
 * - Bold, modern, centered CTA for conversions
 * - Responsive from mobile to 2400px
 */
export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-24 text-center">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 opacity-95" />
      <div className="absolute -top-24 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-8 leading-snug"
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Are You a Contractor Looking To{" "}
          <span className="text-teal-400">Grow Your Business?</span>
        </motion.h2>

        <motion.button
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          WATCH FREE DEMO
        </motion.button>
      </div>
    </section>
  );
}
