import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Application, Job } from "./types";
import { jobs } from "./data";
import { EmptyState, JobCard } from "../../components/Shared";

export default function EmployeeJobs({
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
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [category, setCategory] = useState("All Categories");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchText = search.toLowerCase();

      const searchMatch =
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.location.toLowerCase().includes(searchText) ||
        job.skills.some((skill: string) => skill.toLowerCase().includes(searchText));

      const locationMatch = location === "All Locations" || job.location === location;

      const categoryMatch = category === "All Categories" || job.category === category;

      return searchMatch && locationMatch && categoryMatch;
    });
  }, [search, location, category]);

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
          Opportunities
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Available Jobs</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Find flexible part-time opportunities that match your skills and availability.
        </p>

        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_190px_190px_auto]">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7C68]" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs, skills or companies..."
                className="h-12 w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] pl-11 pr-4 text-sm outline-none focus:border-[#F2C84B]"
              />
            </div>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 text-sm outline-none focus:border-[#F2C84B]"
            >
              <option>All Locations</option>
              <option>Colombo</option>
              <option>Negombo</option>
              <option>Gampaha</option>
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 text-sm outline-none focus:border-[#F2C84B]"
            >
              <option>All Categories</option>
              <option>Events</option>
              <option>Retail</option>
              <option>Office</option>
              <option>Marketing</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setLocation("All Locations");
                setCategory("All Categories");
              }}
              className="h-12 rounded-xl bg-[#2A2118] px-6 text-sm font-semibold text-white"
            >
              Reset
            </button>
          </div>
        </section>

        <div className="mb-4 mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">For You</p>

          <h3 className="mt-1 text-xl font-bold">Recommended Jobs</h3>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            {filteredJobs.map((job) => (
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
            icon={<Search />}
            title="No jobs found"
            description="Try another search term or change your filters."
          />
        )}
      </div>
    </div>
  );
}
