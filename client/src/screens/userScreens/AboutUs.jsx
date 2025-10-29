// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import map from '../../assets/map.png';
import asim from '../../assets/asim.jpg';
import jane from '../../assets/prs.jpg';
import mike from '../../assets/prs2.jpg';
/**
 * AboutPage - Single-file, simple & beautiful responsive About Us page
 * - Tailwind CSS required
 * - Replace /assets/* images with your own (or keep them out for a text-only look)
 * - Mobile-first, responsive up to ultra-wide screens (max-w capped)
 *
 * Sections:
 *  - Hero (short headline + CTA)
 *  - Mission (short paragraph + 4 feature tiles)
 *  - Team (3 simple profile cards)
 *  - CTA / Footer note
 */

export default function AboutPage() {
  return (
    <>
      <Navbar />
    
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Container cap for ultra-wide screens */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* HERO */}
        <header className="pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <p className="inline-block text-xs font-semibold uppercase bg-blue-100 text-blue-700 px-2 py-1 rounded">
                About Us
              </p>

              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                We make roof measurement fast, accurate, and simple.
              </h1>

              <p className="mt-4 text-gray-600 max-w-xl">
                Our mission is to help contractors deliver fair quotes and order the right materials the first time.
                We combine aerial imagery, automated measurements, and human review to give you confidence on every project.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow-sm"
                >
                  Contact Sales
                </a>
                <a
                  href="/pricing"
                  className="inline-block border border-gray-200 px-5 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Hero image (replace src with your asset) */}
            <div className="relative">
              <div className="w-full h-56 md:h-64 lg:h-72 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center overflow-hidden">
                {/* Replace this image with your own illustration or leave as decorative */}
                <img
                  src={map}
                  alt="Illustration showing measurement and maps"
                  className="max-h-64 md:max-h-72 xl:max-h-96 object-contain rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Small badge */}
              <div className="absolute -bottom-4 right-3 bg-white border border-gray-100 rounded-md px-3 py-2 text-sm shadow-md">
                <strong className="block text-blue-600">99% Accuracy</strong>
                <span className="text-xs text-gray-500">Validated across thousands of reports</span>
              </div>
            </div>
          </div>
        </header>

        {/* MISSION / FEATURES */}
        <section className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold">Our mission</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                We remove guesswork from roofing by delivering accurate aerial measurements and
                automated material orders so contractors can save time, reduce waste, and win more bids.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border bg-white">
                  <h3 className="font-semibold">Speed</h3>
                  <p className="text-sm text-gray-600 mt-1">Reports delivered in hours, not days.</p>
                </div>

                <div className="p-4 rounded-lg border bg-white">
                  <h3 className="font-semibold">Accuracy</h3>
                  <p className="text-sm text-gray-600 mt-1">99%+ validated measurement accuracy.</p>
                </div>

                <div className="p-4 rounded-lg border bg-white">
                  <h3 className="font-semibold">Automation</h3>
                  <p className="text-sm text-gray-600 mt-1">Smart quotes and automated purchase orders.</p>
                </div>

                <div className="p-4 rounded-lg border bg-white">
                  <h3 className="font-semibold">Support</h3>
                  <p className="text-sm text-gray-600 mt-1">Dedicated account managers for teams.</p>
                </div>
              </div>
            </div>

            {/* Small stats card */}
            <aside className="bg-gray-50 border rounded-lg p-4">
              <div className="text-sm text-gray-500">By the numbers</div>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">50k+</span>
                  <span className="text-sm text-gray-600">Reports delivered</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">99%</span>
                  <span className="text-sm text-gray-600">Accuracy</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">120+</span>
                  <span className="text-sm text-gray-600">Partners</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-10 md:py-14">
          <h3 className="text-xl font-bold">Meet the team</h3>
          <p className="mt-2 text-gray-600 max-w-2xl">Small, experienced, and focused on delivery.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <img
                src={asim}
                alt="Asim Nazir"
                className="mx-auto h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold">Asim Nazir</h4>
              <div className="text-sm text-gray-500">Founder & Principal</div>
              <p className="mt-3 text-sm text-gray-600">Product lead with experience in SaaS and roofing workflows.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <img
                src={jane}
                alt="Jane Doe"
                className="mx-auto h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold">Jane Doe</h4>
              <div className="text-sm text-gray-500">Head of Engineering</div>
              <p className="mt-3 text-sm text-gray-600">Leads the engineering and architecture of our platform.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <img
                src={mike}
                alt="Mike Ross"
                className="mx-auto h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold">Mike Ross</h4>
              <div className="text-sm text-gray-500">Head of Operations</div>
              <p className="mt-3 text-sm text-gray-600">Ensures timely delivery and customer success.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">Ready to see how it works?</h4>
              <p className="text-sm mt-1">Request a free demo or contact our sales team for enterprise pricing.</p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Request Demo</a>
              <a href="/pricing" className="border border-white/30 px-4 py-2 rounded-md">View Plans</a>
            </div>
          </div>
        </section>

        {/* small footer note */}
        <footer className="py-8 text-center text-xs text-gray-500">
          <div>© {new Date().getFullYear()} Scope Technologies. All rights reserved.</div>
        </footer>
      </div>
    </div></>
  );
}
