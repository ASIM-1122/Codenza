// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import map from "../../assets/map.png";
import asim from "../../assets/asim.jpg";
import jane from "../../assets/prs.jpg";
import mike from "../../assets/prs2.jpg";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-slate-800 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* HERO */}
          <header className="pt-10 pb-8 md:pt-16 md:pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* TEXT */}
              <div>
                <p className="inline-block text-xs font-semibold uppercase bg-teal-100 text-teal-700 px-2 py-1 rounded">
                  About Us
                </p>

                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
                  We make roof measurement fast, accurate, and simple.
                </h1>

                <p className="mt-4 text-slate-600 max-w-xl">
                  Our mission is to help contractors deliver fair quotes and
                  order the right materials the first time — using aerial
                  imagery, automated measurements, and expert review.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-5 py-3 rounded-md font-semibold shadow-sm"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="/pricing"
                    className="inline-block border border-slate-200 px-5 py-3 rounded-md text-sm text-slate-700 hover:bg-slate-50"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className="w-full h-56 md:h-64 lg:h-72 bg-gradient-to-br from-teal-50 to-white rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={map}
                    alt="Illustration showing measurement and maps"
                    className="max-h-64 md:max-h-72 xl:max-h-96 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>

                <div className="absolute -bottom-4 right-3 bg-white border border-slate-100 rounded-md px-3 py-2 text-sm shadow-md">
                  <strong className="block text-teal-700">99% Accuracy</strong>
                  <span className="text-xs text-slate-500">
                    Validated across thousands of reports
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* MISSION */}
          <section className="py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-slate-900">
                  Our Mission
                </h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  We eliminate guesswork by providing precise aerial
                  measurements, automated material ordering, and real-time
                  insights — helping contractors save time and reduce waste.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Speed", desc: "Reports in hours, not days." },
                    {
                      title: "Accuracy",
                      desc: "99%+ validated measurement accuracy.",
                    },
                    {
                      title: "Automation",
                      desc: "Smart quotes and automated purchase orders.",
                    },
                    {
                      title: "Support",
                      desc: "Dedicated managers for every contractor.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS */}
              <aside className="bg-slate-50 border rounded-lg p-4">
                <div className="text-sm text-slate-500">By the numbers</div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-slate-900">
                      50k+
                    </span>
                    <span className="text-sm text-slate-600">
                      Reports delivered
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-slate-900">
                      99%
                    </span>
                    <span className="text-sm text-slate-600">Accuracy</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-slate-900">
                      120+
                    </span>
                    <span className="text-sm text-slate-600">Partners</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* TEAM */}
          <section className="py-10 md:py-14">
            <h3 className="text-xl font-bold text-slate-900">Meet the Team</h3>
            <p className="mt-2 text-slate-600 max-w-2xl">
              A small, experienced team dedicated to innovation and reliability.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: asim,
                  name: "Asim Nazir",
                  role: "Founder & Principal",
                  desc: "Product lead with expertise in SaaS and digital workflows.",
                },
                {
                  img: jane,
                  name: "Jane Doe",
                  role: "Head of Engineering",
                  desc: "Architects scalable systems and ensures top-tier performance.",
                },
                {
                  img: mike,
                  name: "Mike Ross",
                  role: "Head of Operations",
                  desc: "Oversees logistics, delivery, and customer success.",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="mx-auto h-28 w-28 rounded-full object-cover"
                    loading="lazy"
                  />
                  <h4 className="mt-3 font-semibold text-slate-800">
                    {person.name}
                  </h4>
                  <div className="text-sm text-slate-500">{person.role}</div>
                  <p className="mt-3 text-sm text-slate-600">{person.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 md:py-14">
            <div className="bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">
                  Ready to see how it works?
                </h4>
                <p className="text-sm mt-1">
                  Request a free demo or contact our sales team for enterprise
                  pricing.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="bg-white text-teal-700 px-4 py-2 rounded-md font-semibold shadow-sm"
                >
                  Request Demo
                </a>
                <a
                  href="/pricing"
                  className="border border-white/30 px-4 py-2 rounded-md hover:bg-white/10"
                >
                  View Plans
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-8 text-center text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Scope Technologies. All rights
              reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
