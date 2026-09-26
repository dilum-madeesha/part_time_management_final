// ============================================================================
// SHARED TYPES, CONSTANTS & BUSINESS LOGIC
// Used by: Information.tsx, Employee.tsx, Owner.tsx
// ============================================================================

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const TIME_SLOTS = ["Morning", "Afternoon", "Evening"];
export const COMMON_SKILLS = [
  "React",
  "Node.js",
  "Python",
  "Customer Service",
  "Data Entry",
  "Graphic Design",
  "Barista",
  "Sales"
];

export type Role = "employee" | "employer";

export type Availability = {
  day: string;
  slots: string[];
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
};

export type StudentData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  universityName: string;
  studentId: string;
  degreeProgram: string;
  expectedGraduation: string;
  skills: string[];
  hasExperience: boolean;
  experienceLevel: string;
  experienceHistory: Experience[];
  weeklyAvailability: Availability[];
  minExpectedRate: number;
};

export type EmployerData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  businessName: string;
  businessType: string;
  businessAddress: string;
  website: string;
};

// ============================================================================
// DEFAULT / EMPTY STATE FACTORIES
// ============================================================================
export const createEmptyStudentData = (): StudentData => ({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  universityName: "",
  studentId: "",
  degreeProgram: "",
  expectedGraduation: "",
  skills: [],
  hasExperience: true,
  experienceLevel: "Entry",
  experienceHistory: [],
  weeklyAvailability: [],
  minExpectedRate: 0
});

export const createEmptyEmployerData = (): EmployerData => ({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  businessName: "",
  businessType: "",
  businessAddress: "",
  website: ""
});

// ============================================================================
// BUSINESS LOGIC
// ============================================================================
export const calculateProfileCompleteness = (data: StudentData): number => {
  let score = 0;
  if (data.fullName?.trim() && data.email?.trim() && data.phone?.trim()) score += 25;
  if (data.universityName?.trim() && data.studentId?.trim()) score += 25;
  if (data.skills && data.skills.length >= 3) score += 25;
  if (data.weeklyAvailability && data.weeklyAvailability.length > 0) score += 25;
  return Math.min(score, 100);
};

export const calculateEmployerCompleteness = (data: EmployerData): number => {
  let score = 0;
  if (data.fullName?.trim() && data.email?.trim() && data.phone?.trim()) score += 34;
  if (data.businessName?.trim() && data.businessType?.trim()) score += 33;
  if (data.businessAddress?.trim()) score += 33;
  return Math.min(score, 100);
};

export const toggleAvailabilitySlot = (
  availabilityList: Availability[],
  day: string,
  slot: string
): Availability[] => {
  const existingDay = availabilityList.find((item) => item.day === day);

  if (!existingDay) {
    return [...availabilityList, { day, slots: [slot] }];
  }

  const hasSlot = existingDay.slots.includes(slot);
  const updatedSlots = hasSlot
    ? existingDay.slots.filter((s) => s !== slot)
    : [...existingDay.slots, slot];

  if (updatedSlots.length === 0) {
    return availabilityList.filter((item) => item.day !== day);
  }

  return availabilityList.map((item) =>
    item.day === day ? { ...item, slots: updatedSlots } : item
  );
};

export const toggleSkillItem = (currentSkills: string[], skill: string): string[] => {
  return currentSkills.includes(skill)
    ? currentSkills.filter((item) => item !== skill)
    : [...currentSkills, skill];
};

export const serializeStudentForAPI = (data: StudentData) => ({
  accountType: "employee" as const,
  profile: {
    ...data,
    completenessScore: calculateProfileCompleteness(data),
    updatedAt: new Date().toISOString()
  }
});

export const serializeEmployerForAPI = (data: EmployerData) => ({
  accountType: "employer" as const,
  profile: {
    ...data,
    completenessScore: calculateEmployerCompleteness(data),
    updatedAt: new Date().toISOString()
  }
});