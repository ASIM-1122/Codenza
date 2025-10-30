// src/components/FeaturesRow.jsx
import React from "react";
import { FaGlobeAmericas, FaBullseye, FaUserTie } from "react-icons/fa";

const features = [
  {
    title: "100% Nationwide Coverage",
    desc: "We proudly serve across the US and Canada — ensuring accessibility wherever you operate.",
    icon: <FaGlobeAmericas />,
  },
  {
    title: "99% Accuracy",
    desc: "Our advanced measurement automation delivers near-perfect precision you can trust.",
    icon: <FaBullseye />,
  },
  {
    title: "Dedicated Managers",
    desc: "Get a personal account manager for seamless project communication and success.",
    icon: <FaUserTie />,
  },
];

export default function FeaturesRow() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-teal-600 text-4xl mb-4 flex justify-center">
              {f.icon}
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
              {f.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
