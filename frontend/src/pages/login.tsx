import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.png";

export default function AuthPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [checkedIn, setCheckedIn] = useState(false);


  const toggleMode = () => setIsLogin((prev) => !prev);

  // Tilt on the form card — follows cursor relative to card center
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 6 });
  };
  const handleCardMouseLeave = () => setTilt({ x: 0, y: 0 });

  // Parallax for the floating cards over the photo
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      setParallax({ x: px, y: py });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => window.removeEventListener("mousemove", handleWindowMouseMove);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex bg-[#F6F1E4] ">
      <style>{`
				.perspective-1400 { perspective: 1400px; }
			`}</style>

      {/* ================= FORM SECTION ================= */}
      <div className="w-full lg:w-[42%] h-screen flex flex-col justify-between px-10 md:px-16 py-10 relative">
        {/* Logo */}
        <div>
          <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#3B2A20]/15 text-[#3B2A20] font-semibold text-sm">
            SmartHire
          </span>
        </div>

        {/* Form — tilt card */}
        <div className="perspective-1400 flex-1 flex items-center">
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-full max-w-sm mx-auto transition-transform duration-200 ease-out"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="text-center mb-9">
              <h1 className="text-3xl font-normal text-[#2A2118] mb-2">
                {isLogin ? "Welcome back" : "Create an account"}
              </h1>
              <p className="text-sm text-[#8A8072]">
                {isLogin
                  ? "Log in to continue where you left off"
                  : "Sign up and get your first match this week"}
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                if (isLogin) {
                  navigate("/loading");
                }
              }}
            >
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-[#8A8072] mb-1.5 ml-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Amélie Laurent"
                    className="w-full rounded-full bg-white/70 px-5 py-3.5 text-[#2A2118] placeholder:text-[#B3A995] outline-none focus:ring-2 focus:ring-[#3B2A20]/15 transition-shadow"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#8A8072] mb-1.5 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full bg-white/70 px-5 py-3.5 text-[#2A2118] placeholder:text-[#B3A995] outline-none focus:ring-2 focus:ring-[#3B2A20]/15 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8A8072] mb-1.5 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder={
                    isLogin ? "Enter your password" : "Create a password"
                  }
                  className="w-full rounded-full bg-white/70 px-5 py-3.5 text-[#2A2118] placeholder:text-[#B3A995] outline-none focus:ring-2 focus:ring-[#3B2A20]/15 transition-shadow"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-[#8A8072] mb-1.5 ml-1">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-full bg-white/70 px-5 py-3.5 text-[#2A2118] placeholder:text-[#B3A995] outline-none focus:ring-2 focus:ring-[#3B2A20]/15 transition-shadow"
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs font-semibold text-[#8A8072] hover:text-[#2A2118]"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#F2C84B] hover:bg-[#EAB92E] text-[#2A2118] py-3.5 rounded-full font-bold transition-colors mt-6"
              >
                {isLogin ? "Log in" : "Submit"}
              </button>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white/70 hover:bg-white text-sm font-semibold text-[#2A2118] transition-colors"
                >
                  <span></span> Apple
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white/70 hover:bg-white text-sm font-semibold text-[#2A2118] transition-colors"
                >
                  <span className="text-[#4285F4] font-bold">G</span> Google
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-between text-xs text-[#8A8072]">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleMode}
              className="font-semibold text-[#2A2118] hover:underline"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
          <a href="#terms" className="hover:text-[#2A2118] transition-colors">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* ================= IMAGE SECTION — floating 3D cards ================= */}
      <div className="hidden lg:block w-[58%] h-screen relative overflow-hidden p-3">
        <div className="relative w-full h-full rounded-4xl overflow-hidden">
          <img
            src={loginImage}
            alt="Team collaborating"
            className="w-full h-full object-cover"
            style={{
              transform: `translate3d(${parallax.x * -12}px, ${parallax.y * -12
                }px, 0) scale(1.06)`,
            }}
          />
          {/* 1. Live Shift Check-in Card (Floating Top-Right) */}
          <div
            className="absolute top-12 right-50 w-72 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${parallax.x * 24}px, ${parallax.y * 24}px, 0)`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
                  Current Shift
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">04:30 PM - 08:30 PM</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                ☕
              </div>
              <div className="leading-tight">
                <h4 className="text-xs font-bold text-gray-900">Barista & Cashier</h4>
                <p className="text-[11px] text-gray-500">Café Kumbuk • 4 hrs shift</p>
              </div>
            </div>

            <button
              onClick={() => setCheckedIn(!checkedIn)}
              className={`w-full py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${checkedIn
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
                }`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              {checkedIn ? 'Clocked In (Active)' : 'Clock In Now'}
            </button>
          </div>

          {/* 2. Earnings & Hours Tracker Card (Floating Center-Right) */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-12 w-64 bg-slate-900/90 text-white backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/50 transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${parallax.x * 16}px, ${parallax.y * 16}px, 0)`,
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-[10px] uppercase font-semibold text-slate-400">Weekly Payout</p>
                <h3 className="text-lg font-bold text-white tracking-tight">LKR 18,500</h3>
              </div>
              <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                +18% hrs
              </span>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5 mt-3">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>Target: 20 hrs</span>
                <span className="font-semibold text-blue-400">14 hrs done</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-linear-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* 3. New Shift Matched Alert Card (Floating Bottom-Left) */}
          <div
            className="absolute bottom-6 left-10 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3.5 shadow-2xl border border-blue-100 flex items-center gap-3 transition-transform duration-200 ease-out max-w-xs"
            style={{
              transform: `translate3d(${parallax.x * 28}px, ${parallax.y * 28}px, 0)`,
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-base shrink-0">
              ⚡
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-gray-800 truncate">Weekend Tutor Match</p>
                <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  Just now
                </span>
              </div>
              <p className="text-[10px] text-gray-500 truncate">LKR 2,500/hr • 6 hrs/week</p>
            </div>
          </div>

          {/* Daily meeting card — nearest layer over the photo base */}

        </div>
      </div>
    </div>
  );
}