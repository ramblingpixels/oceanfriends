import React from "react";
import DpSvg from "../SvgComponents/DpSvg";
import Cards from "./Cards/Cards";
// import transition from "../../transition";
import { motion } from "framer-motion";

const Home = ({ cards }) => {
	console.log(cards);
	return (
		<motion.div
			className="home-content "
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 0.3 }}
		>
			<div className="home-header">
				<div>
					<h1>Bank Cards</h1>
				</div>
				<DpSvg />
			</div>
			<h3>Balance</h3>
			<h2>$2,748.00</h2>

			<Cards cards={cards} />
		</motion.div>
	);
};

export default Home;
