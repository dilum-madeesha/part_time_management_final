import type { ReactNode } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Shirt,
  Star,
  TrendingUp,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type {
  ApplicationStatus,
  Job,
  TransactionStatusValue,
  WorkRecord,
  WorkStatus,
} from "../pages/EmpViwer/types";

/* =========================================================
   NAVIGATION
========================================================= */

export function SidebarItem({
  icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#F2C84B] text-[#2A2118]"
          : "text-[#6F665A] hover:bg-[#F6F1E4]"
      }`}
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>

      {typeof badge === "number" && badge > 0 && (
        <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold">
          {badge}
        </span>
      )}
    </button>
  );
}

export function MobileNav({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 py-2 text-[10px] font-semibold ${
        active ? "text-[#806400]" : "text-[#8A7C68]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* =========================================================
   STAT / SUMMARY CARDS
========================================================= */

export function DashboardStat({
  title,
  value,
  description,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-[#7B7165]">{title}</p>
          <p className="mt-2 text-2xl font-bold">{value}</p>
          <p className="mt-1 text-[11px] text-[#8A7C68]">{description}</p>
        </div>

        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export function FinanceCard({
  title,
  value,
  description,
  icon,
  dark = false,
}: {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm ${
        dark ? "border-[#2A2118] bg-[#2A2118] text-white" : "border-[#2A2118]/10 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-xs ${dark ? "text-white/60" : "text-[#7B7165]"}`}>{title}</p>
          <p className="mt-2 text-2xl font-bold">{value}</p>
          <p className={`mt-1 text-[11px] ${dark ? "text-white/50" : "text-[#8A7C68]"}`}>
            {description}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            dark ? "bg-white/10 text-[#F2C84B]" : "bg-[#F6F1E4] text-[#806400]"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export function PerformanceCard({
  title,
  value,
  description,
  icon,
  percentage,
}: {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  percentage: number;
}) {
  const safePercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F1E4] text-[#806400]">
            {icon}
          </div>

          <div>
            <p className="text-xs text-[#7B7165]">{title}</p>
            <p className="font-bold">{value}</p>
          </div>
        </div>

        <TrendingUp size={17} className="text-[#8A7C68]" />
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#EEE9DE]">
        <div className="h-full rounded-full bg-[#F2C84B]" style={{ width: `${safePercentage}%` }} />
      </div>

      <p className="mt-2 text-[10px] text-[#8A7C68]">{description}</p>
    </div>
  );
}

export function MiniStat({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: "yellow" | "green" | "red" | "gray";
}) {
  const colors = {
    yellow: "bg-[#FFF6D9] text-[#806400]",
    green: "bg-[#EAF6ED] text-[#287A3D]",
    red: "bg-[#FDECEC] text-[#B33A3A]",
    gray: "bg-[#EEEAE2] text-[#6F665A]",
  };

  return (
    <div className="rounded-2xl border border-[#2A2118]/10 bg-white p-4">
      <p className="text-xs text-[#7B7165]">{title}</p>
      <p className={`mt-2 inline-flex rounded-full px-3 py-1 text-lg font-bold ${colors[color]}`}>
        {value}
      </p>
    </div>
  );
}

