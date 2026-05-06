import { STEPS } from "./landingData";

export default function LandingHowItWorks() {
	return (
		<section className="py-20 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Process</span>
					<h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3">How It <span className="text-blue-600">Works</span></h2>
					<p className="text-slate-500 max-w-xl mx-auto">Three simple steps to land your perfect job or hire the right talent.</p>
				</div>
				<div className="grid sm:grid-cols-3 gap-6 relative">
					<div className="hidden sm:block absolute top-14 left-[calc(16.7%+32px)] right-[calc(16.7%+32px)] h-0.5 border-t-2 border-dashed border-blue-200 z-0" />
					{STEPS.map((step, index) => (
						<div key={step.title} className="relative z-10 bg-white rounded-2xl p-7 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow group">
							<div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform group-hover:scale-110" style={{ background: step.color }}>
								{step.icon}
							</div>
							<div className="absolute top-5 right-5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: step.accent }}>
								{index + 1}
							</div>
							<h3 className="text-base font-bold text-slate-800 mb-2">{step.title}</h3>
							<p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}