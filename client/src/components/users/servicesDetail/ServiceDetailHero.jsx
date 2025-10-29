// src/components/ServiceDetailHero.jsx
import React from "react";

export default function ServiceDetailHero() {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">How our memberships compare</h1>
        <p className="mt-3 text-sm md:text-base max-w-3xl mx-auto">
          Featuring a range of pricing options designed to accommodate all business needs — from pay-as-you-go to enterprise memberships with the most comprehensive and cost-effective reports in the market.
        </p>
      </div>
    </section>
  );
}