export function HistoryStat({
  title,
  value,
  icon,
}: {
  title: string;
  value: number | string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#2A2118]/10 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-[#7B7165]">{title}</p>
          <p className="mt-1 text-xl font-bold">{value}</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F1E4] text-[#806400]">
          {icon}
        </div>
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

export function QuickAction({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-[#2A2118]/10 p-3 text-left hover:bg-[#F6F1E4]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6F1E4] text-[#806400]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-[10px] text-[#8A7C68]">{description}</p>
      </div>

      <ChevronRight size={16} className="text-[#8A7C68]" />
    </button>
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
          <div key={item} className="rounded-xl bg-[#FAF8F2] px-3 py-2.5 text-xs text-[#62594E]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfoItem({ icon, text }: { icon: ReactNode; text: string }) {
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
        <span className="text-[10px] font-semibold uppercase tracking-wide">{title}</span>
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

      <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-[#6F665A]">{description}</p>
    </div>
  );
}

/* =========================================================
   WORK / HISTORY
========================================================= */

export function UpcomingJobCard({ job }: { job: WorkRecord }) {
  return (
    <div className="rounded-2xl border border-[#2A2118]/10 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-bold">{job.jobTitle}</h4>
          <p className="text-xs text-[#6F665A]">{job.company}</p>
        </div>

        <span className="rounded-full bg-[#FFF6D9] px-2 py-1 text-[9px] font-bold text-[#806400]">
          UPCOMING
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-[#6F665A] sm:grid-cols-3">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={13} />
          {job.date}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock size={13} />
          {job.time}
        </span>

        <span className="flex items-center gap-1.5">
          <Wallet size={13} />
          Rs. {job.payment.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export function WorkTableRow({ job }: { job: WorkRecord }) {
  return (
    <tr className="border-b border-[#2A2118]/5">
      <td className="py-4">
        <p className="text-sm font-semibold">{job.jobTitle}</p>
        <p className="text-xs text-[#8A7C68]">{job.company}</p>
      </td>

      <td className="py-4 text-xs text-[#6F665A]">{job.date}</td>

      <td className="py-4 text-xs text-[#6F665A]">{job.location}</td>

      <td className="py-4 text-sm font-bold">Rs. {job.payment.toLocaleString()}</td>

      <td className="py-4">
        <WorkStatusBadge status={job.status} />
      </td>
    </tr>
  );
}

export function WorkStatusBadge({ status }: { status: WorkStatus }) {
  const styles: Record<WorkStatus, string> = {
    Completed: "bg-[#EAF6ED] text-[#287A3D]",
    Missed: "bg-[#FDECEC] text-[#B33A3A]",
    Upcoming: "bg-[#FFF6D9] text-[#806400]",
    Cancelled: "bg-[#EEEAE2] text-[#6F665A]",
    Ongoing: "bg-[#EAF2FA] text-[#356A99]",
  };

  return (
    <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${styles[status]}`}>
      {status}
    </span>
  );
}

export function HistoryCard({ job }: { job: WorkRecord }) {
  return (
    <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1E4] font-bold text-[#806400]">
          {job.company.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-bold">{job.jobTitle}</h3>

          <p className="text-sm text-[#6F665A]">{job.company}</p>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8A7C68]">
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {job.location}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={13} />
              {job.date}
            </span>

            <span className="flex items-center gap-1">
              <Clock size={13} />
              {job.time}
            </span>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <p className="text-sm font-bold">Rs. {job.payment.toLocaleString()}</p>

          {job.rating ? (
            <p className="mt-1 flex items-center gap-1 text-xs text-[#806400] lg:justify-end">
              <Star size={13} fill="currentColor" />
              {job.rating}/5
            </p>
          ) : (
            <p className="mt-1 text-xs text-[#8A7C68]">No rating</p>
          )}

          <div className="mt-2">
            <WorkStatusBadge status={job.status} />
          </div>
        </div>
      </div>

      {job.reason && (
        <div className="mt-4 rounded-xl bg-[#FFF7F7] p-3 text-xs text-[#7C4C4C]">
          <strong>Note:</strong> {job.reason}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   APPLICATIONS
========================================================= */

export function ApplicationBadge({ status }: { status: ApplicationStatus }) {
  const styles: Record<ApplicationStatus, string> = {
    Pending: "bg-[#FFF6D9] text-[#806400]",
    Accepted: "bg-[#EAF6ED] text-[#287A3D]",
    Rejected: "bg-[#FDECEC] text-[#B33A3A]",
    Cancelled: "bg-[#EEEAE2] text-[#6F665A]",
  };

  return (
    <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${styles[status]}`}>
      {status}
    </span>
  );
}

/* =========================================================
   TRANSACTIONS (badge only — the rest live in components/Payments.tsx)
========================================================= */

export function TransactionStatusBadge({ status }: { status: TransactionStatusValue }) {
  const styles: Record<TransactionStatusValue, string> = {
    Completed: "bg-[#EAF6ED] text-[#287A3D]",
    Pending: "bg-[#FFF6D9] text-[#806400]",
    Failed: "bg-[#FDECEC] text-[#B33A3A]",
  };

  return (
    <span className={`mt-1 inline-flex rounded-full px-2 py-1 text-[9px] font-bold ${styles[status]}`}>
      {status}
    </span>
  );
}

/* =========================================================
   JOBS
========================================================= */

export function JobCard({
  job,
  saved,
  applied,
  onSave,
  onView,
  onApply,
}: {
  job: Job;
  saved: boolean;
  applied: boolean;
  onSave: () => void;
  onView: () => void;
  onApply: () => void;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      {job.featured && (
        <span className="absolute right-0 top-0 rounded-bl-2xl bg-[#F2C84B] px-3 py-1.5 text-[10px] font-bold uppercase">
          Recommended
        </span>
      )}

      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1E4] font-bold text-[#806400]">
          {job.company.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-[#6F665A]">{job.company}</p>
            </div>

            <button
              onClick={onSave}
              className={`rounded-xl p-2 ${
                saved ? "bg-[#F2C84B]/20 text-[#9A7300]" : "bg-[#F6F1E4] text-[#7B7165]"
              }`}
            >
              <Heart size={18} fill={saved ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-[#6F665A]">
        <MapPin size={14} />
        {job.location}
        <span>•</span>
        {job.category}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <InfoItem icon={<Clock size={14} />} text={job.time} />
        <InfoItem icon={<CalendarDays size={14} />} text={job.duration} />
        <InfoItem icon={<Users size={14} />} text={`${job.vacancies} vacancies`} />
        <InfoItem icon={<Shirt size={14} />} text={job.dressCode} />
      </div>

      <div className="mt-4 rounded-xl bg-[#F6F1E4] p-3">
        <p className="text-[10px] uppercase text-[#7B7165]">Expected Pay</p>
        <p className="mt-1 font-bold text-[#806400]">{job.pay}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#2A2118]/10 px-2.5 py-1 text-[10px] text-[#62594E]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={onView}
          className="flex-1 rounded-xl border border-[#2A2118]/15 py-2.5 text-sm font-semibold"
        >
          View Details
        </button>

        <button
          onClick={onApply}
          disabled={applied}
          className={`flex-1 rounded-xl py-2.5 text-sm font-semibold ${
            applied ? "bg-[#E7E1D5] text-[#766D62]" : "bg-[#2A2118] text-white"
          }`}
        >
          {applied ? "Applied ✓" : "Apply Now"}
        </button>
      </div>
    </article>
  );
}

export function JobDetailsModal({
  job,
  applied,
  saved,
  onSave,
  onClose,
  onApply,
}: {
  job: Job;
  applied: boolean;
  saved: boolean;
  onSave: () => void;
  onClose: () => void;
  onApply: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A2118]/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2A2118]/10 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6F1E4] font-bold text-[#806400]">
              {job.company.charAt(0)}
            </div>

            <div>
              <h2 className="font-bold">{job.title}</h2>
              <p className="text-sm text-[#6F665A]">{job.company}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onSave}
              className={`rounded-xl p-2 ${saved ? "bg-[#F2C84B]/20 text-[#9A7300]" : "bg-[#F6F1E4]"}`}
            >
              <Heart size={18} fill={saved ? "currentColor" : "none"} />
            </button>

            <button onClick={onClose} className="rounded-xl bg-[#F6F1E4] p-2">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-[#62594E]">
            <MapPin size={17} />
            {job.location}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <DetailBox icon={<CalendarDays />} title="Working Date" value={job.date} />
            <DetailBox icon={<Clock />} title="Working Time" value={job.time} />
            <DetailBox icon={<BriefcaseBusiness />} title="Duration" value={job.duration} />
            <DetailBox icon={<Users />} title="Vacancies" value={`${job.vacancies} positions`} />
            <DetailBox icon={<Shirt />} title="Dress Code" value={job.dressCode} />
            <DetailBox icon={<GraduationCap />} title="Category" value={job.category} />
          </div>

          <div className="mt-6">
            <h3 className="font-bold">Job Description</h3>
            <p className="mt-2 text-sm leading-6 text-[#62594E]">{job.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold">Required Skills</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#F6F1E4] px-3 py-1.5 text-xs text-[#806400]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#2A2118] p-4 text-white">
            <p className="text-xs text-white/60">Expected Payment</p>
            <p className="mt-1 text-xl font-bold">{job.pay}</p>
          </div>

          <button
            onClick={onApply}
            disabled={applied}
            className={`mt-5 w-full rounded-xl py-3.5 text-sm font-bold ${
              applied ? "bg-[#E7E1D5] text-[#766D62]" : "bg-[#F2C84B] text-[#2A2118]"
            }`}
          >
            {applied ? "Already Applied" : "Apply for this Job"}
          </button>
        </div>
      </div>
    </div>
  );
}

