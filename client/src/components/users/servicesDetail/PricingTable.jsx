// src/components/PricingTable.jsx
import React, { useMemo } from "react";
import { SERVICES } from "../../../data/services";

/**
 * Desktop pricing table with sticky left column and horizontal scroll.
 * Visible on md+ screens (use hidden md:block where you include it).
 */
export default function PricingTable() {
  // Derive unified row keys (stable order)
  const rowKeys = useMemo(() => {
    const order = ["Description", "# of Bldgs", "Monthly (Opportunity)", "Monthly (Growth)", "Annual (Advantage)"];
    const found = new Set();
    const keys = [];

    // push predefined order keys if any service contains them
    for (const k of order) {
      if (SERVICES.some(s => s.rows.some(r => r.key === k))) {
        found.add(k);
        keys.push(k);
      }
    }

    // then include any other keys found
    SERVICES.forEach(s => {
      s.rows.forEach(r => {
        if (!found.has(r.key)) {
          found.add(r.key);
          keys.push(r.key);
        }
      });
    });

    return keys;
  }, []);

  const serviceMaps = useMemo(() => {
    return SERVICES.map(s => {
      const map = new Map();
      s.rows.forEach(r => map.set(r.key, r.value));
      return { id: s.id, name: s.name, logo: s.logo, map };
    });
  }, []);

  return (
    <section aria-label="Plans comparison" className="py-8 hidden md:block">
      <div className="max-w-[2480px] mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="sticky left-0 w-[300px] px-4 py-3 text-left z-20">REPORT TYPE</th>
                {serviceMaps.map(s => (
                  <th key={s.id} className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center gap-2">
                      {s.logo && <img src={s.logo} alt={s.name} className="h-24 rounded-md object-contain" loading="lazy" />}
                      <div className="text-sm font-semibold">{s.name}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rowKeys.map((key) => (
                <tr key={key} className="border-t">
                  <td className="sticky left-0 w-[300px] px-4 py-4 bg-white z-10 text-sm text-gray-700 align-top">{key}</td>

                  {serviceMaps.map((s) => {
                    const val = s.map.get(key);
                    const isPrice = typeof val === "number";
                    // Highlight annual/advantage column cells if numeric (mimic orange block)
                    const highlight = key.toLowerCase().includes("annual") || key.toLowerCase().includes("advantage");
                    return (
                      <td key={s.id} className={`px-4 py-4 text-center align-top ${isPrice && highlight ? "bg-blue-700 text-white" : ""}`}>
                        {isPrice ? `$${val.toFixed(2)}` : val ?? "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
