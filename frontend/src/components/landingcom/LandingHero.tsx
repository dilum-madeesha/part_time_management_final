// import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
	// const [tab, setTab] = useState<"find" | "hire">("find");

	return (
		<section className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden relative">
			<div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-100 h-100 bg-indigo-500/20 rounded-full blur-3xl translate-y-24 -translate-x-24 pointer-events-none" />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
				<div>
					<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
						<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
						2,800+ Jobs Available Now
					</div>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 tracking-tight">
						Make the Best Move —<br />
						<span className="text-yellow-300">Find Your Next Job</span>
					</h1>
					<p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
						Thousands of curated part-time and full-time roles matched to your skills. Get real-time alerts, seamless applications, and better matches.
					</p>
					{/* <div className="bg-white rounded-2xl p-2 shadow-2xl">
						<div className="flex bg-slate-100 rounded-xl p-1 mb-2">
							<button onClick={() => setTab("find")} className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab === "find" ? "bg-blue-600 text-white shadow" : "text-slate-500 hover:text-slate-700"}`}>
								Find Jobs
							</button>
							<button onClick={() => setTab("hire")} className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab === "hire" ? "bg-blue-600 text-white shadow" : "text-slate-500 hover:text-slate-700"}`}>
								Hire Talent
							</button>
						</div>
						<div className="flex flex-col sm:flex-row gap-2">
							<div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
								<span className="text-slate-400">🔍</span>
								<input className="bg-transparent flex-1 text-slate-700 text-sm placeholder-slate-400 outline-none" placeholder={tab === "find" ? "Job title, keyword…" : "Skill, role, department…"} />
							</div>
							<div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
								<span className="text-slate-400">📍</span>
								<input className="bg-transparent flex-1 text-slate-700 text-sm placeholder-slate-400 outline-none" placeholder="Location…" />
							</div>
							<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm whitespace-nowrap">
								Search Jobs
							</button>
						</div>
						<p className="text-xs text-slate-400 mt-2 px-1">
							Popular: <span className="text-blue-600 cursor-pointer hover:underline">React Developer</span>, <span className="text-blue-600 cursor-pointer hover:underline">UI Designer</span>, <span className="text-blue-600 cursor-pointer hover:underline">Data Analyst</span>
						</p>
					</div> */}
					<div className="mt-6 flex gap-3">
						<Link to="/login" className="inline-flex items-center gap-2 bg-yellow-300 text-slate-900 px-5 py-3 rounded-xl font-bold shadow hover:opacity-95">
							Get Started
						</Link>
						<a href="#learn-more" className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-5 py-3 rounded-xl">
							Learn More
						</a>
					</div>
				</div>
				<div className="hidden lg:flex items-center justify-center relative">
					<div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center relative">
						<div className="text-8xl">👨‍💼</div>
						<div className="absolute top-0 -right-8 bg-white rounded-2xl shadow-xl p-3 text-slate-800 min-w-35">
							<div className="flex items-center gap-2 mb-1">
								<div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center text-sm">G</div>
								<span className="text-xs font-bold text-slate-700">Google</span>
							</div>
							<div className="text-xs text-slate-500">UI/UX Designer</div>
							<div className="text-xs font-bold text-blue-600 mt-1">Rs 120K/mo</div>
						</div>
						<div className="absolute bottom-8 -left-10 bg-white rounded-2xl shadow-xl p-3 text-slate-800 min-w-35">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-green-500 text-lg">✓</span>
								<span className="text-xs font-bold text-slate-700">Job Matched!</span>
							</div>
							<div className="text-xs text-slate-500">React Developer</div>
							<div className="flex gap-1 mt-1">{"⭐⭐⭐⭐⭐".split("").map((star, index) => <span key={index} className="text-xs">{star}</span>)}</div>
						</div>
						<div className="absolute top-12 -left-12 bg-white rounded-2xl shadow-xl p-3 min-w-30">
							<div className="text-xs text-slate-500 mb-1">New Applications</div>
							<div className="text-2xl font-black text-blue-600">2.4K</div>
							<div className="text-xs text-green-500 font-medium">↑ +12% today</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white/10 backdrop-blur-sm border-t border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
					{[["18K+", "Job Seekers"], ["2.8K", "Active Jobs"], ["840", "Companies"], ["98%", "Success Rate"]].map(([value, label]) => (
						<div key={label}>
							<div className="text-xl font-black text-white">{value}</div>
							<div className="text-xs text-blue-200">{label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}