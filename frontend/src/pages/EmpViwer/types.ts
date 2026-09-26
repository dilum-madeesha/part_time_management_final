export type Page =
  | "dashboard"
  | "jobs"
  | "applications"
  | "history"
  | "saved"
  | "messages"
  | "payments"
  | "profile";

export type ApplicationStatus = "Pending" | "Accepted" | "Rejected" | "Cancelled";

export type WorkStatus =
  | "Upcoming"
  | "Completed"
  | "Missed"
  | "Cancelled"
  | "Ongoing";

export type PaymentMethodType = "Bank Account" | "Mobile Wallet" | "Debit Card";

export type PaymentMethod = {
  id: string;
  type: PaymentMethodType;
  name: string;
  accountName: string;
  accountNumber: string;
  isDefault: boolean;
  verified: boolean;
};

export type TransactionType = "Deposit" | "Job Earnings" | "Withdrawal" | "Refund";

export type TransactionStatusValue = "Completed" | "Pending" | "Failed";

export type Transaction = {
  id: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
  method: string;
  status: TransactionStatusValue;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  vacancies: number;
  pay: string;
  payAmount: number;
  dressCode: string;
  skills: string[];
  featured?: boolean;
};

export type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: ApplicationStatus;
};

export type WorkRecord = {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  payment: number;
  status: WorkStatus;
  rating?: number;
  reason?: string;
};
