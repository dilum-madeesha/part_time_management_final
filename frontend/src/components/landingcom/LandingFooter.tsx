import { Link } from "react-router-dom";

export default function LandingFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Main Footer Content */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
					{/* Brand Column */}
					<div className="lg:col-span-1">
						<div className="flex items-center gap-2.5 mb-4">
							<div className="w-9 h-9 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
								<span className="text-white font-black text-base">S</span>
							</div>
							<div className="flex items-baseline gap-1">
								<span className="font-black text-white">Smart</span>
								<span className="font-black bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Hire</span>
							</div>
						</div>
						<p className="text-sm leading-relaxed text-slate-400 mb-6">
							Sri Lanka's leading part-time job marketplace connecting talent with opportunity.
						</p>
						{/* Social Links */}
						<div className="flex gap-3">
							{["facebook", "twitter", "linkedin", "instagram"].map((social) => (
								<a
									key={social}
									href="#"
									className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all transform hover:scale-110"
									aria-label={social}
								>
									<span className="text-white text-lg">
										{social === "facebook" && "f"}
										{social === "twitter" && "𝕏"}
										{social === "linkedin" && "in"}
										{social === "instagram" && "📷"}
									</span>
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
							<span className="w-1 h-4 bg-blue-500 rounded-full" />
							Quick Links
						</h4>
						<ul className="space-y-2.5">
							{["Home", "About Us", "Browse Jobs", "Companies", "Blog"].map((link) => (
								<li key={link}>
									<a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* For Seekers */}
					<div>
						<h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
							<span className="w-1 h-4 bg-green-500 rounded-full" />
							For Job Seekers
						</h4>
						<ul className="space-y-2.5">
							{["Create Profile", "Browse Jobs", "Job Alerts", "Salary Guide", "Career Tips"].map((link) => (
								<li key={link}>
									<a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* For Employers */}
					<div>
						<h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
							<span className="w-1 h-4 bg-purple-500 rounded-full" />
							For Employers
						</h4>
						<ul className="space-y-2.5">
							{["Post a Job", "Find Talent", "Pricing Plans", "Enterprise", "Support"].map((link) => (
								<li key={link}>
									<a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
							<span className="w-1 h-4 bg-orange-500 rounded-full" />
							Legal
						</h4>
						<ul className="space-y-2.5">
							{["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Us"].map((link) => (
								<li key={link}>
									<a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-slate-800 my-12" />

				{/* Bottom Footer */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
					{/* Copyright */}
					<div className="text-xs text-slate-500">
						<p>© {currentYear} SmartHire. All rights reserved.</p>
						<p className="mt-2">Built with ❤️ in Sri Lanka</p>
					</div>

					{/* Status Badge */}
					<div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg">
						<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
						<span className="text-xs text-slate-400">All Systems Operational</span>
					</div>

					{/* Language/Region - Optional */}
					<div className="flex gap-2">
						<button className="text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
							🇱🇰 Sri Lanka
						</button>
						<button className="text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
							English
						</button>
					</div>
				</div>

				{/* CTA Band */}
				<div className="mt-12 p-8 rounded-2xl bg-linear-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 text-center">
					<p className="text-slate-300 mb-4">Ready to transform your career?</p>
					<Link
						to="/login"
						className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						Get Started Today
						<span>→</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}