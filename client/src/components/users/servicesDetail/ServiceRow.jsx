// src/components/ServiceRow.jsx
import React from "react";

/**
 * Presentational row used by both table and accordion.
 * props:
 *  - keyLabel: string
 *  - value: string | number
 *  - highlight: boolean (if value is price, highlight style)
 */
export default function ServiceRow({ keyLabel, value, highlight = false }) {
  const isNumber = typeof value === "number";
  return (
    <div className="flex items-start justify-between py-3 border-b last:border-b-0">
      <div className="text-sm text-gray-700 w-1/2 md:w-2/5">{keyLabel}</div>
      <div className={`text-sm md:text-right w-1/2 md:w-3/5 ${highlight ? "text-white md:bg-blue-700 md:px-3 md:py-1 md:rounded" : "text-gray-700"}`}>
        {isNumber ? `$${value.toFixed(2)}` : value ?? "—"}
      </div>
    </div>
  );
}
