// src/pages/ServicesPage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, ServiceDetailHero, PricingTable, PricingAccordion, CTAContact } from "../../components/users/servicesDetail/index";

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to anchor if present (e.g., /services#pricing)
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [hash]);

  return (
    <Layout>
      <ServiceDetailHero />
      {/* Desktop table (md+) */}
      <div id="pricing" className="pt-8">
        <PricingTable />
        <PricingAccordion />
      </div>
      <CTAContact />
    </Layout>
  );
}
