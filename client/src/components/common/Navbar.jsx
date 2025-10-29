import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Simple, professional Navbar
 * - Clear structure and small helper functions for readability
 * - Desktop dropdown for Company, mobile drawer
 * - Uses useNavigate for programmatic navigation (e.g. navigate('/pricing'))
 * - Accessible: Escape closes menus, focus outlines, aria attributes
 *
 * Requirements:
 * - Tailwind CSS configured
 * - react-router-dom installed (v6+)
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
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCompanyOpen(false);
      }
    }
    function onClick(e) {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
      // optional: close mobile if clicking outside drawer on small screens
      if (mobileRef.current && !mobileRef.current.contains(e.target) && !e.target.closest("[data-mobile-toggle]")) {
        // keep mobile as-is (owner choice). If you want auto-close uncomment next line:
        // setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  // Simple nav links (use navigate for page routes)
  const navLinks = [
    { label: "Solutions", to: "/services" },
    { label: "Pricing", to: "/pricing" },
   
  ];

  // Navigate helper: closes menus, navigates
  const goTo = (to) => {
    setMobileOpen(false);
    setCompanyOpen(false);
    navigate(to);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Announcement */}
      {showAnnouncement && (
        <div className="bg-blue-900 text-white text-center text-sm px-3 py-2">
          <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center gap-2">
            <span>
              Welcome to <strong className="font-semibold">PrimeOnline Solutions</strong> — New Client Trial: Get up to <strong>$279</strong> in credits.
            </span>
            <button
              aria-label="Dismiss announcement"
              onClick={() => setShowAnnouncement(false)}
              className="ml-3 p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div>
              <button onClick={() => goTo("/")} className="flex items-center gap-3 focus:outline-none">
                <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  PO
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-lg font-bold text-blue-600">Prime<span className="text-gray-700">Online Solutions</span></div>
                  <div className="text-xs text-gray-500 -mt-1">Smart Quotes & Material Orders</div>
                </div>
              </button>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center gap-6 text-gray-700 font-medium">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <button
                      onClick={() => goTo(l.to)}
                      className="px-1 py-1 rounded hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                    className={`flex items-center gap-2 px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${companyOpen ? "border-b-2 border-blue-600" : ""}`}
                  >
                    Company
                    <svg className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {companyOpen && (
                    <div role="menu" className="absolute left-0 mt-2 w-56 bg-gray-800 text-white rounded-md shadow-lg z-30">
                      <button onClick={() => goTo("/about")} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-800">About Us</button>
                      <button onClick={() => goTo("/contact")} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-800">Contact</button>
                      
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-6">
              
              <button onClick={() => goTo("/account")} className="text-gray-700 hover:text-blue-700 px-2 py-1 rounded focus:outline-none">Account</button>
              <button onClick={() => goTo("/pricing")} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold focus:outline-none">START ORDER</button>

              <div className="flex items-center text-gray-800 font-bold space-x-3 pl-3 border-l border-gray-100">
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">1-877-697-2673</span>
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center">
              <button
                data-mobile-toggle
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((s) => !s)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
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

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          ref={mobileRef}
          className={`md:hidden transition-[max-height] duration-250 ease-out overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
        >
          <div className="bg-white border-t border-gray-100 shadow-sm px-4 py-6 space-y-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.to}
                  onClick={() => goTo(l.to)}
                  className="w-full text-left text-gray-700 font-medium py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {l.label}
                </button>
              ))}

              <div className="mt-1">
                <button
                  onClick={() => setCompanyOpen((s) => !s)}
                  aria-expanded={companyOpen}
                  className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <span className="font-medium text-gray-700">Company</span>
                  <svg className={`w-4 h-4 transition-transform ${companyOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {companyOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <button onClick={() => goTo("/about")} className="block w-full text-left px-2 py-2 rounded hover:bg-gray-50">About</button>
                    <button onClick={() => goTo("/contact")} className="block w-full text-left px-2 py-2 rounded hover:bg-gray-50">Contact</button>
                    
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 mt-2 flex flex-col gap-2">
              
              <button onClick={() => goTo("/account")} className="w-full text-left py-2 rounded hover:bg-gray-50">Create An Account</button>
              <button onClick={() => goTo("/order")} className="w-full py-2 rounded bg-blue-600 text-white font-semibold">START ORDER</button>

              <div className="flex items-center gap-3 pt-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-bold text-gray-800">1-877-697-2673</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
