import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import ImageSlide from "./components/ImageSlide/ImageSlide";

function App() {
	return (
		<div className="App">
			<Header />
			<ImageSlide />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
