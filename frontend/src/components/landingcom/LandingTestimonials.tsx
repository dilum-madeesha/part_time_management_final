import { useState } from "react";
import { TESTIMONIALS, STATS } from "./landingData";

export default function LandingTestimonials() {
	const [active, setActive] = useState(0);
	const featured = TESTIMONIALS[active];

	const nextTestimonial = () => {
		setActive((prev) => (prev + 1) % TESTIMONIALS.length);
	};

	const prevTestimonial = () => {
		setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};

	return (
		<section className="py-20 md:py-28 bg-green-100 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">
						Loved by Job Seekers <br />
						<span className="text-[#FBBF24]">& Employers</span>
					</h2>
					<p className="text-lg text-[#64748B] max-w-2xl mx-auto">
						Real stories from real people who've transformed their careers using our platform.
					</p>
				</div>

				{/* Stats Bar */}
				<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
					{STATS.map((stat, index) => (
						<div key={index} className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-full bg-[#EEF2FF] flex items-center justify-center text-xl">
								{stat.icon}
							</div>
							<div>
								<div className="text-2xl font-black text-[#0F172A]">{stat.value}</div>
								<div className="text-sm font-bold text-[#64748B] uppercase tracking-wider">{stat.label}</div>
							</div>
						</div>
					))}
				</div>

				{/* Featured Testimonial Slider */}
				<div className="relative max-w-5xl mx-auto mb-20">
					{/* Featured Card */}
					<div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden transition-all duration-500">
						{/* Quote Decoration */}
						<div className="absolute top-10 right-10 text-[10rem] font-black text-slate-50 leading-none select-none">
							"
						</div>

						{/* Content */}
						<div className="relative z-10">
							{/* Stars */}
							<div className="flex gap-1 mb-8">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-[#FBBF24] text-xl">★</span>
								))}
							</div>

							{/* Quote Text */}
							<p className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-relaxed mb-12 max-w-4xl">
								"{featured.text}"
							</p>

							{/* Author Info */}
							<div className="flex items-center gap-5">
								<div className="w-16 h-16 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-100">
									{featured.avatar}
								</div>
								<div>
									<div className="text-xl font-black text-[#0F172A]">{featured.name}</div>
									<div className="text-[#2563EB] font-bold text-sm">{featured.role}</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Controls */}
					<div className="flex items-center justify-center gap-8 mt-10">
						<button 
							onClick={prevTestimonial}
							className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-all"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
						</button>

						<div className="flex gap-3">
							{TESTIMONIALS.map((_, i) => (
								<button 
									key={i}
									onClick={() => setActive(i)}
									className={`transition-all duration-300 rounded-full ${i === active ? 'w-10 h-3 bg-[#2563EB]' : 'w-3 h-3 bg-slate-200 hover:bg-slate-300'}`}
								/>
							))}
						</div>

						<button 
							onClick={nextTestimonial}
							className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-all"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
						</button>
					</div>
				</div>

				{/* Testimonials Grid (Desktop only or all) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
					{TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3).map((testimonial, index) => (
						<div 
							key={index}
							className="bg-[#CBD5E1]/30 p-8 rounded-4xl border border-transparent hover:border-slate-200 transition-all duration-300"
						>
							<div className="flex gap-1 mb-5">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-[#FBBF24] text-sm">★</span>
								))}
							</div>
							
							<p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
								"{testimonial.text}"
							</p>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
									{testimonial.avatar}
								</div>
								<div>
									<div className="text-base font-black text-[#0F172A]">{testimonial.name}</div>
									<div className="text-[#2563EB] font-bold text-xs truncate max-w-37.5">
										{testimonial.role}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
