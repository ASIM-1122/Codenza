// src/components/PricingAccordion.jsx
import React, { useState } from "react";
import { SERVICES } from "../../../data/services";

/**
 * 📱 PricingAccordion Component
 * -----------------------------
 * - Optimized for mobile (visible only on md:hidden)
 * - Uses teal–blue color scheme
 * - Accessible (keyboard & aria support)
 * - Includes "View Details" and "Contact Sales" actions
 */

export default function PricingAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section className="md:hidden py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 space-y-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
          >
            {/* Accordion Header */}
            <button
              className="w-full px-5 py-4 flex items-center justify-between text-left"
              onClick={() => setOpen((prev) => (prev === service.id ? null : service.id))}
              aria-expanded={open === service.id}
              aria-controls={`panel-${service.id}`}
            >
              <div className="flex items-center gap-3">
                {service.logo && (
                  <img
                    src={service.logo}
                    alt={service.name}
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                )}
                <div className="font-semibold text-gray-800">
                  {service.name}
                </div>
              </div>
              <span className="text-lg font-bold text-teal-600">
                {open === service.id ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Body */}
            {open === service.id && (
              <div
                id={`panel-${service.id}`}
                className="px-5 pb-5 border-t border-gray-100 bg-gray-50"
              >
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {service.rows.map((row, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-gray-200 py-2"
                    >
                      <span className="text-gray-600">{row.key}</span>
                      <span className="font-medium text-gray-800">
                        {typeof row.value === "number"
                          ? `$${row.value.toFixed(2)}`
                          : row.value}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={`/pricing`}
                    className="text-teal-700 hover:text-teal-500 underline text-sm font-medium"
                  >
                    View details
                  </a>
                  <a
                    href="/contact"
                    className="ml-auto bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md font-semibold transition-colors duration-200"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
