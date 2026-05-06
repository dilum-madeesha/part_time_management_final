import { useState } from "react";
import { TESTIMONIALS } from "./landingData";

export default function LandingTestimonials() {
	const [active, setActive] = useState(0);
	const testimonial = TESTIMONIALS[active];

	return (
		<section className="py-20 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 left-10 text-9xl font-black text-white leading-none">"</div>
				<div className="absolute bottom-10 right-10 text-9xl font-black text-white leading-none rotate-180">"</div>
			</div>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
				<span className="inline-block text-xs font-bold text-yellow-300 uppercase tracking-widest bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-4">Testimonials</span>
				<h2 className="text-3xl sm:text-4xl font-black text-white mb-12">What A Job Holder<br /><span className="text-yellow-300">Says About Us</span></h2>

				<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-10 mb-8 transition-all duration-500">
					<div className="flex justify-center mb-5">{"⭐".repeat(testimonial.rating).split("").map((star, index) => <span key={index} className="text-yellow-300 text-xl">{star}</span>)}</div>
					<p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 italic max-w-2xl mx-auto">"{testimonial.text}"</p>
					<div className="flex items-center justify-center gap-4">
						<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-lg border-2 border-white/30">{testimonial.avatar}</div>
						<div className="text-left">
							<div className="text-white font-bold text-base">{testimonial.name}</div>
							<div className="text-blue-200 text-sm">{testimonial.role}</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center gap-3">
					{TESTIMONIALS.map((_, index) => <button key={index} onClick={() => setActive(index)} className={`rounded-full transition-all duration-300 ${index === active ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/30 hover:bg-white/60"}`} />)}
				</div>
			</div>
		</section>
	);
}