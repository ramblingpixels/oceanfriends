import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Catalogue from "./components/Catalogue";
import History from "./components/History";
import Union from "./components/Union";
import CardInfo from "./components/Home/Cards/CardInfo";
import Arrow from "./components/SvgComponents/ArrowSvg";
import Uber from "./components/SvgComponents/UberSvg";
import Music from "./components/SvgComponents/MusicSvg";
import { AnimatePresence } from "framer-motion";

function App() {
	const cards = [
		{
			id: 1,
			number: "5489 7452 5726 9827",
			expiry: "04/24",
			cvv: "123",
			gradient: "linear-gradient(240deg, #1B5CF6, #429EFF, #D33BA7)",
		},
		{
			id: 2,
			number: "5489 9827 7452 5723",
			expiry: "05/25",
			cvv: "456",
			gradient: "linear-gradient(240deg, #F3AC6E, #EC6531, #ED6F2F)",
		},
	];

	const location = useLocation();

	const items = [
		{
			id: 1,
			name: "Card to card",
			recipient: "Maria",
			amount: "+ $143.00",
			date: "20 April",
			icon: <Arrow />,
			gradient: "linear-gradient(#EC5B8F, #DA3181)",
		},
		{
			id: 2,
			name: "Apple Music",
			recipient: "Online",
			amount: "- $467.00",
			date: "20 April",
			icon: <Music />,
			gradient: "linear-gradient(#FEC946, #E9912A)",
		},
		{
			id: 3,
			name: "Uber",
			recipient: "Service",
			amount: "- $467.00",
			date: "20 April",
			icon: <Uber />,
			gradient: "linear-gradient(#3DA2FF, #2167F0)",
		},
		{
			id: 4,
			name: "Uber",
			recipient: "Service",
			amount: "- $43.00",
			date: "20 April",
			icon: <Uber />,
			gradient: "linear-gradient(#3DA2FF, #2167F0)",
		},
		{
			id: 5,
			name: "Card to card",
			recipient: "Maria",
			amount: "- $2467.00",
			date: "20 April",
			icon: <Arrow />,
			gradient: "linear-gradient(#EC5B8F, #DA3181)",
		},
		{
			id: 6,
			name: "Card to card",
			recipient: "Maria",
			amount: "+ $1443.00",
			date: "12 March",
			icon: <Arrow />,
			gradient: "linear-gradient(#EC5B8F, #DA3181)",
		},
		{
			id: 7,
			name: "Uber",
			recipient: "Service",
			amount: "- $43.00",
			date: "12 March",
			icon: <Uber />,
			gradient: "linear-gradient(#3DA2FF, #2167F0)",
		},
		{
			id: 8,
			name: "Card to card",
			recipient: "Maria",
			amount: "- $12.00",
			date: "12 March",
			icon: <Arrow />,
			gradient: "linear-gradient(#EC5B8F, #DA3181)",
		},
	];

	return (
		<div className="container">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home cards={cards} />}></Route>
					<Route path="/catalogue" element={<Catalogue />}></Route>
					<Route path="/history" element={<History items={items} />}></Route>
					<Route path="/union" element={<Union />}></Route>
					<Route
						path="/card/:id"
						element={<CardInfo cards={cards} items={items} />}
					></Route>
				</Routes>
			</AnimatePresence>

			<Navbar />
		</div>
	);
}

export default App;
