import { BriefcaseBusiness } from "lucide-react";
import type { Application } from "./types";
import { ApplicationBadge, EmptyState, MiniStat } from "../../components/Shared";

export default function EmployeeApplication({
  applications,
}: {
  applications: Application[];
}) {
  const pending = applications.filter((item) => item.status === "Pending");
  const accepted = applications.filter((item) => item.status === "Accepted");
  const rejected = applications.filter((item) => item.status === "Rejected");
  const cancelled = applications.filter((item) => item.status === "Cancelled");

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
          Applications
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">My Applications</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Track the progress of every job you have applied for.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MiniStat title="Pending" value={pending.length} color="yellow" />
          <MiniStat title="Accepted" value={accepted.length} color="green" />
          <MiniStat title="Rejected" value={rejected.length} color="red" />
          <MiniStat title="Cancelled" value={cancelled.length} color="gray" />
        </div>

        <div className="mt-6 space-y-3">
          {applications.map((application) => (
            <div
              key={application.id}
              className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1E4] font-bold text-[#806400]">
                  {application.company.charAt(0)}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">{application.jobTitle}</h3>
                  <p className="text-sm text-[#6F665A]">{application.company}</p>
                  <p className="mt-2 text-xs text-[#8A7C68]">
                    Applied: {application.appliedDate}
                  </p>
                </div>

                <ApplicationBadge status={application.status} />
              </div>
            </div>
          ))}
        </div>

        {applications.length === 0 && (
          <EmptyState
            icon={<BriefcaseBusiness />}
            title="No applications yet"
            description="Apply for a job and your application status will appear here."
          />
        )}
      </div>
    </div>
  );
}
