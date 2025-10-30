// src/components/ProDocsSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * ProDocsSection
 * - Matches global theme: slate (text), teal (CTA), amber (decor)
 * - Responsive: mobile -> 2400px
 * - Uses framer-motion for subtle entrance animation
 */

export default function ProDocsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-center">
      {/* Decorative amber glow (subtle) */}
      <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center text-teal-200">
              {/* small doc icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <span className="text-sm text-teal-200 font-medium uppercase tracking-wide">Automation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">ProDocs 2.0</h2>

          <p className="mx-auto mb-10 max-w-2xl text-slate-200 text-sm md:text-base leading-relaxed">
            Create instant Smart Quotes and Material Purchase Orders with the next generation of
            measurement automation — designed for professionals who value precision, speed, and reliability.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-200/30 transition-transform"
            >
              {/* icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              LEARN MORE
            </a>

            <a
              href="/contact"
              className="inline-block text-sm text-slate-200 px-4 py-3 rounded-full border border-white/10 hover:border-white/20 transition"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
