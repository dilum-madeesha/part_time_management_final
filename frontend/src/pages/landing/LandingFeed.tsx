import { useState } from "react";
import { TESTIMONIALS, STATS } from "./landingData";

export default function LandingFeed() {
	const [active, setActive] = useState(0);
	const featured = TESTIMONIALS[active];

	const nextTestimonial = () => {
		setActive((prev) => (prev + 1) % TESTIMONIALS.length);
	};

	const prevTestimonial = () => {
		setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};

	return (
		<section className="py-20 md:py-10 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header — left-aligned, short */}
				<div className="max-w-xl mb-8">
					<h2 className="text-4xl md:text-5xl font-black text-[#14231C] leading-[1.05] mb-2 italic">
						Real people, real placements
					</h2>
					<p className="text-base md:text-lg text-[#5B6B5D] leading-relaxed">
						Every quote here belongs to a student or employer who actually
						used the platform — not stock copy.
					</p>
				</div>

				{/* Featured quote + stat rail, side by side instead of stacked blocks */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-5 ">
					{/* Featured Card — the one bold move: dark, not white */}
					<div className="lg:col-span-8 bg-[#14231C] rounded-4xl p-8 md:p-12 flex flex-col justify-between min-h-88">
						<div>
							<div className="flex items-center justify-between mb-8">
								<div className="flex gap-1">
									{[...Array(5)].map((_, i) => (
										<span key={i} className="text-[#F2C84B] text-base">
											★
										</span>
									))}
								</div>
								<span className="text-[11px] font-bold text-[#8FB79A] border border-[#8FB79A]/30 rounded-full px-3 py-1">
									Verified placement
								</span>
							</div>

							<p className="text-xl md:text-2xl font-bold text-[#F4F7E3] leading-relaxed max-w-2xl">
								{featured.text}
							</p>
						</div>

						<div className="flex items-center gap-4 mt-10">
							<div className="w-12 h-12 rounded-full bg-[#2F6D4F] flex items-center justify-center text-[#F4F7E3] font-black text-base shrink-0">
								{featured.avatar}
							</div>
							<div>
								<div className="text-base font-bold text-[#F4F7E3]">
									{featured.name}
								</div>
								<div className="text-sm font-semibold text-[#8FB79A]">
									{featured.role}
								</div>
							</div>
						</div>
					</div>

					{/* Stat rail — vertical, quiet, instead of a horizontal icon row */}
					<div className="lg:col-span-4 bg-white rounded-4xl p-8 md:p-10 flex flex-col justify-between">
						<div className="space-y-8">
							{STATS.map((stat, index) => (
								<div
									key={index}
									className={
										index > 0 ? "pt-8 border-t border-[#14231C]/8" : ""
									}
								>
									<div className="text-3xl font-black text-[#14231C] mb-1">
										{stat.value}
									</div>
									<div className="text-sm font-semibold text-[#5B6B5D]">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						{/* Navigation controls moved here — tied to the card they control */}
						<div className="flex items-center justify-between pt-8 mt-8 border-t border-[#14231C]/8">
							<button
								onClick={prevTestimonial}
								aria-label="Previous testimonial"
								className="text-[#14231C]/40 hover:text-[#14231C] transition-colors"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m15 18-6-6 6-6" />
								</svg>
							</button>

							<div className="flex gap-1.5">
								{TESTIMONIALS.map((_, i) => (
									<button
										key={i}
										onClick={() => setActive(i)}
										aria-label={`Show testimonial ${i + 1}`}
										className={`h-1.5 rounded-full transition-all duration-300 ${
											i === active
												? "w-6 bg-[#2F6D4F]"
												: "w-1.5 bg-[#14231C]/15 hover:bg-[#14231C]/30"
										}`}
									/>
								))}
							</div>

							<button
								onClick={nextTestimonial}
								aria-label="Next testimonial"
								className="text-[#14231C]/40 hover:text-[#14231C] transition-colors"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m9 18 6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Secondary testimonials — horizontal scroll rail, not a uniform grid */}
				<div className="pt-10 border-t border-[#14231C]/8">
					<p className="text-sm font-semibold text-[#5B6B5D] mb-5">
						More from the community
					</p>
					<div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin">
						{TESTIMONIALS.filter((_, i) => i !== active).map(
							(testimonial, index) => (
								<button
									key={index}
									type="button"
									onClick={() =>
										setActive(TESTIMONIALS.indexOf(testimonial))
									}
									className="text-left shrink-0 w-72 snap-start bg-white rounded-2xl p-6 border border-[#14231C]/8 hover:border-[#2F6D4F]/40 transition-colors"
								>
									<div className="flex gap-1 mb-4">
										{[...Array(5)].map((_, i) => (
											<span key={i} className="text-[#F2C84B] text-xs">
												★
											</span>
										))}
									</div>

									<p className="text-sm text-[#14231C]/80 leading-relaxed mb-6">
										{testimonial.text}
									</p>

									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-full bg-[#2F6D4F] flex items-center justify-center text-white font-bold text-xs shrink-0">
											{testimonial.avatar}
										</div>
										<div className="min-w-0">
											<div className="text-sm font-bold text-[#14231C] truncate">
												{testimonial.name}
											</div>
											<div className="text-xs font-semibold text-[#5B6B5D] truncate">
												{testimonial.role}
											</div>
										</div>
									</div>
								</button>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}