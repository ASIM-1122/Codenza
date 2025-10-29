import React, { useState } from "react";
import Navbar from "../../components/common/Navbar.jsx";

/**
 * AuthPage.jsx
 * Responsive login/signup form (React + Tailwind CSS)
 * Works from mobile (360px) → 2400px screens
 * - Clean, minimal, and professional
 * - Single component toggles between Login & Signup
 */

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300">
        {/* Header */}
        <div className="bg-blue-900 text-white text-center py-6">
          <h2 className="text-2xl font-bold tracking-wide">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-sm mt-1 opacity-90">
            {isLogin ? "Login to continue" : "Join us and get started"}
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            )} */}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-600" />
                  Remember me
                </label>
                <a href="#" className="text-orange-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google login (optional) */}
          <button className="w-full mt-6 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Toggle */}
          <div className="text-center mt-6 text-sm">
            {isLogin ? (
              <p>
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-blue-900 hover:underline font-medium"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-orange-600 hover:underline font-medium"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div></>
  );
}
