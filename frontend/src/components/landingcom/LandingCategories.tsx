import { useState } from "react";
import { CATEGORIES } from "./landingData";

export default function LandingCategories() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full mb-4">Explore</span>
					<h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3">Choose <span className="text-blue-600">Categories</span></h2>
					<p className="text-slate-500 max-w-xl mx-auto">Browse jobs across the most in-demand industries and find the perfect match.</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
					{CATEGORIES.map((category, index) => (
						<button
							key={category.name}
							onClick={() => setActive(active === index ? null : index)}
							className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${active === index ? "border-blue-500 shadow-lg scale-[1.03]" : "border-slate-100 hover:border-blue-200 hover:shadow-sm"}`}
							style={{ background: active === index ? "#EFF6FF" : category.color }}
						>
							<span className="text-3xl transition-transform group-hover:scale-110">{category.icon}</span>
							<div className="text-center">
								<div className="text-sm font-bold text-slate-800">{category.name}</div>
								<div className="text-xs text-slate-500 mt-0.5">{category.count.toLocaleString()} Jobs</div>
							</div>
						</button>
					))}
				</div>
				<div className="text-center">
					<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-sm text-sm">Browse All Categories →</button>
				</div>
			</div>
		</section>
	);
}