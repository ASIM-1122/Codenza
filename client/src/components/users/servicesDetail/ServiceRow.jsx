// src/components/ServiceRow.jsx
import React from "react";

/**
 * ServiceRow Component
 * Used in tables and accordions to display a key-value pair.
 *
 * Props:
 *  - keyLabel: string (label for the row)
 *  - value: string | number (data to display)
 *  - highlight: boolean (applies highlight style for pricing or important data)
 */

export default function ServiceRow({ keyLabel, value, highlight = false }) {
  const isNumber = typeof value === "number";

  return (
    <div className="flex items-start justify-between py-3 border-b border-slate-200 last:border-b-0">
      {/* Label */}
      <div className="text-sm text-slate-700 font-medium w-1/2 md:w-2/5">
        {keyLabel}
      </div>

      {/* Value */}
      <div
        className={`text-sm w-1/2 md:w-3/5 text-right transition-all duration-200 ${
          highlight
            ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white px-3 py-1 rounded-md shadow-sm"
            : "text-slate-800"
        }`}
      >
        {isNumber ? `$${value.toFixed(2)}` : value ?? "—"}
      </div>
    </div>
  );
}
