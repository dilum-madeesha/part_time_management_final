export default function LandingNewsletter() {
	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/2" />
			</div>

			<div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Main Card */}
				<div className="bg-white rounded-3xl border border-slate-200 p-12 sm:p-16 shadow-xl hover:shadow-2xl transition-all">
					{/* Icon */}
					<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-8 mx-auto">
						📧
					</div>

					{/* Title */}
					<h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 text-center tracking-tight">
						Stay Updated &
						<br />
						Never Miss an Opportunity
					</h2>

					{/* Description */}
					<p className="text-slate-600 text-center mb-8 leading-relaxed max-w-md mx-auto">
						Subscribe to our newsletter and get weekly job alerts, career tips, and industry insights delivered directly to your inbox.
					</p>

					{/* Form */}
					<form className="space-y-4 mb-6" onSubmit={(e) => e.preventDefault()}>
						{/* Email Input */}
						<div className="flex flex-col sm:flex-row gap-3">
							<input
								type="email"
								placeholder="Enter your email address…"
								className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 transition-colors bg-white font-medium"
								required
							/>
							<button
								type="submit"
								className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
							>
								Subscribe
							</button>
						</div>

						{/* Checkbox */}
						<label className="flex items-center gap-2 text-sm text-slate-600">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-blue-600 rounded cursor-pointer"
							/>
							<span>I agree to receive weekly job alerts and career updates</span>
						</label>
					</form>

					{/* Benefits */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
						{[
							{ icon: "✓", text: "Weekly Opportunities" },
							{ icon: "✓", text: "Career Tips" },
							{ icon: "✓", text: "No Spam" }
						].map((benefit) => (
							<div key={benefit.text} className="flex items-center gap-2 text-sm text-slate-700">
								<span className="text-green-600 font-bold">{benefit.icon}</span>
								<span>{benefit.text}</span>
							</div>
						))}
					</div>
				</div>

				{/* Testimonial */}
				<div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center">
					<div className="flex justify-center gap-1 mb-3">
						{Array(5)
							.fill(null)
							.map((_, i) => (
								<span key={i} className="text-yellow-400">★</span>
							))}
					</div>
					<p className="text-slate-700 font-medium mb-3">
						"I landed my dream job 3 weeks after subscribing. The job alerts were incredibly targeted!"
					</p>
					<div className="text-sm text-slate-600">— Priya Sharma, Sr. Developer</div>
				</div>
			</div>
		</section>
	);
}