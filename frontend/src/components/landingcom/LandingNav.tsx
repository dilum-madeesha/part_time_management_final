import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingNav() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2 no-underline">
					<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
						<span className="text-white font-black text-sm">G</span>
					</div>
					<span className="font-black text-xl text-slate-800 tracking-tight">
						Job<span className="text-blue-600">Net</span>
					</span>
				</Link>
				<div className="hidden md:flex items-center gap-8">
					{["Home", "About", "Jobs", "Contact"].map((label) => (
						<a key={label} href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
							{label}
						</a>
					))}
				</div>
				<div className="hidden md:flex items-center gap-3">
					<Link to="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">
						Login
					</Link>
					<Link to="/login" className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-all shadow-sm">
						Register
					</Link>
				</div>
				<button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)}>
					<span className="block w-5 h-0.5 bg-slate-700 mb-1"></span>
					<span className="block w-5 h-0.5 bg-slate-700 mb-1"></span>
					<span className="block w-5 h-0.5 bg-slate-700"></span>
				</button>
			</div>
			{open && (
				<div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
					{["Home", "About", "Jobs", "Contact"].map((label) => (
						<a key={label} href="#" className="text-sm font-medium text-slate-600">
							{label}
						</a>
					))}
					<div className="flex gap-3 pt-2">
						<Link to="/login" className="flex-1 text-sm font-semibold text-blue-600 border border-blue-600 py-2 rounded-lg text-center">
							Login
						</Link>
						<Link to="/login" className="flex-1 text-sm font-semibold text-white bg-blue-600 py-2 rounded-lg text-center">
							Register
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}