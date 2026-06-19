import { useState } from "react";
import { JOB_TYPES } from "./landingData";

export default function LandingJob() {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredTypes = JOB_TYPES.filter(type => 
		type.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
		type.examples.some(ex => ex.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	return (
		<section className="py-20 md:py-10 bg-lime-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="text-center mb-6">
					<h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">
						Browse Job Types
					</h2>
					<p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-4">
						Explore various part-time opportunities tailored to your schedule, skills, and lifestyle.
					</p>

					{/* Search Bar */}
					<div className="relative max-w-xl mx-auto">
						<input 
							type="text" 
							placeholder="Search categories or examples..."
							className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-600"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* Job Types Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredTypes.map((type, index) => (
						<div 
							key={index}
							className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
						>
							<div className="flex items-start gap-5 mb-6">
								{/* Icon with Dynamic Background */}
								<div 
									className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 duration-300"
									style={{ backgroundColor: `${type.color}15`, color: type.color }}
								>
									{type.icon}
								</div>
								
								<div>
									<h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">
										{type.title}
									</h3>
									<p className="text-sm text-[#64748B] leading-relaxed">
										{type.desc}
									</p>
								</div>
							</div>

							{/* Examples Section */}
							<div className="pt-6 border-t border-slate-50">
								<span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
									Examples
								</span>
								<div className="flex flex-wrap gap-2">
									{type.examples.map((example, i) => (
										<span 
											key={i}
											className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-default"
											style={{ 
												backgroundColor: `${type.color}10`, 
												color: type.color 
											}}
										>
											{example}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* No Results State */}
				{filteredTypes.length === 0 && (
					<div className="text-center py-20">
						<div className="text-4xl mb-4">🔍</div>
						<h3 className="text-xl font-bold text-slate-900">No job types found</h3>
						<p className="text-slate-500">Try adjusting your search query.</p>
					</div>
				)}

			</div>
		</section>
	);
}
