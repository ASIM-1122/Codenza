// src/components/DownloadAppSection.jsx
import React from "react";
import { motion } from "framer-motion";
// import appStoreImg from "../../assets/AppStore.png";
// import playStoreImg from "../../assets/Playstoree.png";

/**
 * DownloadAppSection
 * - Clean, modern, and responsive
 * - Matches global color palette:
 *   slate-900, slate-700, teal-600, amber-300
 * - Includes subtle motion and decorative background glow
 */
export default function DownloadAppSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden text-center">
      {/* soft golden glow background */}
      <div className="absolute -top-24 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* dark navy shadow for contrast */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Download <span className="text-teal-600">PrimeSolutions</span>
        </motion.h2>

        {/* subtext */}
        <motion.p
          className="text-slate-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          Access reports, manage clients, and measure roofs on the go. 
          Stay productive anywhere — with PrimeSolutions in your pocket.
        </motion.p>

        {/* store buttons */}
        {/* <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* App Store */}
          {/* <a
            href="#"
            className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <img
              src={appStoreImg}
              alt="Download on App Store"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a> */}

          {/* Play Store */}
          {/* <a
            href="#"
            className="group flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <img
              src={playStoreImg}
              alt="Get it on Google Play"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a> */}
        {/* </motion.div> */} 
      </div>
    </section>
  );
}
