import { useState } from "react";
import { CATEGORIES } from "./landingData";

export default function LandingCategories() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<section className="py-24 bg-linear-to-b from-white to-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 text-sm font-semibold text-purple-700 mb-4">
						<span className="w-2 h-2 bg-purple-600 rounded-full"></span>
						Explore Opportunities
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
						Popular Job
						<br />
						<span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Categories</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Discover thousands of opportunities across various industries tailored to your skills and interests.
					</p>
				</div>

				{/* Categories Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
					{CATEGORIES.map((category, index) => (
						<button
							key={category.name}
							onClick={() => setActive(active === index ? null : index)}
							className="group relative h-32 sm:h-40 rounded-2xl border-2 transition-all duration-300 overflow-hidden hover:scale-105 transform"
							style={{
								borderColor: active === index ? "#a855f7" : "#e2e8f0",
								backgroundColor:
									active === index
										? "#faf5ff"
										: category.color
							}}
						>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-linear-to-br from-transparent to-black/5 pointer-events-none" />

							{/* Content */}
							<div className="relative h-full flex flex-col items-center justify-center gap-2 px-3">
								{/* Icon */}
								<span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">
									{category.icon}
								</span>

								{/* Name */}
								<div className="text-center">
									<div className="text-sm font-bold text-slate-800 leading-tight">
										{category.name}
									</div>
									<div className="text-xs text-slate-500 mt-1 font-medium">
										{(category.count / 1000).toFixed(1)}K jobs
									</div>
								</div>
							</div>

							{/* Active Indicator */}
							{active === index && (
								<div className="absolute inset-0 ring-2 ring-purple-500 rounded-2xl" />
							)}
						</button>
					))}
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-slate-200">
					<a
						href="#"
						className="inline-flex items-center gap-2 text-purple-600 font-bold text-sm hover:text-purple-700 transition-colors"
					>
						Browse All Categories
						<span>→</span>
					</a>
					<span className="hidden sm:block text-slate-300">•</span>
					<a
						href="#"
						className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
					>
						Start Your Search
						<span>→</span>
					</a>
				</div>
			</div>
		</section>
	);
}