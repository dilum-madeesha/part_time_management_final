export default function LandingNewsletter() {
	return (
		<section className="py-16 bg-slate-50 border-t border-slate-100">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
				<div className="text-3xl mb-4">📩</div>
				<h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Subscribe To Our Newsletter</h2>
				<p className="text-slate-500 text-sm mb-8">Get the latest job alerts, career tips, and industry news delivered to your inbox.</p>
				<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
					<input className="flex-1 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors bg-white" placeholder="Enter your email address…" type="email" />
					<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm text-sm whitespace-nowrap">Subscribe Now</button>
				</div>
			</div>
		</section>
	);
}