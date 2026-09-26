import { Heart } from "lucide-react";
import type { Application, Job } from "./types";
import { jobs } from "./data";
import { EmptyState, JobCard } from "../../components/Shared";

export default function SaveJob({
  savedJobs,
  applications,
  onSave,
  onView,
  onApply,
}: {
  savedJobs: string[];
  applications: Application[];
  onSave: (id: string) => void;
  onView: (job: Job) => void;
  onApply: (job: Job) => void;
}) {
  const savedJobList = jobs.filter((job) => savedJobs.includes(job.id));

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
          Favorites
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Saved Jobs</h2>

        <p className="mt-2 text-sm text-[#6F665A]">Jobs you saved to review later.</p>

        {savedJobList.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
            {savedJobList.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                saved={savedJobs.includes(job.id)}
                applied={applications.some((application) => application.jobId === job.id)}
                onSave={() => onSave(job.id)}
                onView={() => onView(job)}
                onApply={() => onApply(job)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Heart />}
            title="No saved jobs"
            description="Save interesting jobs and find them here later."
          />
        )}
      </div>
    </div>
  );
}
