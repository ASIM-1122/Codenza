// src/components/PlansCompare.jsx
import React, { useMemo } from "react";
import { PLANS } from "../../../utils/services";

/**
 * PlansCompare
 * - Data-driven feature matrix using PLANS (single source of truth)
 * - Sticky left "FEATURES" column for horizontal comparison
 * - Responsive: horizontal scroll on small screens
 * - Theme: slate / teal / amber (matches project design system)
 */

const DEFAULT_ORDER = [
  "Report Discount",
  "Residential RoofScope",
  "Residential SidingScope",
  "Dedicated Account Manager",
  "Private Label",
  "Rush",
  "ProDocs Users",
  "RoofScope+ Upgrade",
  "Unlimited RoofScopeX Boost",
  "ProData Sheet",
  "RoofScopeX",
  "ESX File",
  "API Integrations",
];

function normalizeFeatureText(text) {
  return (text || "").trim();
}

export default function PlansCompare() {
  // Build ordered, deduped list of features from PLANS
  const features = useMemo(() => {
    const seen = new Set();
    const extracted = [];

    const pushIfNew = (f) => {
      const key = normalizeFeatureText(f);
      if (!key) return;
      if (!seen.has(key)) {
        seen.add(key);
        extracted.push(key);
      }
    };

    // prioritize DEFAULT_ORDER rows if they appear in any plan
    for (const key of DEFAULT_ORDER) {
      const found = PLANS.some((p) =>
        Array.isArray(p.bullets) && p.bullets.some((b) => b.toLowerCase().includes(key.toLowerCase()))
      );
      if (found) pushIfNew(key);
    }

    // then add all bullets from each plan (preserve plan order, dedupe)
    for (const plan of PLANS) {
      if (!Array.isArray(plan.bullets)) continue;
      for (const b of plan.bullets) {
        pushIfNew(b);
      }
    }

    return extracted;
  }, []);

  // Determine what to show for each [plan, feature] intersection
  function cellFor(plan, feature) {
    const normalized = feature.toLowerCase();

    // exact match
    const exact = plan.bullets?.find((b) => b.toLowerCase() === normalized);
    if (exact) return { text: exact };

    // contains phrase (e.g., "12HR" in "12HR Residential RoofScope")
    const includes = plan.bullets?.find((b) => b.toLowerCase().includes(normalized));
    if (includes) return { text: includes };

    // special handling for "Report Discount" tokens
    if (feature.toLowerCase().includes("report discount")) {
      const f = plan.bullets?.find((b) => b.toLowerCase().includes("report discount"));
      if (f) return { text: f };
    }

    // token presence fallback
    const hasToken = plan.bullets?.some((b) => b.toLowerCase().includes(feature.toLowerCase()));
    if (hasToken) return { present: true };

    return null;
  }

  return (
    <section className="py-12 bg-slate-50">
      {/* subtle amber glow for brand warmth */}
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-[720px] w-full text-left border-collapse">
            <thead>
              <tr>
                {/* sticky left column header */}
                <th
                  className="sticky left-0 z-20 bg-white px-6 py-4 text-sm font-medium text-slate-700"
                  style={{ minWidth: 220 }}
                >
                  FEATURES
                </th>

                {PLANS.map((p) => (
                  <th key={p.id} className="px-6 py-4 text-center align-top bg-white">
                    <div className="text-sm text-slate-600">{p.title}</div>
                    <div className="mt-1 text-2xl font-extrabold text-slate-900">${p.price}.00</div>
                    {p.badge && <div className="mt-2 inline-block text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-600">{p.badge}</div>}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((f, idx) => (
                <tr key={idx} className="border-t last:border-b">
                  {/* Feature name - sticky so it's always visible on horizontal scroll */}
                  <td
                    className="sticky left-0 z-10 bg-white px-6 py-4 align-top text-sm text-slate-800"
                    style={{ minWidth: 220 }}
                  >
                    {f}
                  </td>

                  {PLANS.map((p) => {
                    const cell = cellFor(p, f);
                    return (
                      <td key={p.id} className="px-6 py-4 text-center align-top">
                        {cell ? (
                          cell.text ? (
                            <div className="text-sm text-slate-700">{cell.text}</div>
                          ) : cell.present ? (
                            <span className="inline-block text-teal-600 text-lg" aria-hidden>
                              ✓
                            </span>
                          ) : null
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* helpful note */}
        <div className="mt-4 text-xs text-slate-500">
          Tip: horizontally scroll the table on small screens. The left column is fixed for easier comparison.
        </div>
      </div>
    </section>
  );
}
