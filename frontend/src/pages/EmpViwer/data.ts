import type {
  Application,
  Job,
  PaymentMethod,
  Transaction,
  WorkRecord,
} from "./types";

/* =========================================================
   JOB DATA
========================================================= */

export const jobs: Job[] = [
  {
    id: "JOB001",
    title: "Event Assistant",
    company: "ABC Events",
    location: "Colombo",
    category: "Events",
    description:
      "Assist the event team with guest registration, event setup, customer guidance, and general event activities.",
    date: "28 September 2026",
    time: "9:00 AM - 5:00 PM",
    duration: "1 Day",
    vacancies: 5,
    pay: "Rs. 2,500 / Day",
    payAmount: 2500,
    dressCode: "Smart Casual",
    skills: ["Communication", "Teamwork", "English"],
    featured: true,
  },
  {
    id: "JOB002",
    title: "Retail Sales Assistant",
    company: "City Fashion",
    location: "Negombo",
    category: "Retail",
    description:
      "Support customers, arrange products, maintain the sales area, and assist the store team.",
    date: "Monday - Friday",
    time: "4:00 PM - 8:00 PM",
    duration: "1 Week",
    vacancies: 3,
    pay: "Rs. 1,500 / Day",
    payAmount: 1500,
    dressCode: "Formal",
    skills: ["Customer Service", "Communication"],
  },
  {
    id: "JOB003",
    title: "Data Entry Assistant",
    company: "Tech Solutions",
    location: "Colombo",
    category: "Office",
    description:
      "Enter and organize company data using Microsoft Excel and internal business systems.",
    date: "30 September 2026",
    time: "8:30 AM - 4:30 PM",
    duration: "3 Days",
    vacancies: 2,
    pay: "Rs. 2,000 / Day",
    payAmount: 2000,
    dressCode: "Office Wear",
    skills: ["MS Excel", "Typing", "Computer Skills"],
  },
  {
    id: "JOB004",
    title: "Promotional Assistant",
    company: "NextGen Marketing",
    location: "Gampaha",
    category: "Marketing",
    description:
      "Assist the marketing team with promotional activities and customer engagement.",
    date: "29 September 2026",
    time: "10:00 AM - 6:00 PM",
    duration: "1 Day",
    vacancies: 6,
    pay: "Rs. 2,200 / Day",
    payAmount: 2200,
    dressCode: "Company T-Shirt",
    skills: ["Communication", "Marketing", "Teamwork"],
    featured: true,
  },
  {
    id: "JOB005",
    title: "Campus Brand Promoter",
    company: "Lanka Connect",
    location: "Negombo",
    category: "Marketing",
    description:
      "Represent the brand at a student-focused promotional event and guide visitors.",
    date: "2 October 2026",
    time: "9:30 AM - 4:30 PM",
    duration: "1 Day",
    vacancies: 4,
    pay: "Rs. 2,800 / Day",
    payAmount: 2800,
    dressCode: "Company T-Shirt",
    skills: ["Communication", "Presentation", "Teamwork"],
    featured: true,
  },
];

/* =========================================================
   APPLICATION DATA
========================================================= */

export const initialApplications: Application[] = [
  {
    id: "APP001",
    jobId: "JOB001",
    jobTitle: "Event Assistant",
    company: "ABC Events",
    appliedDate: "20 September 2026",
    status: "Accepted",
  },
  {
    id: "APP002",
    jobId: "JOB003",
    jobTitle: "Data Entry Assistant",
    company: "Tech Solutions",
    appliedDate: "21 September 2026",
    status: "Pending",
  },
  {
    id: "APP003",
    jobId: "JOB004",
    jobTitle: "Promotional Assistant",
    company: "NextGen Marketing",
    appliedDate: "18 September 2026",
    status: "Rejected",
  },
];

/* =========================================================
   WORK HISTORY
========================================================= */

export const workHistory: WorkRecord[] = [
  {
    id: "WORK001",
    jobTitle: "Event Assistant",
    company: "ABC Events",
    location: "Colombo",
    date: "25 September 2026",
    time: "9:00 AM - 5:00 PM",
    duration: "1 Day",
    payment: 2500,
    status: "Completed",
    rating: 5,
  },
  {
    id: "WORK002",
    jobTitle: "Retail Sales Assistant",
    company: "City Fashion",
    location: "Negombo",
    date: "28 September 2026",
    time: "4:00 PM - 8:00 PM",
    duration: "4 Hours",
    payment: 1500,
    status: "Upcoming",
  },
  {
    id: "WORK003",
    jobTitle: "Promotional Assistant",
    company: "NextGen Marketing",
    location: "Gampaha",
    date: "20 September 2026",
    time: "10:00 AM - 6:00 PM",
    duration: "1 Day",
    payment: 2200,
    status: "Completed",
    rating: 4,
  },
  {
    id: "WORK004",
    jobTitle: "Data Entry Assistant",
    company: "Tech Solutions",
    location: "Colombo",
    date: "15 September 2026",
    time: "8:30 AM - 4:30 PM",
    duration: "1 Day",
    payment: 2000,
    status: "Missed",
    reason: "Accepted the job but did not attend.",
  },
  {
    id: "WORK005",
    jobTitle: "Event Crew Member",
    company: "Lanka Events",
    location: "Colombo",
    date: "10 September 2026",
    time: "8:00 AM - 4:00 PM",
    duration: "1 Day",
    payment: 2500,
    status: "Completed",
    rating: 5,
  },
];

/* =========================================================
   PAYMENT DATA
========================================================= */

export const initialPaymentMethods: PaymentMethod[] = [
  {
    id: "PM001",
    type: "Bank Account",
    name: "Commercial Bank",
    accountName: "Dilum Madeesha",
    accountNumber: "**** **** 4582",
    isDefault: true,
    verified: true,
  },
  {
    id: "PM002",
    type: "Mobile Wallet",
    name: "Mobile Wallet",
    accountName: "Dilum Madeesha",
    accountNumber: "**** 7821",
    isDefault: false,
    verified: true,
  },
];

export const initialTransactions: Transaction[] = [
  {
    id: "TXN001",
    type: "Job Earnings",
    title: "Event Assistant Payment",
    description: "ABC Events - completed job",
    amount: 2500,
    date: "25 September 2026",
    method: "SmartHire Wallet",
    status: "Completed",
  },
  {
    id: "TXN002",
    type: "Job Earnings",
    title: "Promotional Assistant Payment",
    description: "NextGen Marketing - completed job",
    amount: 2200,
    date: "20 September 2026",
    method: "SmartHire Wallet",
    status: "Completed",
  },
  {
    id: "TXN003",
    type: "Deposit",
    title: "Wallet Deposit",
    description: "Added funds to SmartHire wallet",
    amount: 5000,
    date: "18 September 2026",
    method: "Commercial Bank ****4582",
    status: "Completed",
  },
  {
    id: "TXN004",
    type: "Withdrawal",
    title: "Bank Withdrawal",
    description: "Withdrawal to Commercial Bank",
    amount: 1500,
    date: "16 September 2026",
    method: "Commercial Bank ****4582",
    status: "Completed",
  },
  {
    id: "TXN005",
    type: "Deposit",
    title: "Wallet Deposit",
    description: "Deposit awaiting verification",
    amount: 3000,
    date: "26 September 2026",
    method: "Mobile Wallet ****7821",
    status: "Pending",
  },
];
