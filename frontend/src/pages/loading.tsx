import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STAGES = [
  { threshold: 0, text: "Curating student profile..." },
  { threshold: 25, text: "Scanning verified industry roles..." },
  { threshold: 60, text: "Matching top internship & graduate openings..." },
  { threshold: 88, text: "Personalizing your dashboard..." },
  { threshold: 100, text: "Ready to launch!" },
];

export default function LoadingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        const step =
          prev > 75 ? 1 : Math.floor(Math.random() * 2) + 2;

        return Math.min(prev + step, 100);
      });
    }, 55);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const redirectTimer = setTimeout(() => {
        navigate("/information");
      }, 500);

      return () => clearTimeout(redirectTimer);
    }
  }, [progress, navigate]);

  const currentStage =
    [...STAGES].reverse().find((stage) => progress >= stage.threshold)?.text ||
    STAGES[0].text;

  return (
    <div className="relative min-h-screen bg-[#F6F1E4] flex items-center justify-center px-4 overflow-hidden selection:bg-[#F2C84B]/30">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#F2C84B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#2A2118]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Card Container */}
      <div className="relative w-full max-w-md bg-white/60 backdrop-blur-xl border border-[#2A2118]/5 shadow-[0_20px_50px_rgba(42,33,24,0.06)] rounded-3xl p-8 sm:p-10 text-center">
        
        {/* Animated Brand Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center">
            {/* Pulsing breathing aura */}
            <div className="absolute w-24 h-24 rounded-3xl bg-[#F2C84B]/35 blur-xl animate-pulse" />
            
            {/* Rotating gradient accent ring */}
            <div className="absolute w-24 h-24 rounded-[28px] border-2 border-dashed border-[#F2C84B]/60 animate-[spin_10s_linear_infinite]" />

            {/* Inner Brand Badge */}
            <div className="relative w-20 h-20 rounded-2xl bg-linear-to-br from-[#F5D166] to-[#E3B734] shadow-lg shadow-[#F2C84B]/40 flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
              <span className="text-3xl font-black text-[#2A2118] tracking-tight">
                S
              </span>
              {/* Corner specular dot */}
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        {/* Brand Information */}
        <div className="space-y-1.5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A2118]/5 border border-[#2A2118]/10 text-[11px] font-medium text-[#675C4F] tracking-wide mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2C84B] animate-ping" />
            Smart Talent Matching
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2A2118] tracking-tight">
            SmartHire
          </h1>
          <p className="text-sm text-[#7D7364] max-w-xs mx-auto leading-relaxed">
            Connecting students with the right opportunities
          </p>
        </div>

        {/* Progress & Live Step Status */}
        <div className="w-full space-y-3">
          {/* Active Step Indicator */}
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-semibold text-[#5B5043] tracking-wide transition-all duration-300">
              {currentStage}
            </p>
          </div>

          {/* Progress Bar with Shimmer */}
          <div className="relative w-full h-2.5 bg-[#2A2118]/8 rounded-full p-0.5 overflow-hidden">
            <div
              className="relative h-full bg-linear-to-r from-[#F2C84B] via-[#F7D878] to-[#F2C84B] rounded-full transition-all duration-200 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            >
              {/* Sweep light highlight */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
          </div>

          {/* Metric Bar */}
          <div className="flex justify-between items-center text-[11px] font-medium text-[#9B9081] px-1">
            <span>Progress</span>
            <span className="tabular-nums font-semibold text-[#2A2118]">
              {progress}%
            </span>
          </div>
        </div>

        {/* Trust / Bottom Note */}
        <div className="mt-8 pt-6 border-t border-[#2A2118]/5 flex items-center justify-center gap-2 text-[#9B9081] text-xs">
          <svg
            className="w-4 h-4 text-[#F2C84B] shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Verified recruitment partners</span>
        </div>

      </div>
    </div>
  );
}