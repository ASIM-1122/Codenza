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
  <section className="py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Roof Measurements in 3 Easy Steps
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-600"
        >
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>

    <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold">
      WATCH VIDEO
    </button>
  </section>
);

export default StepsSection;
