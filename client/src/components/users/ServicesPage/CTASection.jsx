// src/components/CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-center overflow-hidden">
      {/* Decorative glow accent */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-20 w-[350px] h-[350px] bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
          Are you a contractor looking to grow?
        </h3>

        {/* Subtext */}
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          Start a free demo or contact our team to get personalized pricing and
          access to the most accurate measurement automation tools.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            Contact Sales
          </Link>

          <Link
            to="/demo"
            className="border border-teal-500 text-teal-400 hover:bg-teal-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Start Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
