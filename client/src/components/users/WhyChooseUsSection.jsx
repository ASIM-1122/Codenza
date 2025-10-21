import React from "react";

const features = [
  { title: "Save Time", desc: "Instant access to accurate reports saves hours of manual work." },
  { title: "Reduce Errors", desc: "Data accuracy means better planning and fewer mistakes." },
  { title: "Launch Orders", desc: "Automate material purchases and manage them easily." },
  { title: "Better Credibility", desc: "Impress clients with professional, accurate reports." },
];

const WhyChooseUsSection = () => (
  <section className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-12">Why RoofScope?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      {features.map((f, i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-orange-600">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUsSection;
