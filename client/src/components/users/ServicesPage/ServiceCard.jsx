// ServiceCard.jsx
import React from "react";

export default function ServiceCard({ plan, onSelect }) {
  const { title, price, subtitle, bullets, badge, dark } = plan;
  return (
    <article
      className={`rounded-lg shadow-md p-6 flex flex-col justify-between ${
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
      role="region"
      aria-label={`${title} plan`}
    >
      <div>
        {badge && (
          <div className="inline-block mb-3 text-xs bg-blue-700 text-white px-2 py-1 rounded">
            {badge}
          </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 text-3xl font-extrabold">${price}.00</div>
        <p className="mt-2 text-sm text-gray-400">{subtitle}</p>

        <ul
          className={`mt-6 space-y-2 ${
            dark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 flex-shrink-0 text-blue-500"
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
        <div className="w-full flex justify-center items-center pt-10">
          {" "}
          <a href="/services" className="text-blue-500 underline">
            view details
          </a>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onSelect(plan)}
          className={`w-full py-3 rounded-md font-semibold ${
            dark
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Select
        </button>
      </div>
    </article>
  );
}
