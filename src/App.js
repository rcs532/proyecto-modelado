import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Rectangulos from "./pages/Rectangulos/Rectangulos";
import Trapecios from "./pages/Trapecios";
import Simpson from "./pages/Simpson";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Rectangulos" element={<Rectangulos />} />
					<Route path="/Trapecios" element={<Trapecios />} />
					<Route path="/Simpson" element={<Simpson />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
