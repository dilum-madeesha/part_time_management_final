export interface Job {
	id: number;
	title: string;
	company: string;
	location: string;
	type: string;
	salary: string;
	logo: string;
	color: string;
	tags: string[];
	posted: string;
}

export interface Category {
	icon: string;
	name: string;
	count: number;
	color: string;
}

export interface Testimonial {
	name: string;
	role: string;
	avatar: string;
	text: string;
	rating: number;
}

export interface Article {
	title: string;
	date: string;
	author: string;
	img: string;
	category: string;
}

export interface Feature {
	icon: string;
	title: string;
	desc: string;
	color: string;
	image?: string;
}

export interface Benefit {
	icon: string;
	title: string;
	benefits: string[];
	color: string;
	bgColor: string;
}

export const JOBS: Job[] = [
	{ id: 1, title: "UI/UX Designer", company: "Google", location: "Colombo, LK", type: "Full Time", salary: "Rs 120K/mo", logo: "G", color: "#4285F4", tags: ["Design", "Figma"], posted: "2 days ago" },
	{ id: 2, title: "React Developer", company: "Microsoft", location: "Remote", type: "Part Time", salary: "Rs 95K/mo", logo: "M", color: "#00A4EF", tags: ["React", "TS"], posted: "1 day ago" },
	{ id: 3, title: "Data Analyst", company: "Amazon", location: "Kandy, LK", type: "Contract", salary: "Rs 110K/mo", logo: "A", color: "#FF9900", tags: ["Python", "SQL"], posted: "3 days ago" },
	{ id: 4, title: "Backend Engineer", company: "Netflix", location: "Galle, LK", type: "Full Time", salary: "Rs 140K/mo", logo: "N", color: "#E50914", tags: ["Node", "AWS"], posted: "Today" },
	{ id: 5, title: "Product Manager", company: "Spotify", location: "Remote", type: "Full Time", salary: "Rs 130K/mo", logo: "S", color: "#1DB954", tags: ["Strategy", "PM"], posted: "4 days ago" },
	{ id: 6, title: "Mobile Developer", company: "Airbnb", location: "Colombo, LK", type: "Part Time", salary: "Rs 88K/mo", logo: "Ab", color: "#FF5A5F", tags: ["Flutter", "iOS"], posted: "2 days ago" },
];

export const CATEGORIES: Category[] = [
	{ icon: "💻", name: "Technology", count: 1240, color: "#EEF2FF" },
	{ icon: "🎨", name: "Design", count: 840, color: "#FFF7ED" },
	{ icon: "📊", name: "Finance", count: 620, color: "#F0FDF4" },
	{ icon: "📣", name: "Marketing", count: 530, color: "#FDF4FF" },
	{ icon: "🏥", name: "Healthcare", count: 410, color: "#FFF1F2" },
	{ icon: "🎓", name: "Education", count: 390, color: "#F0F9FF" },
	{ icon: "⚖️", name: "Legal", count: 280, color: "#FFFBEB" },
	{ icon: "🏗️", name: "Engineering", count: 760, color: "#F7FEE7" },
];

export const COMPANIES = ["Google", "Microsoft", "Amazon", "Adobe", "Gojek"];

export const STEPS = [
	{ icon: "📝", title: "Create Account", desc: "Sign up and complete your profile with skills and experience.", color: "#EEF2FF", accent: "#6366F1" },
	{ icon: "🔍", title: "Search Jobs", desc: "Browse thousands of listings filtered to match your preferences.", color: "#F0FDF4", accent: "#22C55E" },
	{ icon: "✉️", title: "Apply & Get Hired", desc: "Send your application and track status in real time.", color: "#FFF7ED", accent: "#F97316" },
];

export const TESTIMONIALS: Testimonial[] = [
	{ name: "Kera Williams", role: "UX Designer at Google", avatar: "KW", text: "GigLink made my job search incredibly smooth. Within two weeks I had three interviews and landed my dream role at Google. The smart matching is genuinely impressive!", rating: 5 },
	{ name: "James Chen", role: "Dev Lead at Microsoft", avatar: "JC", text: "As an employer, the quality of applicants is outstanding. The platform filters candidates well and the chat feature saves hours of back-and-forth emails.", rating: 5 },
	{ name: "Aisha Perera", role: "Data Analyst at Amazon", avatar: "AP", text: "Coming from Sri Lanka, I wasn't sure I'd find remote roles. GigLink connected me with Amazon in under a month. Highly recommend to every tech professional!", rating: 5 },
];

export const ARTICLES: Article[] = [
	{ title: "10 Resume Tips That Get You Hired in 2025", date: "May 1, 2026", author: "Sarah K.", img: "📰", category: "Career Advice" },
	{ title: "How to Ace Your Next Technical Interview", date: "Apr 24, 2026", author: "David L.", img: "🎯", category: "Interview Tips" },
	{ title: "Remote Work Trends Shaping Tech in 2026", date: "Apr 18, 2026", author: "Mia R.", img: "🌐", category: "Trends" },
];

export const SERVICES: Feature[] = [
  
  {
    icon: "📄",
    title: "Employee Management",
    desc: "Create your user account and can find the part-time jobs.",
    color: "#06B6D4",
    image: "usermange.png",
  },
  {
    icon: "📊",
    title: "Job owner Management",
    desc: "Create the owner account and posting the job in the system",
    color: "#8B5CF6",
    image: "usermange.png",
  },
  {
    icon: "🏢",
    title: "Related job suggessing in users",
    desc: "User working path related jobs suggesing.",
    color: "#EC4899",
  },
  {
    icon: "👥",
    title: " Tracking location using map",
    desc: "Job selected after Users can finding the Job location.",
    color: "#10B981",
  },
  {
    icon: "🔔",
    title: "Real-Time Notifications",
    desc: "Receive instant updates on new jobs, interview invitations",
    color: "#F59E0B",
  },
  {
    icon: "✅",
    title: "Verified Employers and Owners",
    desc: "Connect with trusted and verified employers only.",
    color: "#22C55E",
  },
  {
    icon: "🎓",
    title: "Student-Friendly Opportunities",
    desc: "Explore flexible and weekend job opportunities for students.",
    color: "#EF4444",
  },
  {
    icon: "🗓️",
    title: "Shift & Schedule Management",
    desc: "Manage working shifts and schedules effectively.",
    color: "#14B8A6",
  },
];

export const BENEFITS = [
	{
		icon: "🎯",
		title: "For Job Seekers",
		benefits: [
			"Access 2,800+ verified job listings",
			"AI-powered job recommendations",
			"One-click applications",
			"Real-time interview updates",
			"Free career resources and tips",
			"Networking with professionals"
		],
		image: "../assets/usermanage.png",
		color: "#6366F1",
		bgColor: "#EEF2FF"
	},
	{
		icon: "💼",
		title: "For Employers",
		benefits: [
			"Access 18K+ pre-vetted candidates",
			"Smart candidate matching",
			"Streamlined hiring workflow",
			"Bulk job posting",
			"Analytics and insights",
			"24/7 support"
		],
		color: "#3B82F6",
		bgColor: "#EFF6FF"
	}
];