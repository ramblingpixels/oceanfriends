import React, { useState, useEffect } from "react";
import DpSvg from "./SvgComponents/DpSvg";

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
		<div className="history-content" style={translateStyle}>
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
					<>
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
					</>
				);
			})}
		</div>
	);
};

export default History;
