// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Navbar — theme: slate (base), teal (cta), amber (decor)
 * - Desktop dropdown for "Company"
 * - Mobile drawer with scroll-lock
 * - Accessible (aria, keyboard, focus rings)
 * - Clean, production-ready, easy to maintain
 */

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const companyRef = useRef(null);
  const mobileRef = useRef(null);

  // Close on Escape and click outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCompanyOpen(false);
      }
    };

    const onDocClick = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
      // don't auto-close mobile drawer: keep user in control
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const navLinks = [
    { label: "Solutions", to: "/services" },
    { label: "Pricing", to: "/pricing" },
    { label: "Resources", to: "/resources" },
  ];

  const goTo = (to) => {
    setMobileOpen(false);
    setCompanyOpen(false);
    navigate(to);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Announcement bar */}
      {showAnnouncement && (
        <div className="bg-amber-100/80 text-slate-900 text-sm text-center px-3 py-2">
          <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center gap-3">
            <span>
              Welcome to <strong className="font-semibold">PrimeSolutions</strong> — New client trial: get up to <strong>$279</strong> in credits.
            </span>

            <button
              onClick={() => setShowAnnouncement(false)}
              aria-label="Dismiss announcement"
              className="ml-2 rounded p-1 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav className="bg-white/95 shadow-sm">
        <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => goTo("/")}
                className="flex items-center gap-3 focus:outline-none"
                aria-label="PrimeSolutions home"
              >
                <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-base font-bold text-slate-900">Prime<span className="text-slate-500">Solutions</span></div>
                  <div className="text-xs text-slate-500 -mt-1">Smart Quotes & Material Orders</div>
                </div>
              </button>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <ul className="flex items-center gap-6 text-slate-700 font-medium">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <button
                      onClick={() => goTo(l.to)}
                      className="px-1 py-1 rounded hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}

                {/* Company dropdown */}
                <li ref={companyRef} className="relative">
                  <button
                    aria-haspopup="true"
                    aria-expanded={companyOpen}
                    onClick={() => setCompanyOpen((s) => !s)}
                    className={`flex items-center gap-2 px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-200 ${companyOpen ? "border-b-2 border-teal-600" : ""}`}
                  >
                    Company
                    <svg className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {companyOpen && (
                    <div role="menu" className="absolute left-0 mt-2 w-56 bg-slate-800 text-white rounded-md shadow-lg z-30">
                      <button onClick={() => goTo("/about")} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-700">About Us</button>
                      <button onClick={() => goTo("/contact")} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-700">Contact</button>
                      
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <button onClick={() => goTo("/account")} className="text-slate-700 hover:text-slate-900 px-2 py-1 rounded focus:outline-none">
                Account
              </button>

              <button
                onClick={() => goTo("/pricing")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-teal-200/40 transition"
              >
                START ORDER
              </button>

              <div className="flex items-center text-slate-800 font-medium space-x-3 pl-3 border-l border-slate-100">
                <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">1-877-697-2673</span>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button
                data-mobile-toggle
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 rounded-md text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-200"
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          id="mobile-menu"
          ref={mobileRef}
          className={`md:hidden transition-[max-height] duration-300 ease-out overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
        >
          <div className="bg-white border-t border-slate-100 shadow-sm px-4 py-6 space-y-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.to}
                  onClick={() => goTo(l.to)}
                  className="w-full text-left text-slate-700 font-medium py-2 rounded hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-200"
                >
                  {l.label}
                </button>
              ))}

              <div>
                <button
                  onClick={() => setCompanyOpen((s) => !s)}
                  aria-expanded={companyOpen}
                  className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-200"
                >
                  <span className="font-medium text-slate-700">Company</span>
                  <svg className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {companyOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <button onClick={() => goTo("/about")} className="block w-full text-left px-2 py-2 rounded hover:bg-slate-50">About</button>
                    <button onClick={() => goTo("/contact")} className="block w-full text-left px-2 py-2 rounded hover:bg-slate-50">Contact</button>
                    
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <button onClick={() => goTo("/account")} className="w-full text-left py-2 rounded hover:bg-slate-50">Create An Account</button>
              <button onClick={() => goTo("/order")} className="w-full py-2 rounded bg-teal-600 text-white font-semibold">START ORDER</button>

              <div className="flex items-center gap-3 pt-2">
                <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-bold text-slate-800">1-877-697-2673</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
