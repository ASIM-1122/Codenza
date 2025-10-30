// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Playstoree from "../../assets/Playstoree.png";
import Appstoree from "../../assets/AppStore.png";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-200 pt-12 pb-8 px-4 md:px-20 overflow-hidden">
      {/* Decorative amber glow (subtle) */}
      <div className="absolute -top-24 -right-20 w-[420px] h-[420px] bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* Logo + tagline */}
        <div className="w-full md:w-1/4 space-y-3">
          <Link to="/" className="inline-flex items-center gap-3 focus:outline-none">
            <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center text-white font-bold">
              PS
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-lg font-bold text-white">Prime<span className="text-slate-300">Online Solutions</span></div>
              <div className="text-xs text-slate-400 -mt-1">Smart Quotes & Material Orders</div>
            </div>
          </Link>

          <p className="text-sm text-slate-400 max-w-xs">
            Better data, bigger profits — trusted measurements and automated orders for contractors.
          </p>

          {/* Optional app badges (uncomment if using) */}
          {/* <div className="flex gap-2 mt-3">
            <a href="#" aria-label="App Store"><img src={Appstoree} alt="App Store" className="h-10 w-auto rounded-md shadow-sm" /></a>
            <a href="#" aria-label="Google Play"><img src={Playstoree} alt="Google Play" className="h-10 w-auto rounded-md shadow-sm" /></a>
          </div> */}
        </div>

        {/* Links */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8">
          <div className="w-1/3">
            <h4 className="text-white font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Who We Are</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Vision & Mission</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Core Values</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">Quality Policy</Link></li>
            </ul>
          </div>

          <div className="w-1/3">
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="hover:text-teal-400 transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400 transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div className="w-1/3">
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/tutorials" className="hover:text-teal-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact + Social */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-300 text-center md:text-left">
          <div className="font-medium text-slate-100">📞 1-877-697-2673</div>
          <address className="not-italic text-slate-400 mt-1 text-sm">
            370 17th Street, 50th Floor<br />Denver, CO 80202
          </address>
        </div>

        <div className="flex items-center gap-6">
          {/* CTA button styled in teal */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm transition"
            aria-label="Contact sales"
          >
            Contact Sales
          </Link>

          {/* Social icons */}
          <div className="flex items-center gap-3 text-2xl">
            <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-teal-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-slate-300 hover:text-teal-400 transition-colors">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-teal-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-teal-400 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} <span className="text-white">PrimeOnline Solutions</span>. All rights reserved.
      </div>
    </footer>
  );
}
