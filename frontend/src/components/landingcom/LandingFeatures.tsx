import { FEATURES } from "./landingData";

export default function LandingFeatures() {
	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
						<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
						Powerful Features
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
						Everything You Need to
						<br />
						<span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Succeed</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Access a suite of powerful tools designed to accelerate your job search and land the perfect opportunity faster than ever before.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURES.map((feature, index) => (
						<div
							key={feature.title}
							className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							{/* Icon */}
							<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-100 transition-colors">
								{feature.icon}
							</div>

							{/* Counter */}
							<div className="absolute top-6 right-6 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
								{String(index + 1).padStart(2, "0")}
							</div>

							{/* Title */}
							<h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
								{feature.title}
							</h3>

							{/* Description */}
							<p className="text-slate-600 leading-relaxed mb-6">
								{feature.desc}
							</p>

							{/* Learn More Link */}
							<a
								href="#"
								className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 group/link"
							>
								Learn more
								<span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
							</a>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-16 text-center">
					<p className="text-slate-600 mb-4">Ready to transform your job search?</p>
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
					>
						Start Your Free Trial
						<span>→</span>
					</a>
				</div>
			</div>
		</section>
	);
}
