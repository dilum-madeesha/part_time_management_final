import { TEAM_MEMBERS } from "./landingData";

export default function LandingAbout() {
	return (
		<section className="py-20 md:py-10 bg-lime-100 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Section Header */}
				<div className="text-center mb-16 md:mb-15">
					<h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">
						Meet the Team Behind <span className="text-[#6366F1]">UniTalent</span>
					</h2>
					<p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
						We are a dedicated group of professionals committed to empowering students and helping businesses thrive through accessible part-time opportunities.
					</p>
				</div>

				{/* Team Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
					{TEAM_MEMBERS.map((member, index) => (
						<div 
							key={index}
							className="group flex flex-col items-center text-center p-8 rounded-4xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
						>
							{/* Avatar Container */}
							<div className="relative mb-8">
								<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-8 ring-slate-50 group-hover:ring-[#6366F1]/10 transition-all duration-500">
									<img 
										src={member.avatar} 
										alt={member.name}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
							</div>

							{/* Info */}
							<div className="space-y-3 mb-8">
								<h3 className="text-2xl font-black text-[#0F172A] group-hover:text-[#6366F1] transition-colors">
									{member.name}
								</h3>
								<div className="text-[#6366F1] font-bold text-sm tracking-widest uppercase">
									{member.role}
								</div>
								<p className="text-[#64748B] leading-relaxed text-base">
									{member.bio}
								</p>
							</div>

							{/* Social Links */}
							<div className="flex items-center gap-4 mt-auto">
								{member.socials.map((social, i) => (
									<a 
										key={i}
										href={social.url}
										className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#6366F1] hover:text-white transition-all transform hover:scale-110"
									>
										{social.platform === 'linkedin' && (
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
										)}
										{social.platform === 'twitter' && (
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
										)}
										{social.platform === 'github' && (
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
										)}
									</a>
								))}
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
