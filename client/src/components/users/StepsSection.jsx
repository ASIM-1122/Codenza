import React from "react";

const steps = [
  {
    title: "Step 1",
    desc: "Simply enter the structure’s address to start your measurement.",
  },
  {
    title: "Step 2",
    desc: "Select your structure using our high-accuracy aerial imagery.",
  },
  {
    title: "Step 3",
    desc: "Submit your request and receive your report within minutes.",
  },
];

const StepsSection = () => (
  <section className="py-24 bg-gray-50 text-center">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Roof Measurements in 3 Easy Steps
    </h2>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-200"
        >
          <div className="text-5xl font-extrabold text-teal-600 mb-4">
            {idx + 1}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <button className="mt-12 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300">
      WATCH VIDEO
    </button>
  </section>
);

export default StepsSection;
