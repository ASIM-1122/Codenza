// src/components/PricingTable.jsx
import React, { useMemo } from "react";
import { SERVICES } from "../../../data/services";

/**
 * PricingTable
 * - Desktop-focused table (show with `hidden md:block` where used)
 * - Sticky left column, horizontal scrollable table
 * - Theme: slate base + teal highlight + amber decorative accent
 */

export default function PricingTable() {
  // Build ordered keys (prefer common/important keys first)
  const rowKeys = useMemo(() => {
    const preferred = ["Description", "# of Bldgs", "Monthly (Opportunity)", "Monthly (Growth)", "Annual (Advantage)"];
    const seen = new Set();
    const keys = [];

    // push preferred keys if present in any service
    for (const k of preferred) {
      if (SERVICES.some((s) => s.rows.some((r) => r.key === k))) {
        seen.add(k);
        keys.push(k);
      }
    }

    // then push all remaining keys preserving service order
    for (const s of SERVICES) {
      for (const r of s.rows) {
        if (!seen.has(r.key)) {
          seen.add(r.key);
          keys.push(r.key);
        }
      }
    }
    return keys;
  }, []);

  // Map each service rows for quick lookup
  const serviceMaps = useMemo(() => {
    return SERVICES.map((s) => {
      const map = new Map();
      (s.rows || []).forEach((r) => map.set(r.key, r.value));
      return {
        id: s.id,
        name: s.name,
        logo: s.logo,
        map,
      };
    });
  }, []);

  return (
    <section aria-label="Plans comparison table" className="py-8 hidden md:block">
      {/* subtle amber decorative glow */}
      <div className="relative max-w-[2480px] mx-auto px-4">
        <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
          <table className="min-w-[1200px] w-full table-fixed border-collapse" role="table">
            <thead>
              <tr className="bg-slate-100">
                <th
                  className="sticky left-0 z-20 bg-slate-100 px-5 py-4 text-left text-sm font-medium text-slate-700"
                  style={{ minWidth: 300 }}
                >
                  REPORT TYPE
                </th>

                {serviceMaps.map((s) => (
                  <th key={s.id} className="px-5 py-4 text-center align-top">
                    <div className="flex flex-col items-center gap-2">
                      {s.logo && (
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="h-20 object-contain rounded-md"
                          loading="lazy"
                          width={120}
                          height={80}
                        />
                      )}
                      <div className="text-sm font-semibold text-slate-800">{s.name}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rowKeys.map((key) => (
                <tr key={key} className="border-t last:border-b">
                  {/* sticky left column */}
                  <td
                    className="sticky left-0 z-10 bg-white px-5 py-4 text-sm text-slate-800 align-top"
                    style={{ minWidth: 300 }}
                  >
                    {key}
                  </td>

                  {serviceMaps.map((s) => {
                    const val = s.map.get(key);
                    const isNumber = typeof val === "number";
                    const highlight = /annual|advantage|annual/i.test(key); // highlight annual/advantage rows
                    const cellClass = isNumber && highlight ? "bg-teal-600 text-white" : "text-slate-700";

                    return (
                      <td
                        key={s.id}
                        className={`px-5 py-4 text-center align-top ${isNumber && highlight ? "bg-teal-600 text-white" : ""}`}
                      >
                        {isNumber ? (
                          <span className={`font-semibold ${isNumber && highlight ? "" : "text-slate-900"}`}>
                            ${val.toFixed(2)}
                          </span>
                        ) : (
                          <span className={`text-sm ${val ? "text-slate-700" : "text-slate-400"}`}>
                            {val ?? "—"}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* small helper note */}
        <div className="mt-4 text-xs text-slate-500">
          Tip: on small screens use the mobile accordion. The left column remains fixed for easier scanning on wide tables.
        </div>
      </div>
    </section>
  );
}
