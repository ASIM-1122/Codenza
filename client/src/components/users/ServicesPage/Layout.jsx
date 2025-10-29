// Layout.jsx
import React from 'react';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Placeholder Navbar */}
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
