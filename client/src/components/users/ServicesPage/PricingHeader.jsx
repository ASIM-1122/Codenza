// PricingPage.jsx
import React from 'react';
import Layout from '../ServicesPage/Layout';
import PricingGrid from '../ServicesPage/PricingGrid';
import FeaturesRow from '../ServicesPage/FeaturesRow';
import PlansCompare from '../ServicesPage/PlansCompare';
import CTASection from '../ServicesPage/CTASection';

export default function PricingPage(){
  const handleSelect = (plan) => {
    // simple handler — navigate to checkout or open modal
    console.log('selected plan', plan);
    // e.g. router.push(`/checkout?plan=${plan.id}`)
  };

  return (
    <Layout>
      <header className="bg-blue-100 py-14 text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Simple pricing for every business need.</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We’ve revamped our plans to make them more user-friendly, including clearer guidelines, extra features, and greater value for your money.</p>
        </div>
      </header>

      <PricingGrid onSelect={handleSelect} />
      <FeaturesRow />
      <PlansCompare />
      <CTASection />
    </Layout>
  );
}
