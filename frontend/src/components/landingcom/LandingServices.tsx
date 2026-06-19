import { useState } from "react";
import { SERVICES } from "./landingData";

export default function LandingServices() {
	const [selectedService, setSelectedService] = useState(SERVICES[0]);

	const getImagePath = (imageName?: string): string => {
		if (!imageName) return "";
		return new URL(`../../assets/${imageName}`, import.meta.url).href;
	};

	return (
		<section className="py-20 md:py-10 bg-lime-100 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				
				{/* Header Section */}
				<div className="text-center mb-10 md:mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#0F172A] leading-tight mb-1">
						Everything You Need
						<br />
						<span className="text-[#6366F1]">Services Providing</span>
					</h2>
					<p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
						Powerful tools designed to simplify job searching and recruitment.
					</p>
				</div>

				{/* Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					
					{/* Left Column: Featured Service Detail */}
					<div className="lg:col-span-8 transition-all duration-500 ease-in-out">
						<div className="relative group rounded-4xl overflow-hidden shadow-2xl mb-10 bg-slate-100">
							<img 
								src={getImagePath(selectedService.image)} 
								alt={selectedService.title}
								key={selectedService.title}
								className="w-full aspect-16/10 object-cover transition-transform duration-500 group-hover:scale-105 animate-in fade-in zoom-in-95"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
						</div>

						<div className="space-y-6">
							<span className="inline-block text-[#6366F1] font-bold text-sm tracking-widest uppercase">
								{selectedService.tag}
							</span>
							<h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
								{selectedService.title}
							</h3>
							<p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl">
								{selectedService.desc}
							</p>
							<div className="pt-4">
								<a 
									href="#" 
									className="group inline-flex items-center text-[#10B981] font-bold text-lg hover:text-[#059669] transition-colors"
								>
									View Full Details
									<span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
								</a>
							</div>
						</div>
					</div>

					{/* Right Column: Service Navigation List */}
					<div className="lg:col-span-4 space-y-4">
						{SERVICES.map((service, index) => {
							const isActive = selectedService.title === service.title;
							return (
								<div 
									key={index}
									onClick={() => setSelectedService(service)}
									className={`group flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
										isActive 
										? 'bg-slate-50 shadow-md ring-1 ring-slate-100' 
										: 'hover:bg-slate-50'
									}`}
								>
									{/* Thumbnail Image */}
									<div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
										<img 
											src={getImagePath(service.image)} 
											alt={service.title}
											className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
										/>
									</div>

									{/* Item Info */}
									<div className="flex-1">
										<span className={`block text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-[#6366F1]' : 'text-slate-400'}`}>
											{service.tag}
										</span>
										<h4 className={`text-base md:text-lg font-bold transition-colors ${isActive ? 'text-[#0F172A]' : 'text-slate-600 group-hover:text-[#0F172A]'}`}>
											{service.title}
										</h4>
									</div>
								</div>
							);
						})}
					</div>

				</div>
			</div>
		</section>
	);
}
