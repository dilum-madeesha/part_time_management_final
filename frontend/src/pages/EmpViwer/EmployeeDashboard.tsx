import type { ReactNode } from "react";
import {
  AlertCircle,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  History,
  Star,
  TrendingUp,
  User,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import type { Application, Page } from "./types";
import { workHistory } from "./data";
import {
  DashboardStat,
  PerformanceCard,
  QuickAction,
  UpcomingJobCard,
  WorkTableRow,
} from "../../components/Shared";

export default function EmployeeDashboard({
  applications,
  onNavigate,
}: {
  applications: Application[];
  onNavigate: (page: Page) => void;
}) {
  const completedJobs = workHistory.filter((job) => job.status === "Completed");
  const missedJobs = workHistory.filter((job) => job.status === "Missed");
  const upcomingJobs = workHistory.filter((job) => job.status === "Upcoming");

  const totalEarnings = completedJobs.reduce((sum, job) => sum + job.payment, 0);

  const ratedJobs = completedJobs.filter((job) => typeof job.rating === "number");

  const averageRating =
    ratedJobs.length > 0
      ? (ratedJobs.reduce((sum, job) => sum + (job.rating || 0), 0) / ratedJobs.length).toFixed(1)
      : "0.0";

  const scheduledJobs = workHistory.filter((job) => job.status !== "Cancelled");

  const completion =
    scheduledJobs.length > 0
      ? Math.round((completedJobs.length / scheduledJobs.length) * 100)
      : 0;

  const reliability =
    completedJobs.length + missedJobs.length > 0
      ? Math.round(
          (completedJobs.length / (completedJobs.length + missedJobs.length)) * 100
        )
      : 0;

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-[#8A7C68]">Good afternoon 👋</p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Welcome back, Dilum</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Here is your part-time work and payment overview.
        </p>

        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardStat
            title="Jobs Completed"
            value={completedJobs.length.toString()}
            description="Successfully completed"
            icon={<CheckCircle2 />}
            iconClass="bg-[#EAF6ED] text-[#287A3D]"
          />

          <DashboardStat
            title="Jobs Missed"
            value={missedJobs.length.toString()}
            description="Attendance missed"
            icon={<XCircle />}
            iconClass="bg-[#FDECEC] text-[#B33A3A]"
          />

          <DashboardStat
            title="Upcoming Jobs"
            value={upcomingJobs.length.toString()}
            description="Scheduled work"
            icon={<CalendarDays />}
            iconClass="bg-[#FFF6D9] text-[#806400]"
          />

          <DashboardStat
            title="Total Earnings"
            value={`Rs. ${totalEarnings.toLocaleString()}`}
            description="Completed work"
            icon={<Wallet />}
            iconClass="bg-[#EAF2FA] text-[#356A99]"
          />
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <PerformanceCard
            title="Work Completion"
            value={`${completion}%`}
            description="Completed scheduled work"
            icon={<TrendingUp />}
            percentage={completion}
          />

          <PerformanceCard
            title="Employer Rating"
            value={`${averageRating} / 5`}
            description="Average employer rating"
            icon={<Star />}
            percentage={Number(averageRating) * 20}
          />

          <PerformanceCard
            title="Reliability"
            value={`${reliability}%`}
            description="Attendance reliability"
            icon={<Users />}
            percentage={reliability}
          />
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
                  Schedule
                </p>
                <h3 className="mt-1 text-xl font-bold">Upcoming Jobs</h3>
              </div>

              <button
                onClick={() => onNavigate("history")}
                className="flex items-center gap-1 text-sm font-semibold text-[#6E5700]"
              >
                View all
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {upcomingJobs.map((job) => (
                <UpcomingJobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
              Quick Access
            </p>

            <h3 className="mt-1 text-xl font-bold">Manage Your Work</h3>

            <div className="mt-5 space-y-2">
              <QuickAction
                icon={<BriefcaseBusiness />}
                title="Find Jobs"
                description="Explore available opportunities"
                onClick={() => onNavigate("jobs")}
              />

              <QuickAction
                icon={<User />}
                title="My Applications"
                description={`${applications.length} applications`}
                onClick={() => onNavigate("applications")}
              />

              <QuickAction
                icon={<History />}
                title="Job History"
                description="View your work records"
                onClick={() => onNavigate("history")}
              />

              <QuickAction
                icon={<Wallet />}
                title="Payments"
                description="Manage deposits and earnings"
                onClick={() => onNavigate("payments")}
              />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
                Activity
              </p>
              <h3 className="mt-1 text-xl font-bold">Recent Work</h3>
            </div>

            <button
              onClick={() => onNavigate("history")}
              className="text-sm font-semibold text-[#6E5700]"
            >
              View history
            </button>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-175">
              <thead>
                <tr className="border-b border-[#2A2118]/10 text-left">
                  <th className="pb-3 text-xs text-[#7B7165]">JOB</th>
                  <th className="pb-3 text-xs text-[#7B7165]">DATE</th>
                  <th className="pb-3 text-xs text-[#7B7165]">LOCATION</th>
                  <th className="pb-3 text-xs text-[#7B7165]">PAYMENT</th>
                  <th className="pb-3 text-xs text-[#7B7165]">STATUS</th>
                </tr>
              </thead>

              <tbody>
                {workHistory.slice(0, 5).map((job) => (
                  <WorkTableRow key={job.id} job={job} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {missedJobs.length > 0 && (
          <section className="mt-6 rounded-3xl border border-[#E9CACA] bg-[#FFF7F7] p-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDECEC] text-[#B33A3A]">
                <AlertCircle size={20} />
              </div>

              <div>
                <h3 className="font-bold text-[#8D2D2D]">Attendance Notice</h3>

                <p className="mt-1 text-sm leading-6 text-[#7C4C4C]">
                  You have missed {missedJobs.length} accepted job
                  {missedJobs.length > 1 ? "s" : ""}. Please attend accepted jobs on time to
                  maintain a good reliability record.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export function SummaryRow({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F6F1E4] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#806400]">
        {icon}
      </div>

      <div>
        <p className="text-[10px] text-[#7B7165]">{title}</p>
        <p className="mt-1 text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}

export function ProfileSection({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F1E4] text-[#806400]">
          {icon}
        </div>

        <h3 className="font-bold">{title}</h3>
      </div>

      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-[#FAF8F2] px-3 py-2.5 text-xs text-[#62594E]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfoItem({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-[#FAF8F2] p-2.5 text-[10px] text-[#62594E]">
      {icon}
      <span className="truncate">{text}</span>
    </div>
  );
}

export function DetailBox({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[#FAF8F2] p-4">
      <div className="flex items-center gap-2 text-[#806400]">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-wide">
          {title}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-12 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6F1E4] text-[#806400]">
        {icon}
      </div>

      <h3 className="mt-4 font-bold">{title}</h3>

      <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-[#6F665A]">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

export function maskAccountNumber(value: string) {
  const clean = value.replace(/\s/g, "");

  if (clean.length <= 4) {
    return `**** ${clean}`;
  }

  return `**** **** ${clean.slice(-4)}`;
}
