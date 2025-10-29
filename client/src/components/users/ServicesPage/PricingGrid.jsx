// PricingGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { PLANS } from '../../../utils/services';

export default function PricingGrid({ onSelect = ()=>{} }) {
  return (
    <section id="plans" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map(plan => (
            <ServiceCard key={plan.id} plan={plan} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
