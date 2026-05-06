import { ARTICLES } from "./landingData";

export default function LandingArticles() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">Blog</span>
					<h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3">Latest <span className="text-blue-600">Articles</span></h2>
					<p className="text-slate-500 max-w-xl mx-auto">Career advice, interview tips, and industry insights to help you succeed.</p>
				</div>
				<div className="grid sm:grid-cols-3 gap-6">
					{ARTICLES.map((article) => (
						<div key={article.title} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="h-44 bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-6xl relative">
								{article.img}
								<span className="absolute top-4 left-4 text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full">{article.category}</span>
							</div>
							<div className="p-5">
								<div className="flex items-center gap-2 text-xs text-slate-400 mb-3"><span>{article.date}</span><span>•</span><span>By {article.author}</span></div>
								<h3 className="text-base font-bold text-slate-800 leading-snug mb-4 group-hover:text-blue-600 transition-colors">{article.title}</h3>
								<button className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">Read More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span></button>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-10">
					<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-xl transition-all text-sm">View All Articles →</button>
				</div>
			</div>
		</section>
	);
}