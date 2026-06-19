export default function LandingEmployees() {
	const getImagePath = (imageName: string): string => {
		return new URL(`../../assets/${imageName}`, import.meta.url).href;
	};

	return (
		<section className="py-20 md:py-10 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					
					{/* Left Content */}
					<div className="space-y-8 animate-in slide-in-from-left duration-700">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#E0E7FF] rounded-full px-4 py-2 text-sm font-semibold text-[#4F46E5]">
							<span className="text-base">🎓</span>
							Empowering the next generation
						</div>

						{/* Heading */}
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight">
							Connect with top <br />
							<span className="text-[#6366F1]">student talent</span> for <br />
							your business.
						</h2>

						{/* Description */}
						<p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-xl">
							We bridge the gap between education and industry. Hire motivated university students for part-time roles, allowing them to earn while studying and build their resumes, while you get access to affordable, eager talent.
						</p>

						{/* Features List */}
						<ul className="space-y-5">
							<li className="flex items-center gap-4 group">
								<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
								</div>
								<span className="text-lg font-bold text-[#0F172A]">Flexible hours for students</span>
							</li>
							<li className="flex items-center gap-4 group">
								<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
								</div>
								<span className="text-lg font-bold text-[#0F172A]">Gain real-world experience</span>
							</li>
							<li className="flex items-center gap-4 group">
								<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
								</div>
								<span className="text-lg font-bold text-[#0F172A]">Affordable, motivated talent</span>
							</li>
						</ul>

						{/* Actions */}
						{/* <div className="flex flex-wrap gap-4 pt-4">
							<button className="px-8 py-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95">
								Hire Students
							</button>
							<button className="px-8 py-4 bg-white border-2 border-slate-100 hover:border-slate-200 text-[#0F172A] font-bold rounded-2xl transition-all hover:bg-slate-50">
								Learn More
							</button>
						</div> */}
					</div>

					{/* Right Image */}
					<div className="relative animate-in zoom-in duration-1000">
						{/* Main Image Container */}
						<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
							<img 
								src={getImagePath('parttime.png')} 
								alt="Students working" 
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 to-transparent" />
						</div>

						{/* Floating Stats Card */}
						<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center text-[#6366F1]">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
								</div>
								<div>
									<div className="text-2xl font-black text-[#0F172A]">2,500+</div>
									<div className="text-sm font-bold text-[#64748B]">Students Placed</div>
								</div>
							</div>
						</div>

						{/* Decorative Dots or Shapes can be added here */}
					</div>
				</div>
			</div>
		</section>
	);
}
