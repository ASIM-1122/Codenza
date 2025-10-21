import { useEffect, useRef, useState } from "react";

/**
 * Client-ready responsive Navbar component (Tailwind CSS)
 * - Fully responsive from mobile -> 2400px+
 * - Accessible dropdown and mobile menu (ARIA + keyboard)
 * - Sticky header with dismissible announcement bar
 * - Scroll-lock when mobile menu open
 * - Small utility icons inlined (no external packages)
 *
 * Usage:
 *  - Ensure Tailwind CSS is configured in your project
 *  - Import: import Navbar from './Navbar';
 *  - Place <Navbar /> near top of your app layout
 */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const companyRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown or mobile menu with Escape and click outside
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        setCompanyOpen(false);
        setMobileOpen(false);
      }
    }

    function handleClickOutside(e) {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && e.target.closest("button[data-mobile-toggle]") === null) {
        // don't auto-close mobile menu on clicks to the toggle
        // keep as-is; optional behavior
      }
    }

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll lock when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  // Prevent layout shift on very large screens by constraining inner width
  // (We already set max-w-[2480px] in container below)

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-red-600 text-white text-center text-sm px-3 py-2">
          <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center gap-2">
            <span>
              Welcome to <strong className="font-semibold">PrimeOnline Solutions</strong> — New Client Trial: Get up to <strong>$279</strong> in credits. Automated Smart Quotes & Material Orders included.
            </span>
            <button
              onClick={() => setShowAnnouncement(false)}
              aria-label="Dismiss announcement"
              className="ml-3 inline-flex items-center justify-center p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <nav className="bg-white shadow-sm">
        <div className="max-w-[2480px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-3" aria-label="PrimeOnline Solutions Home">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-tr from-orange-400 to-orange-600 text-white font-bold">
                  PO
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-[#ff9300] leading-tight">Prime<span className="text-gray-700">Online Solutions</span></h1>
                  <p className="text-xs text-gray-500 -mt-1">Smart Quotes & Material Orders</p>
                </div>
              </a>
            </div>

            {/* Middle: Desktop Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <ul className="flex items-center space-x-6 font-medium text-gray-700">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 px-1 py-1 rounded">
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* Company dropdown */}
                <li className="relative" ref={companyRef}>
                  <button
                    onClick={() => setCompanyOpen((s) => !s)}
                    aria-haspopup="true"
                    aria-expanded={companyOpen}
                    className={`flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-300 px-1 py-1 rounded ${companyOpen ? "border-b-2 border-orange-600" : ""}`}
                  >
                    <span>Company</span>
                    <svg className={`w-4 h-4 transform transition-transform ${companyOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {companyOpen && (
                    <div role="menu" className="absolute left-0 mt-2 w-64 bg-gray-800 text-white rounded-md shadow-lg overflow-hidden z-30">
                      <a role="menuitem" href="#about" className="block px-4 py-2 text-sm hover:bg-orange-600">About Us</a>
                      <a role="menuitem" href="#contact" className="block px-4 py-2 text-sm hover:bg-orange-600">Contact Us</a>
                      <a role="menuitem" href="#partners" className="block px-4 py-2 text-sm hover:bg-orange-600">Partners & Integration</a>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Right: Desktop Actions */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#login" className="text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 px-2 py-1 rounded">Log In</a>
              <a href="#signup" className="text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 px-2 py-1 rounded">Account</a>
              <a href="#order" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-orange-300">START ORDER</a>
              <div className="flex items-center text-gray-800 font-bold space-x-3 pl-3 border-l border-gray-100">
                <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">1-877-697-2673</span>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                data-mobile-toggle
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
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

        {/* Mobile panel - full screen drawer from top */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-200 ease-out ${mobileOpen ? "max-h-[100vh]" : "max-h-0 overflow-hidden"}`}
        >
          <div className="bg-white border-t border-gray-100 shadow-sm">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block text-gray-700 font-medium py-2 px-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300">
                    {link.label}
                  </a>
                ))}

                <div>
                  <button
                    onClick={() => setCompanyOpen((s) => !s)}
                    aria-expanded={companyOpen}
                    aria-controls="mobile-company"
                    className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    <span className="font-medium text-gray-700">Company</span>
                    <svg className={`w-4 h-4 transform transition-transform ${companyOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {companyOpen && (
                    <div id="mobile-company" className="mt-2 space-y-1 pl-4">
                      <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-50">About Us</a>
                      <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-50">Contact Us</a>
                      <a href="#partners" className="block px-2 py-2 rounded hover:bg-gray-50">Partners & Integration</a>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 mt-2 flex flex-col gap-2">
                <a href="#login" className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50">Log In</a>
                <a href="#signup" className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50">Create An Account</a>
                <a href="#order" className="block text-white bg-orange-600 text-center py-2 px-3 rounded-md font-semibold">START ORDER</a>
                <div className="flex items-center gap-3 pt-2">
                  <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 3h18v18H3V3z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-bold text-gray-800">1-877-697-2673</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
