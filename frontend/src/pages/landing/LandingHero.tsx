import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parttimeImage from "../../assets/parttime.png";
import careerChart from "../../assets/presnet.png";
import trustShield from "../../assets/lock.png";

export default function LandingHero() {
  // Parallax coordinates normalized between -1 and 1
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to window center
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-10 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with slight inverse parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-105"
        style={{
          transform: `translate3d(${-parallax.x * 12}px, ${-parallax.y * 12}px, 0)`,
        }}
      >
        <img
          src={parttimeImage}
          alt="Part-time jobs background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit hover:bg-white/30 transition-all shadow-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-white/90">125+ New Part-Time Jobs Posted This Week</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight text-white italic">
              Find Your Perfect
              <br />
              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent italic">
                Part-Time Job Today
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md">
              Connect job seekers with trusted employers and discover flexible part-time opportunities near you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl active:scale-95"
              >
                Find Jobs
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-2xl">⭐</span>
                <span className="text-white/90 font-semibold">4.8/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Visual - 3D Parallax Depth Container */}
          <div
            className="hidden lg:flex items-center justify-center relative min-h-125"
            style={{ perspective: "1200px" }}
          >
            <div className="relative w-full max-w-sm flex flex-col gap-6">

              {/* Card 1: Career Opportunities (Upper Layer - Depth 20px) */}
              <div
                className="relative z-10 transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 20px) rotateX(${-parallax.y * 7}deg) rotateY(${parallax.x * 7}deg)`,
                }}
              >
                {/* Ambient Glow */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translate3d(${parallax.x * 35}px, ${parallax.y * 35}px, 0)`,
                  }}
                />

                <div className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 shadow-2xl overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={careerChart}
                        alt="Career"
                        className="w-12 h-12 object-contain drop-shadow-md"
                      />
                      <h3 className="text-white font-bold text-lg">
                        Career Opportunities
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    Discover flexible part-time jobs and career opportunities from leading organizations across Sri Lanka.
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <span className="text-white/60">Opportunities Available</span>
                    <span className="text-cyan-300 font-semibold">Updated Daily</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Trusted Platform (Deeper Layer - Depth 32px) */}
              <div
                className="relative z-20 transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${parallax.x * 32}px, ${parallax.y * 32}px, 40px) rotateX(${-parallax.y * 9}deg) rotateY(${parallax.x * 9}deg)`,
                }}
              >
                {/* Ambient Glow */}
                <div
                  className="absolute -top-10 -left-10 w-44 h-44 bg-blue-500/25 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translate3d(${parallax.x * 45}px, ${parallax.y * 45}px, 0)`,
                  }}
                />

                <div className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 shadow-2xl overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={trustShield}
                        alt="Trusted Platform"
                        className="w-12 h-12 object-contain drop-shadow-md"
                      />
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          Trusted Platform
                        </h3>
                        <p className="text-white/70 text-xs mt-0.5">
                          Verified Employers & Secure Applications
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    Connect with reputable employers and apply confidently through a secure and reliable recruitment platform.
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <button className="text-emerald-300 text-xs font-semibold hover:text-emerald-200 transition-colors flex items-center gap-1">
                      Explore Opportunities <span>→</span>
                    </button>
                    <span className="text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                      100% Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Badge (Nearest Foreground Layer - Depth 48px) */}
              <div
                className="absolute -bottom-6 -right-8 z-30 bg-white/25 backdrop-blur-2xl border border-white/40 rounded-2xl px-5 py-4 shadow-2xl transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${parallax.x * 48}px, ${parallax.y * 48}px, 60px) rotateX(${-parallax.y * 12}deg) rotateY(${parallax.x * 12}deg)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-8 bg-linear-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-white font-black text-2xl tracking-tight leading-none">
                      2.8K+
                    </div>
                    <div className="text-cyan-200 text-[11px] font-medium mt-1">
                      Active Jobs
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}