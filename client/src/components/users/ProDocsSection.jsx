import React from "react";

const ProDocsSection = () => (
  <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white text-center">
    {/* Heading */}
    <div className="px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        ProDocs 2.0
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-10">
        Create instant Smart Quotes and Material Purchase Orders with the next
        generation of measurement automation — designed for professionals who
        value precision and efficiency.
      </p>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-semibold px-8 py-3 rounded-lg shadow-lg text-white text-sm md:text-base">
        LEARN MORE
      </button>
    </div>
  </section>
);

export default ProDocsSection;
