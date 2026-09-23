import { useState, useEffect } from "react";
import { SERVICES } from "./landingData";

export default function LandingServices() {
	const [selectedService, setSelectedService] = useState(SERVICES[0]);
	
	const [isModalOpen, setIsModalOpen] = useState(false);

	const getImagePath = (imageName?: string): string => {
		if (!imageName) return "";
		return new URL(`../../../assets/${imageName}`, import.meta.url).href;
	};

	const activeIndex = SERVICES.findIndex(
		(s) => s.title === selectedService.title
	);

	const stats = [
		{ value: "10K+", label: "Active Students" },
		{ value: "500+", label: "Partner Employers" },
		{ value: "98%", label: "Match Success Rate" },
	];

	// Lock background scroll while modal is open, and allow Esc to close
	useEffect(() => {
		if (!isModalOpen) return;
		document.body.style.overflow = "hidden";
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsModalOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isModalOpen]);

	return (
		<section className="relative py-10 md:py-5 bg-emerald-50 overflow-hidden">
			{/* Decorative background accents */}
			<div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-32 -left-32 w-md h-112 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-14 md:mb-8">
					<span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full mb-2 tracking-wide uppercase">
						<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
						What We Offer
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-2 italic">
						Everything You Need
						<br />
						{/* <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent not-italic">
							Built for Student Life
						</span> */}
					</h2>
					<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
						From your first application to your first paycheck — powerful
						tools designed to simplify job searching and recruitment for
						students, on your schedule.
					</p>

					{/* Stat strip */}
					<div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-2">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-xl md:text-2xl font-extrabold text-slate-900">
									{stat.value}
								</div>
								<div className="text-xs md:text-sm text-slate-500 font-medium">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Content Grid — 18 columns, spans sum to 18 (8 + 10) */}
				<div className="grid grid-cols-1 lg:grid-cols-18 gap-8 lg:gap-10 items-start">
					{/* Left Column: Featured Service Detail */}
					<div className="lg:col-span-8">
						<div className="relative group rounded-4xl overflow-hidden shadow-2xl shadow-emerald-900/10 mb-6 bg-slate-100 ring-1 ring-slate-200">
							<img
								src={getImagePath(selectedService.image)}
								alt={selectedService.title}
								key={selectedService.title}
								className="w-full aspect-16/10 object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in zoom-in-95"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-transparent pointer-events-none" />

							{/* Floating index badge */}
							<div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
								<span className="text-emerald-600 font-bold text-sm">
									{String(activeIndex + 1).padStart(2, "0")}
								</span>
								<span className="text-slate-400 text-sm">
									/ {String(SERVICES.length).padStart(2, "0")}
								</span>
							</div>
						</div>

						<div className="space-y-6">
							<span className="inline-block text-emerald-600 font-bold text-sm tracking-widest uppercase">
								{selectedService.tag}
							</span>
							<h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
								{selectedService.title}
							</h3>
							<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl">
								{selectedService.desc}
							</p>

							{/* {selectedService.highlights && (
								<ul className="grid sm:grid-cols-2 gap-3 pt-2">
									{selectedService.highlights.map((point) => (
										<li
											key={point}
											className="flex items-start gap-2 text-slate-600 text-base"
										>
											<span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
												✓
											</span>
											{point}
										</li>
									))}
								</ul>
							)} */}

							<div className="pt-4">
								{/* Now opens the modal instead of navigating to "#" */}
								<button
									type="button"
									onClick={() => setIsModalOpen(true)}
									className="group inline-flex items-center bg-slate-900 text-white font-bold text-base px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors"
								>
									View Full Details
									<span className="ml-2 transition-transform group-hover:translate-x-1">
										→
									</span>
								</button>
							</div>

							
						</div>
					</div>

					{/* Right Column */}
					<div className="lg:col-span-10 space-y-3">
						{SERVICES.map((service, index) => {
							const isActive = selectedService.title === service.title;
							return (
								<div
									key={index}
									onClick={() => {
										setSelectedService(service);
										
									}}
									className={`group relative flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
										isActive
											? "bg-white shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-100"
											: "hover:bg-white/70"
									}`}
								>
									<span
										className={`absolute left-0 top-0 h-full w-1 bg-emerald-500 transition-transform duration-300 ${
											isActive ? "scale-y-100" : "scale-y-0"
										}`}
									/>
									<div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
										<img
											src={getImagePath(service.image)}
											alt={service.title}
											className={`w-full h-full object-cover transition-transform duration-500 ${
												isActive ? "scale-110" : "group-hover:scale-110"
											}`}
										/>
									</div>
									<div className="flex-1 min-w-0">
										<span
											className={`block text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 ${
												isActive ? "text-emerald-600" : "text-slate-400"
											}`}
										>
											{service.tag}
										</span>
										<h4
											className={`text-base md:text-lg font-bold transition-colors truncate ${
												isActive
													? "text-slate-900"
													: "text-slate-600 group-hover:text-slate-900"
											}`}
										>
											{service.title}
										</h4>
										{service.desc && (
											<p className="text-sm text-slate-400 truncate mt-0.5">
												{service.desc}
											</p>
										)}
									</div>
									<span
										className={`text-lg transition-all shrink-0 ${
											isActive
												? "text-emerald-500 translate-x-0 opacity-100"
												: "text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
										}`}
									>
										→
									</span>
								</div>
							);
						})}

						
					</div>
				</div>
			</div>

			{/* Full Details Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-labelledby="service-modal-title"
				>
					{/* Backdrop — click outside to close */}
					<div
						className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
						onClick={() => setIsModalOpen(false)}
					/>

					{/* Modal box */}
					<div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
						{/* Close button */}
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							aria-label="Close"
							className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-slate-500 hover:bg-slate-100 hover:text-slate-900 shadow-sm transition-colors"
						>
							✕
						</button>

						{/* Hero image */}
						<div className="relative">
							<img
								src={getImagePath(selectedService.image)}
								alt={selectedService.title}
								className="w-full aspect-video object-cover rounded-t-3xl"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent rounded-t-3xl pointer-events-none" />
							<span className="absolute bottom-4 left-6 text-emerald-300 font-bold text-xs tracking-widest uppercase">
								{selectedService.tag}
							</span>
						</div>

						{/* Body */}
						<div className="p-6 md:p-8 space-y-6">
							<h3
								id="service-modal-title"
								className="text-2xl md:text-3xl font-extrabold text-slate-900"
							>
								{selectedService.title}
							</h3>

							<p className="text-slate-600 leading-relaxed">
								{selectedService.desc}
							</p>

							{/* {selectedService.highlights && (
								<div>
									<p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
										What's included
									</p>
									<ul className="grid sm:grid-cols-2 gap-3">
										{selectedService.highlights.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2 text-slate-600 text-sm"
											>
												<span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
													✓
												</span>
												{point}
											</li>
										))}
									</ul>
								</div>
							)} */}

							{/* Related services — everything except the one currently open */}
							<div className="pt-4 border-t border-slate-100">
								<p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
									Related services
								</p>
								<div className="flex flex-wrap gap-3">
									{SERVICES.filter(
										(s) => s.title !== selectedService.title
									).map((s) => (
										<button
											key={s.title}
											type="button"
											onClick={() => setSelectedService(s)}
											className="flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-slate-50 hover:bg-emerald-50 ring-1 ring-slate-200 hover:ring-emerald-200 transition-colors text-sm font-semibold text-slate-600 hover:text-emerald-700"
										>
											<span className="w-7 h-7 rounded-full overflow-hidden shrink-0">
												<img
													src={getImagePath(s.image)}
													alt={s.title}
													className="w-full h-full object-cover"
												/>
											</span>
											{s.title}
										</button>
									))}
								</div>
							</div>

							{/* Actions */}
							<div className="flex gap-3 pt-2">
								
								{/* <a	href="#"
									className="flex-1 text-center bg-slate-900 text-white font-bold py-3 rounded-full hover:bg-emerald-600 transition-colors"
								>
									Get Started
								</a> */}
								<button
									type="button"
									onClick={() => setIsModalOpen(false)}
									className="px-6 py-3 rounded-full ring-1 ring-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}