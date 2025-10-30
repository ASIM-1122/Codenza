// src/components/Layout.jsx
import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer"; // ✅ use your final footer

/**
 * Layout Component
 * ----------------
 * Wraps each page with Navbar, Footer, and consistent background & typography.
 * Designed to be responsive, clean, and production-ready.
 */

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Optional small bottom bar for legal text */}
      <div className="bg-slate-900 text-gray-400 text-center text-xs py-3 border-t border-gray-800">
        © {new Date().getFullYear()} PrimeOnline Solutions — All rights reserved.
        <br />
        <a href="/contact" className="text-teal-400 hover:underline">
          Have questions? Contact us
        </a>
      </div>
    </div>
  );
}
