import React from "react";
import DpSvg from "../SvgComponents/DpSvg";
import Cards from "./Cards/Cards";

const Home = ({ cards }) => {
	return (
		<div className="home-content">
			<div className="home-header">
				<div>
					<h1>Bank Cards</h1>
				</div>
				<DpSvg />
			</div>
			<h3>Balance</h3>
			<h2>$2,748.00</h2>

			<Cards cards={cards} />
		</div>
	);
};

export default Home;
