import { useState } from "react";
import loginImage from "../assets/login.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className={`h-screen overflow-hidden flex ${
        isLogin ? "flex-row" : "flex-row-reverse"
      } transition-all duration-700 ease-in-out`}
    >
      {/* ================= IMAGE SECTION ================= */}
      <div className="hidden lg:flex w-1/2 h-screen relative overflow-hidden bg-slate-900">
        <img
          src={loginImage}
          alt="Smart Hire"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-10">
          <h2 className="text-5xl font-bold mb-4">
            {isLogin ? "Welcome Back" : "Join Smart Hire"}
          </h2>

          <p className="max-w-md text-lg text-white/90">
            {isLogin
              ? "Login and continue your journey with trusted employers across Sri Lanka."
              : "Create your account and explore exciting job opportunities near you."}
          </p>
        </div>
      </div>

      {/* ================= FORM SECTION ================= */}
      <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 bg-white overflow-hidden">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Smart Hire
            </h1>

            <p className="mt-2 text-gray-600 text-sm">
              {isLogin
                ? "Welcome Back! Login to your Smart Hire account"
                : "Get Started! Create your Smart Hire account"}
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Full Name */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Contact Number */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>

                <input
                  type="tel"
                  placeholder="+94 77 123 4567"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <input
                type="password"
                placeholder={
                  isLogin
                    ? "Enter your password"
                    : "Create your password"
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>
            )}

            {/* Forgot Password */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Terms */}
            {!isLogin && (
              <div className="flex items-center gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4"
                />

                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <span className="text-blue-600 font-medium">
                    Terms & Conditions
                  </span>
                </label>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-300"
            >
              {isLogin ? "Login" : "Register"}
            </button>

            {/* Toggle */}
            <p className="text-center text-sm text-gray-600">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={toggleMode}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}