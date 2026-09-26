import { Link } from "react-router-dom";

// ============================================================================
// INFORMATION — ACCOUNT TYPE SELECTION ONLY
// Responsible solely for choosing "employee" vs "employer" and then
// handing off to the matching form component. No field-level data lives here.
// ============================================================================

export default function Information() {
  return (
    <div className="min-h-screen bg-[#F6F1E4] px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-5 py-2 rounded-full border border-[#3B2A20]/15 text-[#3B2A20] font-semibold text-sm bg-white/40">
            SmartHire
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#2A2118] mt-6">
            Complete Your Information
          </h1>

          <p className="text-[#8A8072] mt-2">
            Tell us a little about yourself to personalize your SmartHire experience.
          </p>
        </div>

        {/* Role Selection */}
        <div className="bg-white/70 rounded-3xl p-6 shadow-sm border border-[#2A2118]/5 mb-6">
          <h2 className="text-lg font-bold text-[#2A2118] mb-4">Select your account type</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/dashboard"
              className="group rounded-2xl border-2 border-transparent bg-white p-5 text-left transition-all hover:border-[#F2C84B]/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C84B]"
            >
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-bold text-[#2A2118]">Employee / Student</h3>
              <p className="text-sm text-[#8A8072] mt-1">Find part-time jobs and work opportunities.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#806400] transition-transform group-hover:translate-x-1">
                Open employee dashboard <span aria-hidden="true" className="ml-2">→</span>
              </span>
            </Link>

            <Link
              to="/post-job"
              className="group rounded-2xl border-2 border-transparent bg-white p-5 text-left transition-all hover:border-[#F2C84B]/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C84B]"
            >
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-bold text-[#2A2118]">Employer / Job Owner</h3>
              <p className="text-sm text-[#8A8072] mt-1">Post jobs and find suitable students.</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#806400] transition-transform group-hover:translate-x-1">
                Open job posting <span aria-hidden="true" className="ml-2">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}