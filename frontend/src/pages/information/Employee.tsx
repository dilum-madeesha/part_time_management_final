import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DAYS,
  TIME_SLOTS,
  COMMON_SKILLS,
  type StudentData,
  type Experience,
  createEmptyStudentData,
  calculateProfileCompleteness,
  toggleAvailabilitySlot,
  toggleSkillItem,
  serializeStudentForAPI
} from "./information";

// ============================================================================
// EMPLOYEE (STUDENT) ONBOARDING — 2 STEPS
// Step 1: Personal & Academic Details
// Step 2: Skills, Experience & Availability
// ============================================================================

type EmployeeProps = {
  initialData?: StudentData;
  onBack?: () => void;
  onComplete?: (payload: ReturnType<typeof serializeStudentForAPI>) => void;
};

const inputClass =
  "w-full rounded-2xl bg-white px-4 py-3.5 text-[#2A2118] outline-none border border-[#2A2118]/10 focus:ring-2 focus:ring-[#F2C84B]/50 transition-shadow";
const labelClass = "block text-sm font-semibold text-[#5F5548] mb-2";

export default function Employee({ initialData, onBack, onComplete }: EmployeeProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [studentData, setStudentData] = useState<StudentData>(initialData ?? createEmptyStudentData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepError, setStepError] = useState("");

  // New-experience mini form (Step 2)
  const [draftExperience, setDraftExperience] = useState<Experience>({ title: "", company: "", duration: "" });

  const completeness = useMemo(() => calculateProfileCompleteness(studentData), [studentData]);

  const handleField = <Key extends keyof StudentData>(field: Key, value: StudentData[Key]) => {
    setStudentData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSlotToggle = (day: string, slot: string) => {
    setStudentData((prev) => ({
      ...prev,
      weeklyAvailability: toggleAvailabilitySlot(prev.weeklyAvailability, day, slot)
    }));
  };

  const handleSkillToggle = (skill: string) => {
    setStudentData((prev) => ({ ...prev, skills: toggleSkillItem(prev.skills, skill) }));
  };

  const handleAddExperience = () => {
    if (!draftExperience.title.trim() || !draftExperience.company.trim()) return;
    setStudentData((prev) => ({
      ...prev,
      experienceHistory: [...prev.experienceHistory, draftExperience]
    }));
    setDraftExperience({ title: "", company: "", duration: "" });
  };

  const handleRemoveExperience = (idx: number) => {
    setStudentData((prev) => ({
      ...prev,
      experienceHistory: prev.experienceHistory.filter((_, i) => i !== idx)
    }));
  };

  const validateStepOne = (): boolean => {
    if (
      !studentData.fullName.trim() ||
      !studentData.email.trim() ||
      !studentData.phone.trim() ||
      !studentData.universityName.trim() ||
      !studentData.studentId.trim()
    ) {
      setStepError("Please fill in your name, email, phone, university and student ID to continue.");
      return false;
    }
    setStepError("");
    return true;
  };

  const handleNext = () => {
    if (step === 1 && !validateStepOne()) return;
    setStep(2);
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
      return;
    }
    if (onBack) {
      onBack();
    } else {
      navigate("/information");
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const payload = serializeStudentForAPI(studentData);
    console.log("[SmartHire Engine] Employee profile submitted:", payload);

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

    {/* Small Center Card */}
    <div className="w-full max-w-3xl">

      <div className="bg-white rounded-3xl border-2 border-[#2A2118]/15 shadow-md p-5 md:p-7">

        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#2A2118]/10">

          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#2A2118]">
              Student Information
            </h2>

            <p className="text-xs text-[#8A8072] mt-1">
              {step === 1
                ? "Step 1 of 2 — Personal & academic details"
                : "Step 2 of 2 — Skills, experience & availability"}
            </p>
          </div>

          {/* Small Progress */}
          <div className="w-36 shrink-0">
            <div className="flex justify-between text-[10px] font-semibold text-[#5F5548] mb-1">
              <span>Profile</span>
              <span>{completeness}%</span>
            </div>

            <div className="h-1.5 bg-[#F6F1E4] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F2C84B] rounded-full transition-all"
                style={{ width: `${completeness}%` }}
              />
            </div>
          </div>

        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-6">

          <div
            className={`flex items-center gap-2 text-xs font-semibold ${
              step === 1
                ? "text-[#2A2118]"
                : "text-[#8A8072]"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 1
                  ? "bg-[#2A2118] text-white"
                  : "bg-[#F2C84B] text-[#2A2118]"
              }`}
            >
              {step > 1 ? "✓" : "1"}
            </div>

            <span className="hidden sm:block">
              Personal & Academic
            </span>
          </div>

          <div className="w-12 h-px bg-[#2A2118]/15" />

          <div
            className={`flex items-center gap-2 text-xs font-semibold ${
              step === 2
                ? "text-[#2A2118]"
                : "text-[#8A8072]"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 2
                  ? "bg-[#2A2118] text-white"
                  : "bg-[#F6F1E4] text-[#8A8072]"
              }`}
            >
              2
            </div>

            <span className="hidden sm:block">
              Skills & Availability
            </span>
          </div>

        </div>

        {/* Error */}
        {stepError && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
            {stepError}
          </div>
        )}

        {/* ==============================
            STEP 1
        =============================== */}

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

            <div>
              <label className={labelClass}>
                Full Name
              </label>

              <input
                type="text"
                value={studentData.fullName}
                onChange={(e) =>
                  handleField("fullName", e.target.value)
                }
                placeholder="Enter your full legal name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                University Email
              </label>

              <input
                type="email"
                value={studentData.email}
                onChange={(e) =>
                  handleField("email", e.target.value)
                }
                placeholder="student@uni.ac.lk"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Phone Number
              </label>

              <input
                type="tel"
                value={studentData.phone}
                onChange={(e) =>
                  handleField("phone", e.target.value)
                }
                placeholder="07X XXX XXXX"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Current Location
              </label>

              <input
                type="text"
                value={studentData.city}
                onChange={(e) =>
                  handleField("city", e.target.value)
                }
                placeholder="Colombo, Sri Lanka"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                University
              </label>

              <input
                type="text"
                value={studentData.universityName}
                onChange={(e) =>
                  handleField("universityName", e.target.value)
                }
                placeholder="University name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Student ID
              </label>

              <input
                type="text"
                value={studentData.studentId}
                onChange={(e) =>
                  handleField("studentId", e.target.value)
                }
                placeholder="UVT-2023-CS-092"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Degree Program
              </label>

              <input
                type="text"
                value={studentData.degreeProgram}
                onChange={(e) =>
                  handleField("degreeProgram", e.target.value)
                }
                placeholder="B.Tech in Software Technology"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Expected Graduation Year
              </label>

              <input
                type="text"
                value={studentData.expectedGraduation}
                onChange={(e) =>
                  handleField("expectedGraduation", e.target.value)
                }
                placeholder="2026"
                className={inputClass}
              />
            </div>

          </div>
        )}

        {/* ==============================
            STEP 2
        =============================== */}

        {step === 2 && (
          <div className="space-y-5">

            {/* Skills */}
            <div>
              <label className={labelClass}>
                Select Your Skills
              </label>

              <div className="flex flex-wrap gap-2 p-3 bg-[#FAF8F2] rounded-2xl border border-[#2A2118]/10">

                {COMMON_SKILLS.map((skill) => {
                  const selected =
                    studentData.skills.includes(skill);

                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition ${
                        selected
                          ? "bg-[#F2C84B] text-[#2A2118]"
                          : "bg-white border border-[#2A2118]/10 text-[#5F5548] hover:bg-[#F2C84B]/20"
                      }`}
                    >
                      {skill} {selected ? "✓" : "+"}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Experience */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <label className={labelClass + " mb-0"}>
                  Prior Work Experience
                </label>

                <label className="text-[11px] text-[#5F5548] flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!studentData.hasExperience}
                    onChange={(e) =>
                      handleField(
                        "hasExperience",
                        !e.target.checked
                      )
                    }
                    className="h-4 w-4 accent-[#F2C84B]"
                  />

                  No previous experience
                </label>

              </div>

              {studentData.hasExperience && (
                <div className="space-y-2">

                  {studentData.experienceHistory.map(
                    (exp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-[#FAF8F2] border border-[#2A2118]/10 rounded-xl"
                      >
                        <div>
                          <p className="text-xs font-bold text-[#2A2118]">
                            {exp.title}
                          </p>

                          <p className="text-[10px] text-[#8A8072]">
                            {exp.company}
                            {exp.duration
                              ? ` • ${exp.duration}`
                              : ""}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveExperience(idx)
                          }
                          className="text-[10px] font-semibold text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    )
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 border border-dashed border-[#2A2118]/15 rounded-xl">

                    <input
                      type="text"
                      value={draftExperience.title}
                      onChange={(e) =>
                        setDraftExperience((prev) => ({
                          ...prev,
                          title: e.target.value
                        }))
                      }
                      placeholder="Job title"
                      className="rounded-lg bg-[#F6F1E4] px-3 py-2 text-xs outline-none"
                    />

                    <input
                      type="text"
                      value={draftExperience.company}
                      onChange={(e) =>
                        setDraftExperience((prev) => ({
                          ...prev,
                          company: e.target.value
                        }))
                      }
                      placeholder="Company"
                      className="rounded-lg bg-[#F6F1E4] px-3 py-2 text-xs outline-none"
                    />

                    <div className="flex gap-2">

                      <input
                        type="text"
                        value={draftExperience.duration}
                        onChange={(e) =>
                          setDraftExperience((prev) => ({
                            ...prev,
                            duration: e.target.value
                          }))
                        }
                        placeholder="Duration"
                        className="flex-1 rounded-lg bg-[#F6F1E4] px-3 py-2 text-xs outline-none"
                      />

                      <button
                        type="button"
                        onClick={handleAddExperience}
                        className="px-3 rounded-lg bg-[#2A2118] text-white text-[10px] font-bold"
                      >
                        Add
                      </button>

                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Availability */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <div>
                  <label className={labelClass + " mb-0"}>
                    Weekly Availability
                  </label>

                  <p className="text-[10px] text-[#8A8072]">
                    Select the times you are available to work.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#8A8072]">
                    Target Pay
                  </span>

                  <input
                    type="number"
                    min={0}
                    value={studentData.minExpectedRate || ""}
                    onChange={(e) =>
                      handleField(
                        "minExpectedRate",
                        Number(e.target.value)
                      )
                    }
                    placeholder="1500"
                    className="w-20 rounded-lg bg-white px-2 py-2 text-xs border border-[#2A2118]/10 outline-none"
                  />
                </div>

              </div>

              <div className="bg-[#FAF8F2] rounded-xl border border-[#2A2118]/10 overflow-hidden">

                {DAYS.map((day) => {

                  const dayConfig =
                    studentData.weeklyAvailability.find(
                      (d) => d.day === day
                    );

                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between px-3 py-2.5 border-b border-[#2A2118]/5 last:border-b-0"
                    >

                      <span className="text-[11px] font-bold text-[#2A2118] w-20">
                        {day}
                      </span>

                      <div className="flex gap-1.5">

                        {TIME_SLOTS.map((slot) => {

                          const active =
                            dayConfig?.slots.includes(slot);

                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() =>
                                handleSlotToggle(day, slot)
                              }
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                                active
                                  ? "bg-[#2A2118] text-white"
                                  : "bg-white border border-[#2A2118]/10 text-[#5F5548]"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center gap-2 mt-6 pt-5 border-t border-[#2A2118]/10">

          <button
            type="button"
            onClick={handleBackStep}
            className="px-5 py-3 rounded-xl bg-[#F6F1E4] text-[#5F5548] text-xs font-bold hover:bg-[#EDE5D3]"
          >
            Back
          </button>

          {step === 1 ? (

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-[#F2C84B] hover:bg-[#EAB92E] text-[#2A2118] py-3 rounded-xl text-xs font-bold"
            >
              Continue to Step 2
            </button>

          ) : (

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-[#F2C84B] hover:bg-[#EAB92E] text-[#2A2118] py-3 rounded-xl text-xs font-bold disabled:opacity-50"
            >
              {isSubmitting
                ? "Syncing..."
                : "Complete Profile"}
            </button>

          )}

        </div>

      </div>
    </div>
  </div>
);
}