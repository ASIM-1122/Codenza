// src/pages/AuthPage.jsx
import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";

/**
 * AuthPage
 * - Responsive login / signup form
 * - Theme: slate + teal
 * - Controlled inputs, simple client-side UI (no backend/auth wired)
 */

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const update = (k) => (e) =>
    setForm((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Temporary client-side simulate
    setTimeout(() => {
      setLoading(false);
      alert(`${isLogin ? "Logged in" : "Account created"} (demo) — wire real auth here.`);
      // reset sensitive fields on signup success (demo)
      setForm((s) => ({ ...s, password: "", confirmPassword: "" }));
    }, 800);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-900 text-white text-center py-6">
            <h2 className="text-2xl font-bold tracking-tight">
              {isLogin ? "Welcome Back" : "Create your account"}
            </h2>
            <p className="text-sm mt-1 text-slate-300">
              {isLogin ? "Sign in to continue" : "Join and start using PrimeOnline Solutions"}
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <form onSubmit={submit} className="space-y-5" aria-label={isLogin ? "Login form" : "Signup form"}>
              {/* name (signup only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
              )}

              {/* email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              {/* password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={update("password")}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              {/* confirm password (signup) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={update("confirmPassword")}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                    required
                  />
                </div>
              )}

              {/* remember / forgot (login only) */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.remember}
                      onChange={update("remember")}
                      className="h-4 w-4 rounded accent-teal-600"
                    />
                    Remember me
                  </label>

                  <button type="button" className="text-teal-600 hover:underline text-sm">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-md focus:outline-none focus:ring-4 focus:ring-teal-200 disabled:opacity-70"
                >
                  {loading ? (isLogin ? "Signing in..." : "Creating...") : isLogin ? "Login" : "Create account"}
                </button>
              </div>

              {/* divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <div className="text-xs text-slate-400">OR</div>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* social / google */}
              <button
                type="button"
                className="w-full mt-1 flex items-center justify-center gap-3 border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                <span className="text-sm text-slate-700 font-medium">Continue with Google</span>
              </button>

              {/* toggle */}
              <div className="text-center mt-3 text-sm">
                {isLogin ? (
                  <p className="text-slate-600">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-teal-600 font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                ) : (
                  <p className="text-slate-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-teal-600 font-medium hover:underline"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
