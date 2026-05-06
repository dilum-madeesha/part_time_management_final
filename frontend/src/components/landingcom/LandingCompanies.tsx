import { COMPANIES } from "./landingData";

export default function LandingCompanies() {
	return (
		<section className="py-12 bg-slate-50 border-y border-slate-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Get Hired At Top Companies</p>
				<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
					{COMPANIES.map((company) => (
						<span key={company} className="text-xl font-black text-slate-400 hover:text-blue-600 transition-colors cursor-pointer tracking-tight">{company}</span>
					))}
				</div>
			</div>
		</section>
	);
}