import { useState } from "react";
import {
  Bell,
  BriefcaseBusiness,
  Heart,
  History,
  LayoutDashboard,
  MessageCircle,
  Settings,
  User,
  Wallet,
} from "lucide-react";
import type {
  Application,
  Job,
  Page,
  PaymentMethod,
  Transaction,
} from "./EmpViwer/types";
import { initialApplications, initialPaymentMethods, initialTransactions } from "./EmpViwer/data";
import { SidebarItem, MobileNav, JobDetailsModal } from "../components/Shared";

import EmployeeDashboard from "./EmpViwer/EmployeeDashboard";
import EmployeeJobs from "./EmpViwer/EmployeeJobs";
import EmployeeApplication from "./EmpViwer/EmployeeApplication";
import JobHistory from "./EmpViwer/jobHistory";
import SaveJob from "./EmpViwer/savejob";
import Message from "./message";
import Payment from "./EmpViwer/payment";
import Profile from "./EmpViwer/profile";

export default function EmpView() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const [savedJobs, setSavedJobs] = useState<string[]>(["JOB003"]);

  const [applications, setApplications] = useState<Application[]>(initialApplications);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(initialPaymentMethods);

  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const toggleSave = (jobId: string) => {
    setSavedJobs((current) =>
      current.includes(jobId) ? current.filter((id) => id !== jobId) : [...current, jobId]
    );
  };

  const applyJob = (job: Job) => {
    const alreadyApplied = applications.some((application) => application.jobId === job.id);

    if (alreadyApplied) return;

    const newApplication: Application = {
      id: `APP${Date.now()}`,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      appliedDate: "Today",
      status: "Pending",
    };

    setApplications((current) => [newApplication, ...current]);
    setSelectedJob(null);
  };

  const addDeposit = (amount: number, method: string) => {
    if (!amount || amount <= 0) return;

    const newTransaction: Transaction = {
      id: `TXN${Date.now()}`,
      type: "Deposit",
      title: "Wallet Deposit",
      description: "New deposit submitted",
      amount,
      date: "Today",
      method,
      status: "Pending",
    };

    setTransactions((current) => [newTransaction, ...current]);
  };

  const addPaymentMethod = (method: PaymentMethod) => {
    setPaymentMethods((current) => [
      ...current.map((item) => ({
        ...item,
        isDefault: method.isDefault ? false : item.isDefault,
      })),
      method,
    ]);
  };

  const setDefaultPaymentMethod = (id: string) => {
    setPaymentMethods((current) =>
      current.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))
    );
  };

  const removePaymentMethod = (id: string) => {
    setPaymentMethods((current) => current.filter((method) => method.id !== id));
  };

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#F6F1E4] text-[#2A2118]">
      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#2A2118]/10 bg-white">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2C84B]">
              <BriefcaseBusiness size={20} />
            </div>

            <div>
              <h1 className="text-lg font-bold">SmartHire</h1>
              <p className="hidden text-[11px] text-[#6F665A] sm:block">
                Student Employment Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-[#2A2118]/10 p-2.5 hover:bg-[#F6F1E4]">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#F2C84B]" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2C84B] text-sm font-bold">
                D
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Dilum Madeesha</p>
                <p className="text-[11px] text-[#6F665A]">University Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden min-h-[calc(100vh-64px)] w-64 shrink-0 border-r border-[#2A2118]/10 bg-white lg:block">
          <div className="sticky top-16 p-4">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-[#9A8D7C]">
              Employee Menu
            </p>

            <nav className="space-y-1">
              <SidebarItem
                icon={<LayoutDashboard size={18} />}
                label="Dashboard"
                active={currentPage === "dashboard"}
                onClick={() => navigate("dashboard")}
              />

              <SidebarItem
                icon={<BriefcaseBusiness size={18} />}
                label="Available Jobs"
                active={currentPage === "jobs"}
                onClick={() => navigate("jobs")}
              />

              <SidebarItem
                icon={<User size={18} />}
                label="My Applications"
                active={currentPage === "applications"}
                onClick={() => navigate("applications")}
                badge={applications.length}
              />

              <SidebarItem
                icon={<History size={18} />}
                label="Job History"
                active={currentPage === "history"}
                onClick={() => navigate("history")}
              />

              <SidebarItem
                icon={<Heart size={18} />}
                label="Saved Jobs"
                active={currentPage === "saved"}
                onClick={() => navigate("saved")}
                badge={savedJobs.length}
              />

              <SidebarItem
                icon={<MessageCircle size={18} />}
                label="Messages"
                active={currentPage === "messages"}
                onClick={() => navigate("messages")}
                badge={2}
              />

              <SidebarItem
                icon={<Wallet size={18} />}
                label="Payments"
                active={currentPage === "payments"}
                onClick={() => navigate("payments")}
              />

              <div className="my-4 border-t border-[#2A2118]/10" />

              <SidebarItem
                icon={<User size={18} />}
                label="Profile"
                active={currentPage === "profile"}
                onClick={() => navigate("profile")}
              />

              <SidebarItem
                icon={<Settings size={18} />}
                label="Settings"
                active={false}
                onClick={() => {}}
              />
            </nav>

            <div className="mt-8 rounded-2xl bg-[#F6F1E4] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold">Profile Complete</p>
                <p className="text-xs font-bold text-[#8A7000]">85%</p>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[85%] rounded-full bg-[#F2C84B]" />
              </div>

              <p className="mt-2 text-[10px] leading-4 text-[#6F665A]">
                Complete your profile to receive better job recommendations.
              </p>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="min-w-0 flex-1">
          {currentPage === "dashboard" && (
            <EmployeeDashboard applications={applications} onNavigate={navigate} />
          )}

          {currentPage === "jobs" && (
            <EmployeeJobs
              savedJobs={savedJobs}
              applications={applications}
              onSave={toggleSave}
              onView={setSelectedJob}
              onApply={applyJob}
            />
          )}

          {currentPage === "applications" && (
            <EmployeeApplication applications={applications} />
          )}

          {currentPage === "history" && <JobHistory />}

          {currentPage === "saved" && (
            <SaveJob
              savedJobs={savedJobs}
              applications={applications}
              onSave={toggleSave}
              onView={setSelectedJob}
              onApply={applyJob}
            />
          )}

          {currentPage === "messages" && <Message />}

          {currentPage === "payments" && (
            <Payment
              transactions={transactions}
              paymentMethods={paymentMethods}
              onAddDeposit={addDeposit}
              onAddPaymentMethod={addPaymentMethod}
              onSetDefault={setDefaultPaymentMethod}
              onRemoveMethod={removePaymentMethod}
            />
          )}

          {currentPage === "profile" && <Profile />}
        </main>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#2A2118]/10 bg-white lg:hidden">
        <div className="grid grid-cols-5">
          <MobileNav
            icon={<LayoutDashboard size={17} />}
            label="Home"
            active={currentPage === "dashboard"}
            onClick={() => navigate("dashboard")}
          />

          <MobileNav
            icon={<BriefcaseBusiness size={17} />}
            label="Jobs"
            active={currentPage === "jobs"}
            onClick={() => navigate("jobs")}
          />

          <MobileNav
            icon={<Wallet size={17} />}
            label="Pay"
            active={currentPage === "payments"}
            onClick={() => navigate("payments")}
          />

          <MobileNav
            icon={<History size={17} />}
            label="History"
            active={currentPage === "history"}
            onClick={() => navigate("history")}
          />

          <MobileNav
            icon={<User size={17} />}
            label="Profile"
            active={currentPage === "profile"}
            onClick={() => navigate("profile")}
          />
        </div>
      </div>

      {/* JOB DETAILS MODAL */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          applied={applications.some((application) => application.jobId === selectedJob.id)}
          saved={savedJobs.includes(selectedJob.id)}
          onSave={() => toggleSave(selectedJob.id)}
          onClose={() => setSelectedJob(null)}
          onApply={() => applyJob(selectedJob)}
        />
      )}
    </div>
  );
}
