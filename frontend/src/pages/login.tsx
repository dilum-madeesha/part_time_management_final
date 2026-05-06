import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		// TODO: replace with real auth
		if (email && password) {
			navigate('/');
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-50">
			<div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
				<h1 className="text-2xl font-semibold mb-6 text-center">Sign in</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border rounded"
							required
						/>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border rounded"
							required
						/>
					</div>
					<button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded">Sign in</button>
				</form>
				<p className="mt-4 text-center text-sm text-slate-600">
					Back to <Link to="/" className="text-indigo-600">home</Link>
				</p>
			</div>
		</div>
	);
}
