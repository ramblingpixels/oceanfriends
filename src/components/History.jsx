import React from "react";
import DpSvg from "./SvgComponents/DpSvg";

const History = ({ items }) => {
	let currentDate = null;

	return (
		<div className="history-content">
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

						<div className="history-item">
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
