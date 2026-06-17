import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingNav() {
	const [open, setOpen] = useState(false);

	const navLinks = [
		{ label: "Home", href: "#home" },
		{ label: "About Us", href: "#about" },
		{ label: "Services", href: "#services" },
		{ label: "Job Types", href: "#types" },
		{ label: "Contact Us", href: "#contact" }
	];

	return (
		<nav className="sticky top-0 z-50 bg-lime-100 backdrop-blur-xl border-b border-slate-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-16 flex items-center justify-between">
					
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2.5 no-underline group">
						<div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-inner transform group-hover:scale-105 transition-transform">
							<span className="text-white font-black text-xl">S</span>
						</div>
						<div className="flex items-baseline gap-1">
							<span className="font-black text-2xl text-slate-900 tracking-tighter">Smart</span>
							<span className="font-black text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hire</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-base font-medium text-slate-700 hover:text-blue-600 px-5 py-2.5 rounded-xl transition-all hover:bg-blue-50"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* CTA Buttons - Desktop */}
					<div className="hidden md:flex items-center gap-3">
						<Link
							to="/login"
							className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-6 py-2.5 rounded-xl hover:bg-slate-100 transition-all"
						>
							Login
						</Link>
						<Link
							to="/login"
							className="text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
						>
							Register
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
						onClick={() => setOpen(!open)}
						aria-label="Toggle menu"
					>
						<div className="w-6 h-6 flex flex-col justify-center gap-1.5">
							<span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
							<span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
							<span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
						</div>
					</button>
				</div>

				{/* Mobile Navigation */}
				{open && (
					<div className="md:hidden bg-white border-t border-slate-200 px-4 py-5 space-y-2 shadow-lg">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="block text-base font-medium text-slate-700 hover:text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition-all"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
						<div className="flex gap-3 pt-4 border-t border-slate-200">
							<Link
								to="/login"
								className="flex-1 text-center text-blue-600 font-semibold border border-blue-600 py-3 rounded-xl hover:bg-blue-50"
							>
								Login
							</Link>
							<Link
								to="/login"
								className="flex-1 text-center text-white font-semibold bg-linear-to-r from-blue-600 to-indigo-600 py-3 rounded-xl hover:shadow-md"
							>
								Register
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}