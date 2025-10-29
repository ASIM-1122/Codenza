// src/components/PlansCompare.jsx
import React, { useMemo } from "react";
import { PLANS } from "../../../utils/services";

/**
 * PlansCompare
 * - Dynamically generates a feature matrix from PLANS (utils/services.js)
 * - Shows exact text when plans contain a specific feature string (helpful for values like "12HR" vs "24HR")
 * - Falls back to a checkmark if the feature key is present as a short token in the plan
 * - Responsive: horizontal scroll on small screens; sticky left column for readability
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
  // Build a unique ordered list of features from PLANS.bullets
  const features = useMemo(() => {
    const seen = new Set();
    const extracted = [];

    // Helper to push if new
    const pushIfNew = (f) => {
      const key = normalizeFeatureText(f);
      if (!key) return;
      if (!seen.has(key)) {
        seen.add(key);
        extracted.push(key);
      }
    };

    // First, push ordered keywords that exist in any plan (keeps the most important rows at top)
    for (const key of DEFAULT_ORDER) {
      // check if any plan has a bullet containing this key (case-insensitive)
      const found = PLANS.some((p) =>
        p.bullets?.some((b) => b.toLowerCase().includes(key.toLowerCase()))
      );
      if (found) pushIfNew(key);
    }

    // Then add every bullet from plans (preserve order per plan, but dedupe globally)
    for (const plan of PLANS) {
      if (!Array.isArray(plan.bullets)) continue;
      for (const b of plan.bullets) {
        pushIfNew(b);
      }
    }

    return extracted;
  }, []);

  // Helper: for a given plan and feature row, return:
  // - exact string from plan (if plan contains feature string that matches),
  // - a simple checkmark if plan includes the feature token (e.g., contains word),
  // - otherwise falsey
  function cellFor(plan, feature) {
    const normalized = feature.toLowerCase();

    // If plan contains the exact bullet (exact match)
    const exact = plan.bullets?.find((b) => b.toLowerCase() === normalized);
    if (exact) return { text: exact };

    // If plan has a bullet that includes the feature phrase (useful for "12HR" vs "24HR")
    const includes = plan.bullets?.find((b) => b.toLowerCase().includes(normalized));
    if (includes) return { text: includes };

    // Some features from DEFAULT_ORDER are generic keys: try to detect tokens
    // e.g., feature = "Report Discount" -> plan might contain "5% Report Discount" or "7% Report Discount"
    if (feature.toLowerCase().includes("report discount")) {
      const f = plan.bullets?.find((b) => b.toLowerCase().includes("report discount"));
      if (f) return { text: f };
    }

    // For short tokens like "Dedicated Account Manager", do exact-inclusion check
    const hasToken = plan.bullets?.some((b) =>
      b.toLowerCase().includes(feature.toLowerCase())
    );
    if (hasToken) return { present: true };

    return null;
  }

  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="pb-4 pr-6 text-sm sticky left-0 bg-white z-10">FEATURES</th>
                {PLANS.map((p) => (
                  <th key={p.id} className="pb-4 text-center">
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="text-2xl font-bold">${p.price}.00</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((f, idx) => (
                <tr key={idx} className="border-t">
                  {/* FEATURE NAME (sticky for readability on horizontal scroll) */}
                  <td
                    className="py-4 pr-6 text-sm align-top sticky left-0 bg-white z-10"
                    style={{ minWidth: 220 }}
                  >
                    {f}
                  </td>

                  {/* one cell per plan */}
                  {PLANS.map((p) => {
                    const cell = cellFor(p, f);
                    return (
                      <td key={p.id} className="py-4 text-center align-top">
                        {cell ? (
                          cell.text ? (
                            <div className="text-sm text-gray-700 dark:text-gray-600">
                              {cell.text}
                            </div>
                          ) : cell.present ? (
                            <span className="inline-block text-green-500 text-xl">✔</span>
                          ) : null
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Helpful note and mobile guidance */}
        <div className="mt-4 text-xs text-gray-500">
          Tip: horizontally scroll on small screens. The feature column is fixed for easier comparison.
        </div>
      </div>
    </section>
  );
}
