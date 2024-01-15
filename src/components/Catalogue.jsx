import React from "react";
import DpSvg from "./SvgComponents/DpSvg";
import MobileSvg from "../components/SvgComponents/MobileSvg";
import WifiSvg from "../components/SvgComponents/WifiSvg";
import CarSvg from "../components/SvgComponents/CarSvg";
import HouseSvg from "../components/SvgComponents/HouseSvg";
import FlashSvg from "../components/SvgComponents/FlashSvg";
import { motion } from "framer-motion";

const Catalogue = () => {
	const items = [
		{
			id: 1,
			icon: <MobileSvg />,
			desc: "Mobile",
			amount: "$34.00",
		},
		{
			id: 2,
			icon: <WifiSvg />,
			desc: "Internet and TV",
			amount: "$21.00",
		},
		{
			id: 3,
			icon: <CarSvg />,
			desc: "Traffic Fines",
			amount: "$1,221.00",
		},
		{
			id: 4,
			icon: <HouseSvg />,
			desc: "Housing Services",
			amount: "$0.00",
		},
		{
			id: 5,
			icon: <FlashSvg />,
			desc: "Utility Payment",
			amount: "$442.00",
		},
	];

	return (
		<motion.div
			className="catalogue-content"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="catalogue-header">
				<h1>Catalogue</h1>
				<DpSvg />
			</div>
			<br />

			{items.map((item) => (
				<motion.div
					initial={{ translateY: 10 }}
					animate={{ translateY: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="catalogue-item">
						<span>{item.icon}</span>
						<div>
							{item.desc}
							<br />
							<span>
								The debt is <strong>{item.amount}</strong>{" "}
							</span>
						</div>
						<button
							className={
								// eslint-disable-next-line eqeqeq
								parseInt(item.amount[1]) === 0
									? "disabled-pay-button"
									: "pay-button"
							}
						>
							Pay
						</button>
					</div>
					<hr />
				</motion.div>
			))}
		</motion.div>
	);
};

export default Catalogue;
