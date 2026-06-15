import { STEPS } from "./landingData";

export default function LandingHowItWorks() {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 -translate-x-1/2" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/2" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 text-sm font-semibold text-emerald-700 mb-4">
						<span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
						4 Simple Steps
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
						Get Hired in
						<br />
						<span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">4 Simple Steps</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Our streamlined process makes landing your perfect job faster and easier than ever before.
					</p>
				</div>

				{/* Steps Timeline */}
				<div className="grid sm:grid-cols-4 gap-6 relative">
					{/* Connecting Line */}
					<div className="hidden sm:block absolute top-20 left-[12%] right-[12%] h-1 bg-linear-to-r from-transparent via-slate-200 to-transparent z-0" />

					{/* Steps */}
					{STEPS.map((step, index) => (
						<div key={step.title} className="relative z-10">
							{/* Card */}
							<div className="bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
								{/* Number Badge */}
								<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
									{index + 1}
								</div>

								{/* Icon */}
								<div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 mt-4" style={{ background: step.color }}>
									{step.icon}
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-slate-600 text-sm leading-relaxed text-center grow">
									{step.desc}
								</p>

								{/* Divider for visual flow */}
								{index < STEPS.length - 1 && (
									<div className="mt-6 pt-6 border-t border-slate-100">
										<div className="flex justify-center">
											<span className="text-slate-400 text-xl">→</span>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
					{/* Background decoration */}
					<div className="absolute inset-0 opacity-10 pointer-events-none">
						<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
					</div>

					<div className="relative z-10">
						<h3 className="text-3xl font-black mb-4">Ready to Start?</h3>
						<p className="text-white/70 mb-8 max-w-md mx-auto">
							Join thousands of job seekers who've already found their dream roles through our platform.
						</p>
						<a
							href="#"
							className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
						>
							Create Free Account
							<span>→</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}