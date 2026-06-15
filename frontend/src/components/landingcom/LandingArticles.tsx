import { ARTICLES } from "./landingData";

export default function LandingArticles() {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-40" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-sm font-semibold text-orange-700 mb-4">
						<span className="w-2 h-2 bg-orange-600 rounded-full"></span>
						Career Blog
					</div>
					<h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
						Expert Insights &
						<br />
						<span className="bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Career Tips</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
						Learn from industry experts. Get actionable advice to land your dream job and advance your career.
					</p>
				</div>

				{/* Articles Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{ARTICLES.map((article) => (
						<div
							key={article.title}
							className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-300 transition-all duration-300 hover:scale-105 flex flex-col h-full"
						>
							{/* Image Section */}
							<div className="relative h-48 bg-linear-to-br from-orange-50 to-red-100 flex items-center justify-center overflow-hidden">
								{/* Background */}
								<div className="absolute inset-0 opacity-10 pointer-events-none" />

								{/* Icon/Emoji */}
								<span className="text-6xl group-hover:scale-125 transition-transform duration-300">
									{article.img}
								</span>

								{/* Category Badge */}
								<div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-orange-700">
									<span className="w-2 h-2 bg-orange-600 rounded-full" />
									{article.category}
								</div>
							</div>

							{/* Content Section */}
							<div className="grow p-6 flex flex-col">
								{/* Meta Info */}
								<div className="flex items-center gap-2 text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
									<span className="font-semibold">{article.date}</span>
									<span>•</span>
									<span>By {article.author}</span>
								</div>

								{/* Title */}
								<h3 className="text-lg font-bold text-slate-900 leading-snug mb-4 group-hover:text-orange-600 transition-colors grow">
									{article.title}
								</h3>

								{/* Read More Link */}
								<a
									href="#"
									className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:text-orange-700 group/link transition-colors"
								>
									Read Article
									<span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
								</a>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center">
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold px-8 py-4 rounded-xl transition-all text-base shadow-md hover:shadow-lg"
					>
						View All Articles
						<span>→</span>
					</a>
				</div>
			</div>
		</section>
	);
}