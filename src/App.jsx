import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './landing.jsx'
import { Dashboard } from './dashboard/dashboard.jsx'

function App() {
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/app" element={<Dashboard />} />
			</Routes>
        </BrowserRouter>
    )
}
export default App