import Navigation from './Navigation';
import Content from './Content';
import { Container } from 'react-bootstrap';
import PillarsPage from './PillarsPage';
import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Takedown from './Takedown';
import Holding from './Holding';

function App() {
	return (
			<BrowserRouter>
				<ScrollToTop/>
				<Navigation/>
				<Routes>
					<Route path="/" element={<Content/>}></Route>
					<Route path="/dmca-takedown" element={<Takedown/>}></Route>
					<Route path="/brand-contracts" element={<Holding/>}></Route>
					<Route path="/copyright" element={<Holding/>}></Route>
					<Route path="/llc-setup" element={<Holding/>}></Route>
				</Routes>
			</BrowserRouter>
	);
}

export default App;
