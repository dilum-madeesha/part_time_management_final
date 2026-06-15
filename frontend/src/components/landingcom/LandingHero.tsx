import { Link } from "react-router-dom";

export default function LandingHero() {
	return (
		<section className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative pt-20 pb-32">
			{/* Background Decorations */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32 pointer-events-none" />
			<div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Hero Content */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					{/* Left Content */}
					<div className="flex flex-col justify-center">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit hover:bg-white/20 transition-all">
							<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
							<span className="text-white/90">2,800+ Active Jobs Right Now</span>
						</div>

						{/* Headline */}
						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
							Find Your Next
							<br />
							<span className="bg-linear-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Part-Time Job</span>
						</h1>

						{/* Subheading */}
						<p className="text-lg text-white/70 mb-8 leading-relaxed max-w-md font-light">
							Connect with thousands of verified employers and secure your ideal role in minutes. Smart matching. Real opportunities. Your success.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<Link
								to="/login"
								className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
							>
								<span>🚀</span>
								Get Started Free
							</Link>
							<a
								href="#learn-more"
								className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all"
							>
								<span>▶</span>
								Watch Demo
							</a>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
							{[
								{ value: "18K+", label: "Active Users" },
								{ value: "840", label: "Companies" },
								{ value: "98%", label: "Success Rate" }
							].map((stat) => (
								<div key={stat.label}>
									<div className="text-2xl font-black text-white">{stat.value}</div>
									<div className="text-xs text-white/60 mt-1">{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Visual */}
					<div className="hidden lg:flex items-center justify-center relative h-full min-h-96">
						{/* Main Illustration */}
						<div className="relative w-full max-w-sm">
							{/* Central Circle */}
							<div className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-indigo-600/30 rounded-3xl blur-2xl -z-10"></div>

							{/* Main Card */}
							<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-6 transform hover:scale-105 transition-transform">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-16 h-16 bg-linear-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
										🎯
									</div>
									<div>
										<div className="text-white font-bold text-lg">React Developer</div>
										<div className="text-white/60 text-sm">@Google • Remote</div>
									</div>
								</div>
								<div className="text-white/90 text-sm mb-4 leading-relaxed">
									"Found my perfect role in just 2 weeks. The matching algorithm is incredibly accurate!"
								</div>
								<div className="flex items-center gap-2">
									<span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
									<span className="text-white/60 text-xs">5.0 Rating</span>
								</div>
							</div>

							{/* Floating Badge 1 */}
							<div className="absolute top-8 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 shadow-xl hover:scale-110 transition-transform">
								<div className="text-xs text-white/60 mb-1">Salary Range</div>
								<div className="text-white font-bold">Rs 95K/mo</div>
							</div>

							{/* Floating Badge 2 */}
							<div className="absolute -bottom-2 -left-6 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-xl px-4 py-3 shadow-xl hover:scale-110 transition-transform">
								<div className="flex items-center gap-2">
									<span className="text-emerald-400 text-lg">✓</span>
									<span className="text-white/90 text-xs font-semibold">Application Matched</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}