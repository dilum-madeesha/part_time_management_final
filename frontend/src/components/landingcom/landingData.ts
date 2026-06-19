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

export interface JobType {
	title: string;
	desc: string;
	icon: string;
	examples: string[];
	color: string;
}

export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	avatar: string;
	socials: {
		platform: "linkedin" | "twitter" | "github";
		url: string;
	}[];
}

export interface Feature {
	icon: string;
	title: string;
	tag?: string;
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
	{ 
		name: "Aisha Perera", 
		role: "Data Analyst at Amazon", 
		avatar: "AP", 
		text: "Coming from Sri Lanka, I wasn't sure I'd find remote roles. UniTalent connected me with Amazon in under a month. Highly recommended!", 
		rating: 5 
	},
	{ 
		name: "Marcus Johnson", 
		role: "Senior Frontend Engineer at Netflix", 
		avatar: "MJ", 
		text: "The quality of opportunities here is unmatched. I found a role that perfectly aligns with my career goals and salary expectations.", 
		rating: 5 
	},
	{ 
		name: "Sarah Jenkins", 
		role: "VP of Engineering at Stripe", 
		avatar: "SJ", 
		text: "UniTalent has become our go-to platform for sourcing top-tier technical talent. The signal-to-noise ratio is incredible compared to other boards.", 
		rating: 5 
	},
	{ 
		name: "David Kim", 
		role: "Product Manager at Spotify", 
		avatar: "DK", 
		text: "I was passively looking, but the personalized recommendations were too good to ignore. Seamless process from start to finish.", 
		rating: 5 
	},
];

export const STATS = [
	{ label: "Hires Made", value: "10k+", icon: "👥" },
	{ label: "Partner Companies", value: "500+", icon: "🏢" },
	{ label: "Average Rating", value: "4.9/5", icon: "⭐" },
];

export const ARTICLES: Article[] = [
	{ title: "10 Resume Tips That Get You Hired in 2025", date: "May 1, 2026", author: "Sarah K.", img: "📰", category: "Career Advice" },
	{ title: "How to Ace Your Next Technical Interview", date: "Apr 24, 2026", author: "David L.", img: "🎯", category: "Interview Tips" },
	{ title: "Remote Work Trends Shaping Tech in 2026", date: "Apr 18, 2026", author: "Mia R.", img: "🌐", category: "Trends" },
];

export const SERVICES: Feature[] = [
  {
    icon: "📄",
    tag: "Management",
    title: "Employee Management",
    desc: "Create your user account and easily find part-time jobs that fit your schedule. Manage your profile, track applications, and communicate with employers all in one place.",
    color: "#4F46E5",
    image: "services.png",
  },
  {
    icon: "🤖",
    tag: "AI Matching",
    title: "Smart Job Matching",
    desc: "Our AI-powered algorithm matches your skills and preferences with the most relevant job opportunities, ensuring a perfect fit for both seekers and employers.",
    color: "#3B82F6",
    image: "parttime.png",
  },
  {
    icon: "⚡",
    tag: "Efficiency",
    title: "1-Click Quick Apply",
    desc: "Save time with our streamlined application process. Apply to multiple jobs with just one click using your saved profile and resume.",
    color: "#10B981",
    image: "presnet.png",
  },
  {
    icon: "🛡️",
    tag: "Trust & Safety",
    title: "Verified Employers",
    desc: "We rigorously vet all employers on our platform to ensure a safe and trustworthy job search experience for all our users.",
    color: "#F59E0B",
    image: "usermange.png",
  },
  {
    icon: "📅",
    tag: "Flexibility",
    title: "Schedule & Shifts",
    desc: "Take control of your work-life balance with our flexible scheduling tools. Find and manage shifts that work for you.",
    color: "#6366F1",
    image: "lock.png",
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

export const JOB_TYPES: JobType[] = [
	{
		title: "Student Jobs",
		desc: "Part-time jobs students can do alongside studies.",
		icon: "🎓",
		examples: ["Data Entry Operator", "Library Assistant", "Tutor", "Campus Ambassador"],
		color: "#3B82F6"
	},
	{
		title: "Remote Jobs",
		desc: "Online jobs done from home.",
		icon: "💻",
		examples: ["Virtual Assistant", "Content Writer", "Social Media Manager", "Graphic Designer"],
		color: "#6366F1"
	},
	{
		title: "Weekend Jobs",
		desc: "Jobs done only on Saturdays & Sundays.",
		icon: "📅",
		examples: ["Event Staff", "Sales Assistant", "Restaurant Helper"],
		color: "#F97316"
	},
	{
		title: "Freelance Jobs",
		desc: "Project-based or short-term jobs.",
		icon: "💼",
		examples: ["Web Developer", "UI/UX Designer", "Video Editor", "Photographer"],
		color: "#A855F7"
	},
	{
		title: "Office Assistant Jobs",
		desc: "Part-time jobs in an office environment.",
		icon: "🏢",
		examples: ["Receptionist", "Data Entry Clerk", "Administrative Assistant"],
		color: "#14B8A6"
	},
	{
		title: "Delivery & Logistics Jobs",
		desc: "Transport and delivery jobs.",
		icon: "🚚",
		examples: ["Delivery Rider", "Courier Assistant", "Warehouse Helper"],
		color: "#EAB308"
	},
	{
		title: "Customer Service Jobs",
		desc: "Customer service related jobs.",
		icon: "🎧",
		examples: ["Call Center Agent", "Customer Support Assistant", "Front Desk Officer"],
		color: "#EF4444"
	},
	{
		title: "Retail & Sales Jobs",
		desc: "Sales and store related jobs.",
		icon: "🛍️",
		examples: ["Cashier", "Sales Representative", "Store Assistant"],
		color: "#22C55E"
	},
	{
		title: "IT & Technology Jobs",
		desc: "Technical part-time jobs.",
		icon: "💻",
		examples: ["Frontend Developer", "Backend Developer", "Software Tester", "IT Support Assistant"],
		color: "#06B6D4"
	}
];

export const TEAM_MEMBERS: TeamMember[] = [
	{
		name: "Marcus Chen",
		role: "System Owner",
		bio: "Former HR director passionate about bridging the gap between academia and industry.",
		avatar: "https://i.pravatar.cc/150?u=marcus",
		socials: [
			{ platform: "linkedin", url: "#" },
			{ platform: "twitter", url: "#" }
		]
	},
	{
		name: "Sarah Jenkins",
		role: "Software Engineer",
		bio: "Full-stack developer focused on building scalable, secure platforms for our users.",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		socials: [
			{ platform: "linkedin", url: "#" },
			{ platform: "github", url: "#" }
		]
	},
	{
		name: "David Alaba",
		role: "UI/UX Engineer",
		bio: "Design systems advocate creating intuitive and accessible experiences for students.",
		avatar: "https://i.pravatar.cc/150?u=david",
		socials: [
			{ platform: "linkedin", url: "#" },
			{ platform: "twitter", url: "#" }
		]
	}
];