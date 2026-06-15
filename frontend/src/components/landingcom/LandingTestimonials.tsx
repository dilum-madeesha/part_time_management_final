import { useState } from "react";
import { TESTIMONIALS } from "./landingData";

export default function LandingTestimonials() {
	const [active, setActive] = useState(0);
	const testimonial = TESTIMONIALS[active];

	return (
		<section className="py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
			</div>

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white/90 mb-4">
						<span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
						Success Stories
					</div>
					<h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
						Loved by Job Seekers
						<br />
						<span className="bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">& Employers</span>
					</h2>
					<p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
						Real stories from real people who've transformed their careers using our platform.
					</p>
				</div>

				{/* Main Testimonial Card */}
				<div className="relative mb-8">
					{/* Background glow */}
					<div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50" />

					{/* Card */}
					<div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 sm:p-16 transition-all duration-500">
						{/* Quote Icon */}
						<div className="absolute top-8 left-8 text-6xl font-black text-white/10">
							"
						</div>

						{/* Stars */}
						<div className="flex justify-center gap-1 mb-8">
							{Array(testimonial.rating)
								.fill(null)
								.map((_, i) => (
									<span key={i} className="text-yellow-400 text-2xl">★</span>
								))}
						</div>

						{/* Text */}
						<p className="text-center text-white text-xl sm:text-2xl leading-relaxed mb-12 italic font-light">
							"{testimonial.text}"
						</p>

						{/* Author */}
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg">
								{testimonial.avatar}
							</div>
							<div className="text-center">
								<div className="text-white font-bold text-lg">{testimonial.name}</div>
								<div className="text-blue-300 text-sm">{testimonial.role}</div>
							</div>
						</div>

						{/* Quote Close Icon */}
						<div className="absolute bottom-8 right-8 text-6xl font-black text-white/10 rotate-180">
							"
						</div>
					</div>
				</div>

				{/* Dots Navigation */}
				<div className="flex justify-center gap-4">
					{TESTIMONIALS.map((_, index) => (
						<button
							key={index}
							onClick={() => setActive(index)}
							className={`transition-all duration-300 rounded-full ${
								index === active
									? "w-10 h-3 bg-white"
									: "w-3 h-3 bg-white/30 hover:bg-white/60"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Alternative: Show all testimonials in grid on desktop */}
				<div className="hidden lg:grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10">
					{TESTIMONIALS.map((test, idx) => (
						<div
							key={idx}
							onClick={() => setActive(idx)}
							className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
								idx === active
									? "border-yellow-400 bg-yellow-400/10 scale-105"
									: "border-white/20 bg-white/5 hover:border-white/40"
							}`}
						>
							<div className="flex gap-1 mb-3">
								{Array(test.rating)
									.fill(null)
									.map((_, i) => (
										<span key={i} className="text-yellow-400 text-sm">★</span>
									))}
							</div>
							<p className="text-white/80 text-sm mb-4 line-clamp-3">"{test.text}"</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
									{test.avatar}
								</div>
								<div>
									<div className="text-white text-sm font-bold">{test.name}</div>
									<div className="text-white/50 text-xs">{test.role}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}