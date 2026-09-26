import { useState } from "react";
import { CalendarDays, CheckCircle2, Wallet, XCircle } from "lucide-react";
import type { WorkStatus } from "./types";
import { workHistory } from "./data";
import { HistoryCard, HistoryStat } from "../../components/Shared";

export default function JobHistory() {
  const [filter, setFilter] = useState<"All" | WorkStatus>("All");

  const completed = workHistory.filter((job) => job.status === "Completed");
  const missed = workHistory.filter((job) => job.status === "Missed");
  const upcoming = workHistory.filter((job) => job.status === "Upcoming");

  const earnings = completed.reduce((sum, job) => sum + job.payment, 0);

  const filtered =
    filter === "All" ? workHistory : workHistory.filter((job) => job.status === filter);

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
          Work Records
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Job History</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Review your completed, missed, cancelled and upcoming work.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <HistoryStat title="Completed" value={completed.length} icon={<CheckCircle2 />} />

          <HistoryStat title="Missed" value={missed.length} icon={<XCircle />} />

          <HistoryStat title="Upcoming" value={upcoming.length} icon={<CalendarDays />} />

          <HistoryStat
            title="Earnings"
            value={`Rs. ${earnings.toLocaleString()}`}
            icon={<Wallet />}
          />
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {["All", "Completed", "Missed", "Cancelled", "Upcoming"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as "All" | WorkStatus)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${
                filter === item ? "bg-[#2A2118] text-white" : "border border-[#2A2118]/10 bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {filtered.map((job) => (
            <HistoryCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
