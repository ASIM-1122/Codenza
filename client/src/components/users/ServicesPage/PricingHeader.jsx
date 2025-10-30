// src/components/PricingPage.jsx
import React from "react";
import Layout from "../ServicesPage/Layout";
import PricingGrid from "../ServicesPage/PricingGrid";
import FeaturesRow from "../ServicesPage/FeaturesRow";
import PlansCompare from "../ServicesPage/PlansCompare";
import CTASection from "../ServicesPage/CTASection";

/**
 * PricingPage
 * - The main pricing page layout that combines all pricing-related sections.
 * - Includes:
 *   - Header with intro text
 *   - PricingGrid (shows available plans)
 *   - FeaturesRow (highlights key benefits)
 *   - PlansCompare (detailed feature comparison)
 *   - CTASection (final call-to-action)
 */

export default function PricingPage() {
  // Handle when a plan is selected (e.g., open checkout modal or navigate)
  const handleSelect = (plan) => {
    console.log("Selected plan:", plan);
    // Example: router.push(`/checkout?plan=${plan.id}`);
  };

  return (
    <Layout>
      {/* Page Header */}
      <header className="bg-blue-100 py-14 text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Simple pricing for every business need.
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We’ve revamped our plans to make them more user-friendly, including
            clearer guidelines, extra features, and greater value for your
            money.
          </p>
        </div>
      </header>

      {/* Pricing Sections */}
      <PricingGrid onSelect={handleSelect} />
      <FeaturesRow />
      <PlansCompare />
      <CTASection />
    </Layout>
  );
}
