// src/components/CTAContact.jsx
import React from "react";

/**
 * CTAContact Component
 * --------------------
 * Simple and responsive call-to-action encouraging users to contact support.
 */

export default function CTAContact() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-teal-900 text-center text-white">
      <div className="max-w-[800px] mx-auto px-6">
        <p className="text-sm md:text-base text-gray-300 mb-6">
          Have questions about which plan fits you best?
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-[1.03] duration-300"
        >
          QUESTIONS? CONTACT US
        </a>
      </div>
    </section>
  );
}
