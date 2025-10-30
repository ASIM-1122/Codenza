// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import homePageIMG from "../../assets/homePageIMG.png";

/**
 * HeroSection
 * - Professional, minimal, and animated
 * - Uses brand color palette (slate + teal + amber)
 * - Fully responsive: mobile → 2400px
 * - Clean transitions and CTA layout
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: `url(${homePageIMG})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />

      {/* Decorative glow accents */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let’s Get <span className="text-teal-400">Started.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Enter the address or coordinates of a structure you’d like to measure.
        </motion.p>

        {/* Input + Button */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <input
            type="text"
            placeholder="Enter full address"
            className="flex-1 px-5 py-3 rounded-full text-slate-800 focus:ring-4 focus:ring-teal-400/40 outline-none transition-all duration-300"
          />
          <button className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-teal-400/20 transition-all duration-300">
            START MEASUREMENT
          </button>
        </motion.div>

        {/* Secondary Button */}
        <motion.button
          className="mt-6 bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-slate-600/30 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          APPEND ELEMENT
        </motion.button>
      </div>
    </section>
  );
}
