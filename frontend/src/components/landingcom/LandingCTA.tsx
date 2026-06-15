export default function LandingCTA() {
	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background with gradient */}
			<div className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 pointer-events-none" />

			{/* Decorative elements */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
			</div>

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
				{/* Content */}
				<div className="text-white">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-sm font-semibold mb-6 hover:bg-white/30 transition-all">
						<span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
						Ready to Start?
					</div>

					{/* Headline */}
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
						Don't Let Your Dream Job
						<br />
						<span className="text-yellow-200">Pass You By</span>
					</h2>

					{/* Subheading */}
					<p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
						Join thousands of successful job seekers. Get access to exclusive opportunities, personalized recommendations, and career guidance from industry experts.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<a
							href="#"
							className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-yellow-100 text-lg px-8 py-4 rounded-xl font-bold shadow-2xl transition-all transform hover:scale-105"
						>
							<span>🚀</span>
							Start Your Free Account
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl font-bold transition-all"
						>
							<span>📖</span>
							Learn More
						</a>
					</div>

					{/* Trust Indicator */}
					<div className="mt-12 pt-8 border-t border-white/20 inline-block">
						<p className="text-white/70 text-sm mb-3">Trusted by</p>
						<div className="flex gap-6 items-center justify-center">
							{["Google", "Microsoft", "Amazon", "Adobe", "Gojek"].map((company) => (
								<span key={company} className="text-white/50 text-xs font-semibold">
									{company}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
