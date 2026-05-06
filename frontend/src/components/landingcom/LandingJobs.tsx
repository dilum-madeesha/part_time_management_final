import { JOBS } from "./landingData";

export default function LandingJobs() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
					<div>
						<span className="inline-block text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 border border-green-100 px-4 py-1.5 rounded-full mb-3">Opportunities</span>
						<h2 className="text-3xl sm:text-4xl font-black text-slate-800">Latest <span className="text-blue-600">Job Posts</span></h2>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{JOBS.map((job) => (
						<div key={job.id} className="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col">
							<div className="flex items-start gap-4 mb-4">
								<div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-sm" style={{ background: job.color }}>{job.logo}</div>
								<div className="flex-1 min-w-0">
									<h3 className="font-bold text-slate-800 text-base truncate group-hover:text-blue-600 transition-colors">{job.title}</h3>
									<p className="text-sm text-slate-500">{job.company} · {job.location}</p>
								</div>
								<span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${job.type === "Full Time" ? "bg-green-50 text-green-600" : job.type === "Part Time" ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"}`}>{job.type}</span>
							</div>
							<div className="flex flex-wrap gap-1.5 mb-4">
								{job.tags.map((tag) => <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{tag}</span>)}
							</div>
							<div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
								<div>
									<div className="text-base font-black text-blue-600">{job.salary}</div>
									<div className="text-xs text-slate-400">{job.posted}</div>
								</div>
								<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm">Apply Now</button>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-10">
					<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-xl transition-all text-sm">View All Jobs →</button>
				</div>
			</div>
		</section>
	);
}