// CTASection.jsx
import React from 'react';
export default function CTASection(){
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-[900px] mx-auto px-4">
        <h3 className="text-2xl font-bold">Are you a contractor looking to grow?</h3>
        <p className="mt-3 text-sm">Start a free demo or contact sales to get tailored pricing.</p>
        <div className="mt-6">
          <a href="/contact" className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}
