import { useState } from "react";

type Role = "student" | "employer";

export default function ContactPage() {
	const [role, setRole] = useState<Role>("student");
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (field: keyof typeof form, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Wire this to your actual submit handler / API call.
		setSubmitted(true);
	};

	const contactChannels = [
		{
			label: "Email",
			value: "support@smarthire.lk",
			href: "mailto:support@smarthire.lk",
		},
		{
			label: "Phone",
			value: "+94 11 234 5678",
			href: "tel:+94112345678",
		},
		{
			label: "Office",
			value: "No. 14, Ward Place, Colombo 07",
		},
	];

	return (
		<main className="min-h-screen bg-[#F4F7E3]">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
				{/* Header */}
				<div className="max-w-xl mb-14">
					<h1 className="text-4xl md:text-5xl font-black text-[#14231C] leading-[1.05] mb-4">
						Talk to a real person
					</h1>
					<p className="text-base md:text-lg text-[#5B6B5D] leading-relaxed">
						Whether you're hunting for your first part-time role or hiring
						your next student hire, we usually reply within one business day.
					</p>
				</div>

				{/* Split panel */}
				<div className="grid grid-cols-1 lg:grid-cols-12 rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(20,35,28,0.08)]">
					{/* Left — direct contact info */}
					<div className="lg:col-span-5 bg-[#14231C] p-8 md:p-12 flex flex-col justify-between">
						<div>
							<p className="text-[#F4F7E3] font-bold text-lg mb-8">
								Direct contact
							</p>

							<div className="space-y-6">
								{contactChannels.map((channel, i) => (
									<div
										key={channel.label}
										className={
											i > 0 ? "pt-6 border-t border-[#F4F7E3]/10" : ""
										}
									>
										<p className="text-xs font-semibold text-[#8FB79A] mb-1">
											{channel.label}
										</p>
										{channel.href ? (
											
											<a	href={channel.href}
												className="text-[#F4F7E3] font-semibold hover:text-[#8FB79A] transition-colors"
											>
												{channel.value}
											</a>
										) : (
											<p className="text-[#F4F7E3] font-semibold">
												{channel.value}
											</p>
										)}
									</div>
								))}
							</div>
						</div>

						<div className="pt-10 mt-10 border-t border-[#F4F7E3]/10">
							<p className="text-xs font-semibold text-[#8FB79A] mb-1">
								Office hours
							</p>
							<p className="text-[#F4F7E3] font-semibold">
								Mon – Fri, 9:00 AM – 6:00 PM
							</p>
						</div>
					</div>

					{/* Right — form */}
					<div className="lg:col-span-7 bg-white p-8 md:p-12">
						{submitted ? (
							<div className="h-full flex flex-col items-center justify-center text-center py-16">
								<div className="w-14 h-14 rounded-full bg-[#2F6D4F]/10 flex items-center justify-center mb-5">
									<span className="text-[#2F6D4F] text-2xl">✓</span>
								</div>
								<p className="text-xl font-bold text-[#14231C] mb-2">
									Message sent
								</p>
								<p className="text-[#5B6B5D] max-w-xs">
									We'll get back to you at {form.email || "your email"} within
									one business day.
								</p>
								<button
									type="button"
									onClick={() => {
										setSubmitted(false);
										setForm({ name: "", email: "", message: "" });
									}}
									className="mt-6 text-sm font-semibold text-[#2F6D4F] hover:underline"
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Role toggle — real content the page needs, not decoration */}
								<div>
									<p className="text-sm font-semibold text-[#14231C] mb-3">
										I'm reaching out as a
									</p>
									<div className="flex gap-2">
										{(["student", "employer"] as Role[]).map((r) => (
											<button
												key={r}
												type="button"
												onClick={() => setRole(r)}
												className={`flex-1 py-3 rounded-xl font-semibold text-sm border transition-colors ${
													role === r
														? "bg-[#14231C] text-white border-[#14231C]"
														: "bg-transparent text-[#5B6B5D] border-[#14231C]/15 hover:border-[#14231C]/40"
												}`}
											>
												{r === "student" ? "Student" : "Employer"}
											</button>
										))}
									</div>
								</div>

								<div className="grid sm:grid-cols-2 gap-5">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-semibold text-[#14231C] mb-2"
										>
											Name
										</label>
										<input
											id="name"
											type="text"
											required
											value={form.name}
											onChange={(e) => handleChange("name", e.target.value)}
											className="w-full px-4 py-3 rounded-xl border border-[#14231C]/12 focus:outline-none focus:ring-2 focus:ring-[#2F6D4F]/30 focus:border-[#2F6D4F] transition-colors text-[#14231C]"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-semibold text-[#14231C] mb-2"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											required
											value={form.email}
											onChange={(e) => handleChange("email", e.target.value)}
											className="w-full px-4 py-3 rounded-xl border border-[#14231C]/12 focus:outline-none focus:ring-2 focus:ring-[#2F6D4F]/30 focus:border-[#2F6D4F] transition-colors text-[#14231C]"
											placeholder="you@example.com"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-semibold text-[#14231C] mb-2"
									>
										{role === "student"
											? "What do you need help with?"
											: "Tell us about your hiring need"}
									</label>
									<textarea
										id="message"
										required
										rows={5}
										value={form.message}
										onChange={(e) => handleChange("message", e.target.value)}
										className="w-full px-4 py-3 rounded-xl border border-[#14231C]/12 focus:outline-none focus:ring-2 focus:ring-[#2F6D4F]/30 focus:border-[#2F6D4F] transition-colors text-[#14231C] resize-none"
										placeholder={
											role === "student"
												? "e.g. I can't verify my student ID"
												: "e.g. We're hiring 5 part-time baristas for December"
										}
									/>
								</div>

								<button
									type="submit"
									className="w-full py-3.5 rounded-xl bg-[#14231C] text-white font-bold hover:bg-[#2F6D4F] transition-colors"
								>
									Send message
								</button>
							</form>
						)}
					</div>
				</div>

				{/* Quiet FAQ pointer — avoids duplicating a whole FAQ section here */}
				<p className="text-center text-sm text-[#5B6B5D] mt-10">
					Looking for something specific?{" "}
					
					<a	href="#faq"
						className="font-semibold text-[#2F6D4F] hover:underline"
					>
						Check the FAQ
					</a>{" "}
					before reaching out.
				</p>
			</div>
		</main>
	);
}