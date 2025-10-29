// FeaturesRow.jsx
import React from 'react';

const features = [
  { title: '100% Nationwide Coverage', desc: 'We cover the US and Canada.' },
  { title: '99% Accuracy', desc: 'Validated measurement accuracy.' },
  { title: 'Dedicated Managers', desc: 'We assign a manager for your account.' },
];

export default function FeaturesRow(){
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((f,i)=>(
          <div key={i} className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-blue-600 text-3xl mb-3">🏆</div>
            <h4 className="font-semibold">{f.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
