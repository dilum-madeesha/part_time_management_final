import { BriefcaseBusiness, CalendarDays, CheckCircle2, GraduationCap, User } from "lucide-react";
import { ProfileSection } from "../../components/Shared";

export default function Profile() {
  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">Account</p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">My Profile</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Manage your student information and employment profile.
        </p>

        <div className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F2C84B] text-2xl font-bold">
              D
            </div>

            <div>
              <h3 className="text-xl font-bold">Dilum Madeesha</h3>
              <p className="mt-1 text-sm text-[#6F665A]">Software Engineering Student</p>
              <p className="mt-1 text-xs text-[#8A7C68]">University Student</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProfileSection
            icon={<User />}
            title="Personal Information"
            items={[
              "Full Name: Dilum Madeesha",
              "Email: student@example.com",
              "Phone: +94 XX XXX XXXX",
              "City: Negombo",
            ]}
          />

          <ProfileSection
            icon={<GraduationCap />}
            title="University Information"
            items={[
              "University: University Student",
              "Student ID: Student ID",
              "Degree Program: Software Engineering",
              "Expected Graduation: 2027",
            ]}
          />

          <ProfileSection
            icon={<BriefcaseBusiness />}
            title="Skills & Experience"
            items={[
              "Technical Skills: React, TypeScript, Node.js",
              "Soft Skills: Communication, Teamwork",
              "Previous Experience: Part-time / Project Work",
            ]}
          />

          <ProfileSection
            icon={<CalendarDays />}
            title="Availability"
            items={[
              "Available Days: Weekdays & Weekends",
              "Available Time: 4:00 PM - 9:00 PM",
              "Preferred Job Type: Part-time",
            ]}
          />
        </div>

        <div className="mt-5 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF6ED] text-[#287A3D]">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <h3 className="font-bold">Account Status</h3>
              <p className="text-sm text-[#287A3D]">Active and verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
