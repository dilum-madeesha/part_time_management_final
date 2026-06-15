import { BENEFITS } from "./landingData";

export default function LandingBenefits() {
	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 rounded-full px-4 py-2 text-sm font-semibold text-indigo-700 mb-4">
						<span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
						Why Choose Us
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
						Benefits Designed
						<br />
						<span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">For Everyone</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Whether you're seeking opportunities or hiring talent, we've built features to make your journey seamless and successful.
					</p>
				</div>

				{/* Benefits Grid */}
				<div className="grid lg:grid-cols-2 gap-8">
					{BENEFITS.map((benefit, index) => (
						<div
							key={benefit.title}
							className="group relative rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all duration-300"
							style={{ backgroundColor: benefit.bgColor }}
						>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
								background: `linear-gradient(135deg, ${benefit.color}08, ${benefit.color}04)`
							}} />

							{/* Content */}
							<div className="relative p-10 sm:p-12">
								{/* Icon & Title */}
								<div className="flex items-start gap-4 mb-8">
									<div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{
										backgroundColor: `${benefit.color}20`
									}}>
										{benefit.icon}
									</div>
									<h3 className="text-2xl font-black text-slate-900 pt-2">
										{benefit.title}
									</h3>
								</div>

								{/* Benefits List */}
								<ul className="space-y-3">
									{benefit.benefits.map((item, idx) => (
										<li key={idx} className="flex items-start gap-3">
											{/* Checkmark */}
											<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{
												backgroundColor: `${benefit.color}20`
											}}>
												<span style={{ color: benefit.color }} className="text-sm font-bold">✓</span>
											</div>
											{/* Text */}
											<span className="text-slate-700 font-medium leading-relaxed">
												{item}
											</span>
										</li>
									))}
								</ul>

								{/* CTA Button */}
								<button
									className="mt-8 w-full py-3 px-6 rounded-xl font-bold transition-all transform hover:scale-105 text-white"
									style={{ backgroundColor: benefit.color }}
									onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
									onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
								>
									Get Started
									<span className="ml-2">→</span>
								</button>
							</div>

							{/* Hover Effect Border */}
							<div className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
								borderColor: benefit.color
							}} />
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center hover:shadow-xl transition-all">
					<h3 className="text-2xl font-black text-slate-900 mb-4">
						Both Job Seekers & Employers Love Us
					</h3>
					<p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
						Our platform has revolutionized how people find jobs and how companies discover talent. Join thousands of successful matches every month.
					</p>
					<div className="grid grid-cols-3 gap-6">
						{[
							{ value: "98%", label: "Satisfaction Rate" },
							{ value: "72h", label: "Avg. Time to Hire" },
							{ value: "2.4K", label: "Monthly Placements" }
						].map((stat) => (
							<div key={stat.label}>
								<div className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</div>
								<div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
