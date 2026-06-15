import { JOBS } from "./landingData";

export default function LandingJobs() {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/3 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60 translate-x-1/2" />
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
					<div>
						<div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 text-sm font-semibold text-green-700 mb-4">
							<span className="w-2 h-2 bg-green-600 rounded-full"></span>
							Latest Opportunities
						</div>
						<h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
							Featured
							<br />
							<span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Job Listings</span>
						</h2>
					</div>
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors whitespace-nowrap"
					>
						View All Jobs
						<span>→</span>
					</a>
				</div>

				{/* Jobs Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{JOBS.map((job) => (
						<div
							key={job.id}
							className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-green-300 transition-all duration-300 hover:scale-105 flex flex-col h-full"
						>
							{/* Header */}
							<div className="flex items-start gap-4 mb-4">
								{/* Company Logo */}
								<div
									className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-md group-hover:scale-110 transition-transform"
									style={{ background: job.color }}
								>
									{job.logo}
								</div>

								{/* Title & Company */}
								<div className="flex-1 min-w-0">
									<h3 className="font-bold text-slate-800 text-base truncate group-hover:text-green-600 transition-colors">
										{job.title}
									</h3>
									<p className="text-sm text-slate-500 truncate">
										{job.company} · {job.location}
									</p>
								</div>

								{/* Job Type Badge */}
								<span
									className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 whitespace-nowrap ${
										job.type === "Full Time"
											? "bg-green-50 text-green-600"
											: job.type === "Part Time"
											? "bg-blue-50 text-blue-600"
											: "bg-orange-50 text-orange-600"
									}`}
								>
									{job.type}
								</span>
							</div>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 mb-4">
								{job.tags.map((tag) => (
									<span
										key={tag}
										className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-lg hover:bg-slate-200 transition-colors"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Divider */}
							<div className="border-t border-slate-100 my-4" />

							{/* Footer */}
							<div className="flex items-center justify-between pt-2 mt-auto">
								{/* Salary & Posted */}
								<div>
									<div className="text-lg font-black text-green-600">
										{job.salary}
									</div>
									<div className="text-xs text-slate-400">
										Posted {job.posted}
									</div>
								</div>

								{/* Apply Button */}
								<button className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-110">
									Apply
								</button>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center">
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-base shadow-md hover:shadow-lg"
					>
						Browse All Opportunities
						<span>→</span>
					</a>
				</div>
			</div>
		</section>
	);
}