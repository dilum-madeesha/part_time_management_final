
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  type EmployerData,
  createEmptyEmployerData,
  calculateEmployerCompleteness,
  serializeEmployerForAPI,
} from "./information";

// ============================================================================
// OWNER (EMPLOYER) ONBOARDING — SINGLE STEP
// Compact centered card layout
// ============================================================================

type OwnerProps = {
  initialData?: EmployerData;
  onBack?: () => void;
  onComplete?: (payload: ReturnType<typeof serializeEmployerForAPI>) => void;
};

const inputClass =
  "w-full rounded-xl bg-white px-3.5 py-3 text-sm text-[#2A2118] outline-none border border-[#2A2118]/10 focus:border-[#F2C84B] focus:ring-2 focus:ring-[#F2C84B]/30 transition-all";

const labelClass =
  "block text-xs font-semibold text-[#5F5548] mb-1.5";

export default function Owner({
  initialData,
  onBack,
  onComplete,
}: OwnerProps) {
  const navigate = useNavigate();

  const [employerData, setEmployerData] = useState<EmployerData>(
    initialData ?? createEmptyEmployerData()
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const completeness = useMemo(
    () => calculateEmployerCompleteness(employerData),
    [employerData]
  );

  const handleField = <Key extends keyof EmployerData>(
    field: Key,
    value: EmployerData[Key]
  ) => {
    setEmployerData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !employerData.fullName.trim() ||
      !employerData.email.trim() ||
      !employerData.phone.trim() ||
      !employerData.businessName.trim()
    ) {
      setFormError(
        "Please fill in your name, email, phone and business name to continue."
      );
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    const payload = serializeEmployerForAPI(employerData);

    console.log(
      "[SmartHire Engine] Employer profile submitted:",
      payload
    );

    setTimeout(() => {
      setIsSubmitting(false);

      if (onComplete) {
        onComplete(payload);
      } else {
        navigate("/dashboard");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F6F1E4] flex items-center justify-center px-4 py-8">

      {/* ============================================================
          CENTERED CARD
      ============================================================ */}

      <div className="w-full max-w-3xl">

        <div className="bg-white rounded-3xl border-2 border-[#2A2118]/15 shadow-md p-5 md:p-7">

          {/* ========================================================
              HEADER
          ======================================================== */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#2A2118]/10">

            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#2A2118]">
                Employer Information
              </h2>

              <p className="text-xs text-[#8A8072] mt-1">
                Company identity and recruitment contact details
              </p>
            </div>

            {/* Profile Readiness */}

            <div className="w-full sm:w-36 shrink-0">

              <div className="flex justify-between items-center text-[10px] font-semibold text-[#5F5548] mb-1">
                <span>Profile</span>

                <span className="font-bold text-[#2A2118]">
                  {completeness}%
                </span>
              </div>

              <div className="w-full bg-[#F6F1E4] h-1.5 rounded-full overflow-hidden">

                <div
                  className="bg-[#F2C84B] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${completeness}%`,
                  }}
                />

              </div>

            </div>
          </div>

          {/* ========================================================
              ERROR MESSAGE
          ======================================================== */}

          {formError && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {formError}
            </div>
          )}

          {/* ========================================================
              FORM
          ======================================================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

            {/* Contact Person Name */}

            <div>
              <label className={labelClass}>
                Contact Person Name
              </label>

              <input
                type="text"
                value={employerData.fullName}
                onChange={(e) =>
                  handleField("fullName", e.target.value)
                }
                placeholder="e.g. John Doe"
                className={inputClass}
              />
            </div>

            {/* Business Email */}

            <div>
              <label className={labelClass}>
                Business Email
              </label>

              <input
                type="email"
                value={employerData.email}
                onChange={(e) =>
                  handleField("email", e.target.value)
                }
                placeholder="contact@company.com"
                className={inputClass}
              />
            </div>

            {/* Contact Phone */}

            <div>
              <label className={labelClass}>
                Contact Phone
              </label>

              <input
                type="tel"
                value={employerData.phone}
                onChange={(e) =>
                  handleField("phone", e.target.value)
                }
                placeholder="07X XXX XXXX"
                className={inputClass}
              />
            </div>

            {/* City */}

            <div>
              <label className={labelClass}>
                City
              </label>

              <input
                type="text"
                value={employerData.city}
                onChange={(e) =>
                  handleField("city", e.target.value)
                }
                placeholder="Colombo"
                className={inputClass}
              />
            </div>

            {/* Business Name */}

            <div>
              <label className={labelClass}>
                Business Name
              </label>

              <input
                type="text"
                value={employerData.businessName}
                onChange={(e) =>
                  handleField("businessName", e.target.value)
                }
                placeholder="Café Kumbuk / TechServe Ltd"
                className={inputClass}
              />
            </div>

            {/* Business Type */}

            <div>
              <label className={labelClass}>
                Business Type
              </label>

              <input
                type="text"
                value={employerData.businessType}
                onChange={(e) =>
                  handleField("businessType", e.target.value)
                }
                placeholder="Café, Retail, IT Services..."
                className={inputClass}
              />
            </div>

            {/* Business Address */}

            <div>
              <label className={labelClass}>
                Business Location / Address
              </label>

              <input
                type="text"
                value={employerData.businessAddress}
                onChange={(e) =>
                  handleField("businessAddress", e.target.value)
                }
                placeholder="Horton Place, Colombo 07"
                className={inputClass}
              />
            </div>

            {/* Website */}

            <div>
              <label className={labelClass}>
                Website{" "}
                <span className="font-normal text-[10px] text-[#8A8072]">
                  (optional)
                </span>
              </label>

              <input
                type="url"
                value={employerData.website}
                onChange={(e) =>
                  handleField("website", e.target.value)
                }
                placeholder="https://yourbusiness.com"
                className={inputClass}
              />
            </div>

          </div>

          {/* ========================================================
              NAVIGATION
          ======================================================== */}

          <div className="flex items-center gap-2 mt-6 pt-5 border-t border-[#2A2118]/10">

            <button
              type="button"
              onClick={() =>
                onBack
                  ? onBack()
                  : navigate("/information")
              }
              className="px-5 py-3 rounded-xl font-bold text-xs text-[#5F5548] bg-[#F6F1E4] hover:bg-[#EDE5D3] transition-colors"
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-[#F2C84B] hover:bg-[#EAB92E] text-[#2A2118] py-3 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
            >
              {isSubmitting
                ? "Syncing..."
                : "Complete Profile"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
