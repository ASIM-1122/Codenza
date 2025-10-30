// src/components/PricingGrid.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { PLANS } from "../../../utils/services";

/**
 * PricingGrid
 * - Displays all available pricing plans in a responsive grid layout.
 * - Uses the `ServiceCard` component to render each plan.
 * - Accepts an optional `onSelect` callback for handling user interactions (e.g., selecting a plan).
 */

export default function PricingGrid({ onSelect = () => {} }) {
  return (
    <section id="plans" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <ServiceCard key={plan.id} plan={plan} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
