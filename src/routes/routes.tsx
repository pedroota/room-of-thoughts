import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Dashboard } from '../pages/Dashboard';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="*" element={<h1>Página não encontrada</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
