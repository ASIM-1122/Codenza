// src/components/CTAContact.jsx
import React from "react";

export default function CTAContact() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-sm text-gray-700">Have questions about which plan fits you best?</p>
        <a href="/contact" className="mt-4 inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">QUESTIONS? CONTACT US</a>
      </div>
    </section>
  );
}
