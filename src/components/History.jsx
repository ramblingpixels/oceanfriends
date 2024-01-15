import React, { useState, useEffect } from "react";
import DpSvg from "./SvgComponents/DpSvg";
import { motion } from "framer-motion";

const History = ({ items }) => {
	let currentDate = null;

	const [scrollDirection, setScrollDirection] = useState("down");
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;

			if (currentPosition > scrollPosition) {
				setScrollDirection("up");
			} else if (currentPosition < scrollPosition) {
				setScrollDirection("down");
			}

			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	const translateStyle = {
		transform: `translateY(${scrollDirection === "up" ? "-30%" : "0"})`,
		transition: "transform 0.5s ease",
	};

	return (
		<motion.div
			className="history-content"
			style={translateStyle}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="history-header">
				<h1>History</h1>
				<DpSvg />
			</div>
			<br />

			{items.map((item) => {
				const transactionDate = item.date;

				const dateHeader =
					transactionDate !== currentDate ? (
						<h4 key={transactionDate} className="date-header">
							{transactionDate}
						</h4>
					) : null;

				currentDate = transactionDate;

				return (
					<motion.div
						initial={{ translateY: 10 }}
						animate={{ translateY: 0 }}
						transition={{ duration: 0.3 }}
					>
						{dateHeader}

						<div className="history-item" key={item.id}>
							<span style={{ background: item.gradient }}>{item.icon}</span>
							<div>
								{item.name}
								<br />
								<span>{item.recipient}</span>
							</div>

							<h4>{item.amount}</h4>
						</div>
						<hr />
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default History;
