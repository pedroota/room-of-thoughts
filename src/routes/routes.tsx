import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/LoginPage';
import { Register } from '../pages/RegisterPage';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
