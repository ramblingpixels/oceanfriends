import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackArrowSvg from "../../SvgComponents/BackArrowSvg";
import CardWifiSvg from "../../SvgComponents/CardWifiSvg";
import MCSvg from "../../SvgComponents/MCSvg";
import HistorySvg from "../../SvgComponents/HistorySvg";
import ShareSvg from "../../SvgComponents/ShareSvg";

const CardInfo = ({ cards, items }) => {
	const [showBack, setShowBack] = useState(false);

	const { id } = useParams();
	const selectedCard = id
		? cards.filter((data) => data.id === parseInt(id))
		: cards;

	const handleMouseDown = () => {
		setShowBack(true);
	};

	const handleMouseUp = () => {
		setShowBack(false);
	};

	let currentDate = null;

	return (
		<>
			<div className="card-info">
				<Link to="/home">
					<BackArrowSvg />
				</Link>
				<h1>Salary Card</h1>

				{showBack ? (
					// Back Side
					<div
						className="card-item-back"
						style={{ background: selectedCard[0].gradient }}
						onMouseUp={handleMouseUp}
					>
						<div className="black-strip"></div>
						<div className="cvv-strip">
							<h3 className="cvv">{selectedCard[0].cvv}</h3>
						</div>
					</div>
				) : (
					//Front Side
					<div
						className="card-item card-item-info"
						style={{ background: selectedCard[0].gradient }}
						onMouseDown={handleMouseDown}
					>
						<div>
							<h1 className="card-bank-name">CB</h1>
							<span className="vertical-line-card">|</span>
							<span className="card-bank-type">Universal Bank</span>
						</div>
						<div>
							<div className="card-chip"></div>
							<CardWifiSvg />
						</div>
						<h2 className="card-number">{selectedCard[0].number}</h2>
						<div>
							<span className="card-expiry">{selectedCard[0].expiry}</span>
							<MCSvg />
						</div>
					</div>
				)}

				{/* Below Card */}
				<div className="card-info-balance">
					<div>
						<h3>Balance</h3>
						<h1>$2,748.00</h1>
					</div>
					<div>
						<span>
							<HistorySvg />
						</span>
						<span>
							<ShareSvg />
						</span>
					</div>
				</div>
			</div>

			{/* Card History */}
			<div className="card-history">
				<span>
					<hr className="history-hr-button" />
				</span>
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
		</>
	);
};

export default CardInfo;
