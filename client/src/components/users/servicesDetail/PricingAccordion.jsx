// src/components/PricingAccordion.jsx
import React, { useState } from "react";
import { SERVICES } from "../../../data/services";

/**
 * Mobile-friendly accordion fallback.
 * Visible on small screens (block md:hidden where included).
 */
export default function PricingAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section className="md:hidden py-6">
      <div className="max-w-[1200px] mx-auto px-4 space-y-4">
        {SERVICES.map((s) => (
          <div key={s.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              className="w-full px-4 py-3 flex items-center justify-between"
              onClick={() => setOpen(prev => (prev === s.id ? null : s.id))}
              aria-expanded={open === s.id}
              aria-controls={`panel-${s.id}`}
            >
              <div className="flex items-center gap-3">
                {s.logo && <img src={s.logo} alt={s.name} className="h-8" loading="lazy" />}
                <div className="font-semibold">{s.name}</div>
              </div>
              <div className="text-sm text-gray-500">{open === s.id ? "−" : "+"}</div>
            </button>

            {open === s.id && (
              <div id={`panel-${s.id}`} className="px-4 pb-4">
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  {s.rows.map((r, i) => (
                    <li key={i} className="flex justify-between border-b py-2">
                      <span className="text-gray-600">{r.key}</span>
                      <span className="font-medium">{typeof r.value === "number" ? `$${r.value.toFixed(2)}` : r.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-3">
                  <a href={`/pricing`} className="text-blue-700 underline">View details</a>
                  <a href="/contact" className="ml-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">Contact Sales</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
