// src/components/ServicesPage/ServiceCard.jsx
import React from "react";

/**
 * ServiceCard Component
 * ---------------------
 * Displays an individual pricing/service plan card.
 * Props:
 *  - plan: { title, price, subtitle, bullets, badge, dark }
 *  - onSelect: callback when the "Select" button is clicked
 */

export default function ServiceCard({ plan, onSelect }) {
  const { title, price, subtitle, bullets = [], badge, dark } = plan;

  return (
    <article
      className={`rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
      role="region"
      aria-label={`${title} plan`}
    >
      {/* Top Section */}
      <div>
        {/* Badge */}
        {badge && (
          <div className="inline-block mb-3 text-xs bg-teal-700 text-white px-2 py-1 rounded-md font-semibold uppercase tracking-wide">
            {badge}
          </div>
        )}

        {/* Title & Price */}
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 text-3xl font-extrabold">${price}.00</div>
        <p
          className={`mt-2 text-sm ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>

        {/* Feature List */}
        <ul
          className={`mt-6 space-y-2 ${
            dark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 flex-shrink-0 text-teal-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 12l5 5L20 7"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* View Details Link */}
        <div className="w-full flex justify-center items-center pt-8">
          <a
            href="/services"
            className="text-teal-600 hover:text-teal-700 font-medium underline transition-colors"
          >
            View Details
          </a>
        </div>
      </div>

      {/* Select Button */}
      <div className="mt-6">
        <button
          onClick={() => onSelect(plan)}
          className={`w-full py-3 rounded-md font-semibold shadow-md transition-all duration-300 ${
            dark
              ? "bg-teal-500 hover:bg-teal-600 text-white"
              : "bg-teal-600 hover:bg-teal-700 text-white"
          }`}
        >
          Select
        </button>
      </div>
    </article>
  );
}
