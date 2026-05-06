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