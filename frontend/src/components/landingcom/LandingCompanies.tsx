import { COMPANIES } from "./landingData";

export default function LandingCompanies() {
	return (
		<section className="py-16 bg-slate-900 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
				{/* Title */}
				<p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-8">Trusted by Leading Companies</p>

				{/* Company Logos */}
				<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-8">
					{COMPANIES.map((company) => (
						<div
							key={company}
							className="group flex items-center justify-center h-16 px-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 transform cursor-pointer"
						>
							<span className="text-white font-black text-lg group-hover:text-blue-400 transition-colors">
								{company}
							</span>
						</div>
					))}
				</div>

				{/* Stats */}
				<div className="border-t border-white/10 pt-8">
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
						{[
							{ value: "840+", label: "Companies" },
							{ value: "18K+", label: "Employees Hired" },
							{ value: "99.8%", label: "Satisfaction" }
						].map((stat) => (
							<div key={stat.label}>
								<div className="text-2xl font-black text-blue-400 mb-1">{stat.value}</div>
								<div className="text-xs text-white/60">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}