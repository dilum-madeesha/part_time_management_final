import { Link } from "react-router-dom";
import parttimeImage from "../../assets/parttime.png";

import careerChart from "../../assets/presnet.png";

import trustShield from "../../assets/lock.png";

export default function LandingHero() {
	return (
		<section className="relative pt-20 pb-32 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src={parttimeImage}
					alt="Part-time jobs background"
					className="w-full h-full object-cover"
				/>
				{/* Overlay for better text readability */}
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-1 items-center">
					{/* Left Content */}
					<div className="flex flex-col justify-center">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6 w-fit hover:bg-white/30 transition-all">
							<span className="w-2 h-2 bg-blue-950 rounded-full animate-pulse"></span>
							<span className="text-white/90">125+ New Part-Time Jobs Posted This Week</span>
						</div>

						{/* Headline */}
						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight text-white">
							Find Your Perfect
							<br />
							<span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Part-Time Job Today</span>
						</h1>

						{/* Subheading */}
						<p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md font-light">
							Connect job seekers with trusted employers and discover flexible part-time opportunities near you.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<Link
								to="/login"
								className="inline-flex items-center justify-center gap-2
  bg-linear-to-r from-blue-600 to-indigo-600
  text-white px-8 py-4 rounded-xl font-bold
  shadow-lg
  transition-all duration-300 ease-in-out
  hover:-translate-y-1
  hover:from-blue-700 hover:to-purple-700
  hover:shadow-2xl"
							>

								Find Jobs
							</Link>
							<a
								href="#"
								className="inline-flex items-center justify-center gap-2
  border-2 border-white/80 text-white
  px-8 py-4 rounded-xl font-bold
  transition-all duration-300 ease-in-out
  hover:-translate-y-1
  hover:bg-white hover:text-blue-700
  hover:border-white
  hover:shadow-xl"
							>
								Post a Job
							</a>
						</div>

						{/* Trust Badges */}
						<div className="flex flex-col sm:flex-row gap-6">
							<div className="flex items-center gap-2">
								<span className="text-green-400 text-2xl">✓</span>
								<span className="text-white/90 font-semibold">JCI Certified Employer</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-blue-400 text-2xl">⭐</span>
								<span className="text-white/90 font-semibold">4.8/5 Rating</span>
							</div>
						</div>
					</div>

					{/* Right Visual - Cards */}
					<div className="hidden lg:flex items-center justify-center relative h-full min-h-96">
						<div className="">
							<div className="relative w-full max-w-sm space-y-6 ">
								{/* Career Opportunities Card */}
								{/* Career Opportunities Card */}
								<div className="relative z-10 space-y-10  ">
									<div className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 overflow-hidden ">

										{/* Header */}
										<div className="flex items-start justify-between mb-4 ">
											<div className="flex items-center gap-3">
												<img
													src={careerChart}
													alt="Career"
													className="w-12 h-12 object-contain"
												/>

												<h3 className="text-white font-bold text-lg">
													Career Opportunities
												</h3>
											</div>



										</div>

										<p className="text-white/75 text-xs leading-relaxed mb-3">
											Discover flexible part-time jobs and career opportunities from
											leading organizations across Sri Lanka.
										</p>

										<div className="flex items-center justify-between text-xs">
											<span className="text-white/50">
												Opportunities Available
											</span>
											<span className="text-blue-300 font-semibold">
												Updated Daily
											</span>
										</div>
									</div>

									<div className="absolute -top-14 -right-14 z-0 opacity-180">
										<div className="w-40 h-40 bg-linear-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl"></div>
										<div className="absolute inset-0 flex items-center justify-center text-10xl">
											{/* Right Side Image */}
											<img
												src={careerChart}
												alt="Career Growth"
												className="w-35 h-35 object-contain "
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="relative w-full max-w-sm space-y-6">
								{/* Trusted Platform Card */}
								<div className=" z-10 space-y-10  ">
									<div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 overflow-hidden">

										{/* Header */}

										<div className="flex items-start justify-between mb-4">
											<div className="flex items-center gap-3">
												<img
													src={trustShield}
													alt="Trusted Platform"
													className="w-12 h-12 object-contain"
												/>

												<div>
													<h3 className="text-white font-bold text-lg">
														Trusted Platform
													</h3>
													<p className="text-white/60 text-xs mt-0.5">
														Verified Employers & Secure Applications
													</p>
												</div>
											</div>

											{/* Right Side Image */}


										</div>

										<p className="text-white/75 text-xs leading-relaxed mb-3">
											Connect with reputable employers and apply confidently through a
											secure and reliable recruitment platform.
										</p>

										<div className="pt-3 border-t border-white/10">
											<button className="text-emerald-400 text-xs font-semibold hover:text-emerald-300 transition-colors">
												Explore Opportunities →
											</button>
										</div>
									</div>
									<div className="absolute -top-14 -right-14 z-30 opacity-180">
										<div className="w-40 h-40 bg-linear-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl"></div>
										<div className="absolute inset-0 flex items-center justify-center text-10xl">
											{/* Right Side Image */}
											<img
												src={trustShield}
												alt="Career Growth"
												className="w-35 h-35 object-contain "
											/>
										</div>
									</div>
								</div>

								{/* Floating Stats */}
								<div className="absolute -bottom-6 -right-6 bg-white/15 backdrop-blur-xl border border-white/25 rounded-xl px-5 py-4 shadow-lg">
									<div className="text-white font-black text-3xl">2.8K</div>
									<div className="text-white/70 text-xs">Active Jobs</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section >
	);
}