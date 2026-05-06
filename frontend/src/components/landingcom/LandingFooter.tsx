import { Link } from "react-router-dom";

export default function LandingFooter() {
	return (
		<footer className="bg-slate-900 text-slate-300 py-14">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><span className="text-white font-black text-sm">G</span></div>
							<span className="font-black text-xl text-white">Smart<span className="text-blue-400">Hire</span></span>
						</div>
						<p className="text-sm leading-relaxed text-slate-400">Sri Lanka's smartest part-time job marketplace — connecting talent with opportunity.</p>
					</div>
					{[["Quick Links", ["Home", "About Us", "Jobs", "Companies", "Blog"]], ["Job Seekers", ["Create Profile", "Browse Jobs", "Job Alerts", "Salary Guide", "Career Tips"]], ["Employers", ["Post a Job", "Find Talent", "Pricing", "Enterprise", "Contact Us"]]].map(([title, links]) => (
						<div key={title as string}>
							<h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{title as string}</h4>
							<ul className="space-y-2">
								{(links as string[]).map((label) => <li key={label}><a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">{label}</a></li>)}
							</ul>
						</div>
					))}
				</div>
				<div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-slate-500">© 2026 JobNet. All rights reserved.</p>
					<div className="flex gap-4">
						{["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => <Link key={label} to="/" className="text-xs text-slate-500 hover:text-blue-400 transition-colors">{label}</Link>)}
					</div>
				</div>
			</div>
		</footer>
	);
}