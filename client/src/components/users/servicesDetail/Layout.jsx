// src/components/Layout.jsx
import React from "react";
import Navbar from "../../../components/common/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Simple header - keep consistent with your main site */}
      <Navbar />

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-sm">
          <div>© {new Date().getFullYear()} Scope Technologies — All rights reserved.</div>
          <div className="mt-2 text-xs text-gray-400">Questions? <a href="/contact" className="underline">Contact us</a></div>
        </div>
      </footer>
    </div>
  );
}
