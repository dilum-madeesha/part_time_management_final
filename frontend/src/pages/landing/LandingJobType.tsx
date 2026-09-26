import { useMemo, useState } from "react";
import { JOB_TYPES } from "./landingData";

export default function LandingJob() {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeChip, setActiveChip] = useState<string | null>(null);

	const query = searchQuery.trim().toLowerCase();

	const filteredTypes = useMemo(() => {
		if (!query) return JOB_TYPES;
		return JOB_TYPES.filter(
			(type) =>
				type.title.toLowerCase().includes(query) ||
				type.examples.some((ex) => ex.toLowerCase().includes(query))
		);
	}, [query]);

	const handleChipClick = (title: string) => {
		if (activeChip === title) {
			setActiveChip(null);
			setSearchQuery("");
		} else {
			setActiveChip(title);
			setSearchQuery(title);
		}
	};

	const handleInputChange = (value: string) => {
		setSearchQuery(value);
		setActiveChip(null);
	};

	return (
		<section className="py-10 md:py-8 bg-[#F4F7E3]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header — left-aligned, search folded into the same block instead of a centered hero */}
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
					<div className="max-w-xl">
						<h2 className="text-4xl md:text-5xl font-black text-[#14231C] leading-[1.05] mb-4">
							Find work that fits
							<br />
							around your timetable
						</h2>
						<p className="text-base md:text-lg text-[#5B6B5D] leading-relaxed">
							{JOB_TYPES.length} categories, sorted by what students actually
							take on — from a few hours a week to full holiday stints.
						</p>
					</div>

					<div className="w-full lg:w-80 shrink-0">
						<div className="relative">
							<span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6B5D]">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</span>
							<input
								type="text"
								placeholder="Search categories or roles"
								className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#14231C]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#2F6D4F]/30 focus:border-[#2F6D4F] transition-colors text-[#14231C] placeholder:text-[#5B6B5D]/60"
								value={searchQuery}
								onChange={(e) => handleInputChange(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* Quick-filter chips, sourced from the real categories rather than decorative labels */}
				<div className="flex flex-wrap gap-2 mb-6">
					{JOB_TYPES.map((type) => {
						const isActive = activeChip === type.title;
						return (
							<button
								key={type.title}
								type="button"
								onClick={() => handleChipClick(type.title)}
								className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
									isActive
										? "bg-[#14231C] text-white border-[#14231C]"
										: "bg-transparent text-[#14231C] border-[#14231C]/15 hover:border-[#14231C]/40"
								}`}
							>
								{type.title}
							</button>
						);
					})}
				</div>

				{/* Results count — quiet status line, not a banner */}
				{query && (
					<p className="text-sm text-[#5B6B5D] mb-6">
						{filteredTypes.length === 0
							? "No matches"
							: `${filteredTypes.length} ${
									filteredTypes.length === 1 ? "category" : "categories"
							  } matching "${searchQuery}"`}
					</p>
				)}

				{/* Job Types Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{filteredTypes.map((type, index) => (
						<div
							key={index}
							className="relative bg-white rounded-2xl pl-6 pr-6 py-7 border border-[#14231C]/8 hover:border-[#14231C]/15 transition-colors"
						>
							{/* Color rule as structure, not decoration — identifies the category at a glance */}
							<span
								className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
								style={{ backgroundColor: type.color }}
							/>

							<div className="flex items-start justify-between mb-5">
								<span className="text-3xl leading-none">{type.icon}</span>
								<span
									className="text-[11px] font-bold px-2.5 py-1 rounded-full"
									style={{
										backgroundColor: `${type.color}14`,
										color: type.color,
									}}
								>
									{type.examples.length} roles
								</span>
							</div>

							<h3 className="text-lg font-bold text-[#14231C] mb-2">
								{type.title}
							</h3>
							

							{/* Examples as plain inline text, not a row of filled pills */}
							<div className="pt-4 border-t border-[#14231C]/8">
								<p className="text-sm text-[#14231C]/80 leading-relaxed">
									{type.examples.map((example, i) => (
										<span key={i}>
											<span className="hover:text-[#14231C] cursor-default transition-colors">
												{example}
											</span>
											{i < type.examples.length - 1 && (
												<span className="text-[#14231C]/25">
													{"  "}·{"  "}
												</span>
											)}
										</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* No Results State */}
				{filteredTypes.length === 0 && (
					<div className="text-center py-24">
						<p className="text-lg font-bold text-[#14231C] mb-1">
							Nothing matches "{searchQuery}"
						</p>
						<p className="text-[#5B6B5D] mb-6">
							Try a broader term, or clear the search to see everything.
						</p>
						<button
							type="button"
							onClick={() => handleInputChange("")}
							className="text-sm font-semibold text-[#2F6D4F] hover:underline"
						>
							Clear search
						</button>
					</div>
				)}
			</div>
		</section>
	);
}