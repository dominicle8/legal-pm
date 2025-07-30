import Navigation from './Navigation';
import Content from './Content';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import Takedown from './Takedown';
import Holding from './Holding';
import Footer from './Footer';

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
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
