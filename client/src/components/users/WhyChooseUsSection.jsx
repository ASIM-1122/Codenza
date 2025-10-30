// src/components/WhyChooseUsSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * WhyChooseUsSection
 * - Uses global theme: slate text, teal accent, amber decorative glow
 * - Responsive: 1 / 2 / 4 columns
 * - Small entrance animation per card via framer-motion
 */

const features = [
  {
    title: "Save Time",
    desc: "Instant access to accurate reports saves hours of manual work.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v4l3 3" />
        <path d="M21 12A9 9 0 1112 3a9 9 0 019 9z" />
      </svg>
    ),
  },
  {
    title: "Reduce Errors",
    desc: "Data accuracy means better planning and fewer mistakes.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l2 2 4-4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h9" />
      </svg>
    ),
  },
  {
    title: "Launch Orders",
    desc: "Automate material purchases and manage them easily.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v6H3z" />
        <path d="M21 15H3l3 6h12l3-6z" />
      </svg>
    ),
  },
  {
    title: "Better Credibility",
    desc: "Impress clients with professional, accurate reports.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.64 4 9l5.91-.74L12 2z" />
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 bg-slate-50 text-slate-900">
      {/* subtle amber glow */}
      <div className="absolute -top-10 -right-10 w-56 h-56 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Why PrimeSolutions?</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            Trusted tools built for contractors — accuracy, speed, and automation to help you win more jobs.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
