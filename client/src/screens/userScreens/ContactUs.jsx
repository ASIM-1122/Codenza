// src/pages/ContactPage.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "../../components/common/Navbar.jsx";

/**
 * ContactPage (EmailJS)
 * - Sends email directly from browser to EmailJS service (no backend)
 * - Configure REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY in your env
 * - Template must include variables: subject, from_name, from_email, phone, notes, page_url (optional)
 *
 * Note: EmailJS public key is safe for client use.
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
  const [statusMsg, setStatusMsg] = useState(null); // { type: 'success'|'error', text }

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const clearStatusAfter = (ms = 4000) => {
    setTimeout(() => setStatusMsg(null), ms);
  };

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

      // Build template params to match your EmailJS template variables
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

      // EmailJS returns status 200-like object on success
      setStatusMsg({ type: "success", text: "Message sent — thank you!" });
      setForm({ subject: "", name: "", email: "", phone: "", notes: "" });
      clearStatusAfter(5000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatusMsg({ type: "error", text: "Failed to send message. Please try again." });
      clearStatusAfter(7000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm text-gray-600 mb-6">
            Send us a message — no login required. We'll receive it at the configured email address.
          </p>

          {statusMsg && (
            <div className={`p-3 rounded mb-4 ${statusMsg.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {statusMsg.text}
            </div>
          )}

          <form onSubmit={handleSend} className="space-y-4" aria-label="Contact form (EmailJS)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Subject</span>
                <input
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="e.g. Pricing inquiry"
                  className="mt-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className="mt-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="mt-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Phone</span>
                <input
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 (555) 555-5555"
                  className="mt-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">Additional notes</span>
              <textarea
                value={form.notes}
                onChange={update("notes")}
                rows={6}
                placeholder="Tell us about your needs, project, or timeline."
                className="mt-1 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => setForm({ subject: "", name: "", email: "", phone: "", notes: "" })}
                className="px-4 py-2 rounded border border-gray-200"
              >
                Reset
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Your message will be sent directly — no login required. For better deliverability, configure your EmailJS service with your SMTP provider.
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
