import { Link } from "react-router-dom";

export default function LandingFooter() {
	const currentYear = new Date().getFullYear();

	const linkColumns = [
		{
			heading: "Explore",
			links: ["Home", "About us", "Browse jobs", "Companies", "Blog"],
		},
		{
			heading: "For job seekers",
			links: [
				"Create profile",
				"Browse jobs",
				"Job alerts",
				"Salary guide",
				"Career tips",
			],
		},
		{
			heading: "For employers",
			links: ["Post a job", "Find talent", "Pricing", "Enterprise", "Support"],
		},
		{
			heading: "Legal",
			links: ["Privacy policy", "Terms of service", "Cookie policy", "Contact us"],
		},
	];

	const socials = [
		{ key: "facebook", label: "f" },
		{ key: "twitter", label: "𝕏" },
		{ key: "linkedin", label: "in" },
		{ key: "instagram", label: "📷" },
	];

	return (
		<footer className="bg-[#14231C] text-[#A9BBA9] pt-16 pb-10 relative overflow-hidden">
			{/* Single quiet decorative glow, not a rainbow of them */}
			<div className="absolute top-0 right-0 w-lg h-128 bg-[#50d71e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Closing statement — CTA lives here, as the footer's opening line, not a boxed afterthought */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 mb-14 border-b border-[#F4F7E3]/10">
					<div className="max-w-lg">
						<p className="text-2xl md:text-3xl font-black text-[#F4F7E3] leading-tight">
							Find work that fits around your timetable — or find the
							students who'll show up for yours.
						</p>
					</div>
					<Link
						to="/login"
						className="inline-flex items-center gap-2 bg-[#F4F7E3] text-[#14231C] px-6 py-3.5 rounded-full font-bold whitespace-nowrap hover:bg-white transition-colors shrink-0"
					>
						Get started
						<span>→</span>
					</Link>
				</div>

				{/* Main Footer Content */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
					{/* Brand Column */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-2.5 mb-4">
							<div className="w-9 h-9 bg-[#2F6D4F] rounded-xl flex items-center justify-center">
								<span className="text-[#F4F7E3] font-black text-base">S</span>
							</div>
							<span className="font-black text-[#F4F7E3] text-lg">
								SmartHire
							</span>
						</div>
						<p className="text-sm leading-relaxed text-[#A9BBA9] mb-6 max-w-xs">
							Sri Lanka's part-time job marketplace built for students —
							flexible roles, verified employers.
						</p>
						<div className="flex gap-2.5">
							{socials.map((social) => (
<a
									key={social.key}
									href="#"
									className="w-9 h-9 rounded-lg bg-[#F4F7E3]/5 hover:bg-[#2F6D4F] flex items-center justify-center transition-colors"
									aria-label={social.key}
								>
									<span className="text-[#F4F7E3] text-sm">
										{social.label}
									</span>
								</a>
							))}
						</div>
					</div>

					{/* Link columns — plain headers, no color-coded bars */}
					{linkColumns.map((col) => (
						<div key={col.heading}>
							<h4 className="text-[#F4F7E3] font-bold text-sm mb-4">
								{col.heading}
							</h4>
							<ul className="space-y-2.5">
								{col.links.map((link) => (
									<li key={link}>
										
										<a	href="#"
											className="text-[#A9BBA9] hover:text-[#F4F7E3] transition-colors text-sm"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Footer */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#F4F7E3]/10">
					<div className="text-xs text-[#A9BBA9] text-center sm:text-left">
						<p>© {currentYear} SmartHire. All rights reserved.</p>
						<p className="mt-1.5">Built in Sri Lanka</p>
					</div>

					<div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F4F7E3]/5">
						<span className="w-1.5 h-1.5 bg-[#8FB79A] rounded-full" />
						<span className="text-xs text-[#A9BBA9]">
							All systems operational
						</span>
					</div>

					<div className="flex gap-2">
						<button className="text-xs px-3 py-2 rounded-full bg-[#F4F7E3]/5 hover:bg-[#F4F7E3]/10 text-[#A9BBA9] hover:text-[#F4F7E3] transition-colors">
							🇱🇰 Sri Lanka
						</button>
						<button className="text-xs px-3 py-2 rounded-full bg-[#F4F7E3]/5 hover:bg-[#F4F7E3]/10 text-[#A9BBA9] hover:text-[#F4F7E3] transition-colors">
							English
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}