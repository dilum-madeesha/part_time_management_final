import { useState } from "react";
import { SERVICES } from "./landingData";

export default function LandingServices() {
	const [selectedService, setSelectedService] = useState<any>(null);

	const getImagePath = (imageName?: string): string => {
		if (!imageName) return "";
		return new URL(`../../assets/${imageName}`, import.meta.url).href;
	};

	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">

			{/* Background Decorations */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				{/* Header */}
				<div className="text-center mb-10">
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
						Everything You Need
						<br />
						<span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Services Providing
						</span>
					</h2>

					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Powerful tools designed to simplify job searching and recruitment.
					</p>
				</div>

				{/* ZIG ZAG ROWS */}
				<div className="space-y-10">

					{SERVICES.map((service, index) => (
						<div
							key={service.title}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-5 items-center`}
						>

							{/* IMAGE LEFT (even rows) */}
							{index % 2 === 0 && (
								<div className="flex justify-center">
									<div
										className="w-full max-w-md h-80 rounded-2xl flex items-center justify-center text-6xl overflow-hidden"
										style={{
											background: `linear-gradient(135deg, ${service.color}20, white)`
										}}
									>
										{service.image ? (
											<img
												src={getImagePath(service.image)}
												alt={service.title}
												className="w-full h-full object-cover"
											/>
										) : (
											service.icon
										)}
									</div>
								</div>
							)}

							{/* CONTENT */}
							<div
								className={`bg-white rounded-3xl p-10 shadow-lg border border-slate-200 hover:shadow-2xl transition-all cursor-pointer`}
								onClick={() => setSelectedService(service)}
							>
								<div
									className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
									style={{
										backgroundColor: `${service.color}20`,
									}}
								>
									{service.icon}
								</div>

								<h3 className="text-3xl font-bold text-slate-900 mb-4">
									{service.title}
								</h3>

								<p className="text-slate-600 leading-relaxed text-lg">
									{service.desc}
								</p>

								<div
									className="mt-6 font-semibold"
									style={{ color: service.color }}
								>
									View Full Details →
								</div>
							</div>

							{/* IMAGE RIGHT (odd rows) */}
							{index % 2 !== 0 && (
								<div className="flex justify-center">
									<div
										className="w-full max-w-md h-80 rounded-3xl flex items-center justify-center text-6xl shadow-lg overflow-hidden"
										style={{
											background: `linear-gradient(135deg, ${service.color}20, white)`
										}}
									>
										{service.image ? (
											<img
												src={getImagePath(service.image)}
												alt={service.title}
												className="w-full h-full object-cover"
											/>
										) : (
											service.icon
										)}
									</div>
								</div>
							)}

						</div>
					))}
				</div>

				{/* MODAL */}
				{/* {selectedService && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
						onClick={() => setSelectedService(null)}
					>
						<div
							className="bg-white rounded-3xl max-w-xl w-full p-8 relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setSelectedService(null)}
								className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
							>
								✕
							</button>

							<div
								className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mb-6"
								style={{
									backgroundColor: `${selectedService.color}20`,
								}}
							>
								{selectedService.icon}
							</div>

							<h2 className="text-3xl font-bold mb-4">
								{selectedService.title}
							</h2>

							<p className="text-slate-600 text-lg leading-relaxed">
								{selectedService.desc}
							</p>
						</div>
					</div>
				)} */}
			</div>
		</section>
	);
}