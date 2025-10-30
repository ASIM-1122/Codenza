// src/pages/ContactPage.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/common/Navbar.jsx";

/**
 * ContactPage - Minimal, professional, and responsive contact form using EmailJS
 * - Works entirely on frontend (no backend needed)
 * - Configure: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 */

export default function ContactPage() {
  const [form, setForm] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const update = (key) => (e) => setForm((s) => ({ ...s, [key]: e.target.value }));

  const clearStatusAfter = (ms = 4000) => setTimeout(() => setStatusMsg(null), ms);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service not configured. Please set environment variables.");
      }

      const templateParams = {
        subject: form.subject || "Website contact",
        from_name: form.name || "Anonymous",
        from_email: form.email || "no-reply@example.com",
        phone: form.phone || "",
        notes: form.notes || "",
        page_url: window.location.href,
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("EmailJS send response:", res);

      setStatusMsg({ type: "success", text: "✅ Message sent successfully! Thank you for reaching out." });
      setForm({ subject: "", name: "", email: "", phone: "", notes: "" });
      clearStatusAfter(5000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatusMsg({ type: "error", text: "❌ Failed to send message. Please try again later." });
      clearStatusAfter(7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h1>
            <p className="text-sm text-gray-600 mb-6">
              We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
            </p>

            {statusMsg && (
              <div
                className={`p-3 rounded mb-4 text-sm font-medium ${
                  statusMsg.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSend} className="space-y-4" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">Subject</span>
                  <input
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="e.g. Service inquiry"
                    className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">Name</span>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">Email</span>
                  <input
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">Phone</span>
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+92 300 0000000"
                    className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700">Message</span>
                <textarea
                  value={form.notes}
                  onChange={update("notes")}
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setForm({ subject: "", name: "", email: "", phone: "", notes: "" })
                  }
                  className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-6">
              Your message will be sent directly to our inbox using EmailJS — no login required.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
