import React, { useState } from "react";
import CardWifiSvg from "../../SvgComponents/CardWifiSvg";
import MCSvg from "../../SvgComponents/MCSvg";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [button1Size, setButton1Size] = useState("large");
	const [button2Size, setButton2Size] = useState("normal");

	const nextCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
		setButton1Size("normal");
		setButton2Size("large");
	};
	const prevCard = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + cards.length) % cards.length
		);
		setButton1Size("large");
		setButton2Size("normal");
	};

	const isAtBeginning = currentIndex === 0;
	const isAtEnd = currentIndex === 1;

	return (
		<>
			<div className="horizontal-carousel">
				<div
					className="carousel-container"
					style={{ transform: `translateX(${-currentIndex * 50}%)` }}
				>
					{cards.map((card) => (
						<Link to={`/card/${card.id}`} className="card-link" key={card.id}>
							<div className="card-item" style={{ background: card.gradient }}>
								<div>
									<h1 className="card-bank-name">CB</h1>
									<span className="vertical-line-card">|</span>
									<span className="card-bank-type">Universal Bank</span>
								</div>
								<div>
									<div className="card-chip"></div>
									<CardWifiSvg />
								</div>
								<h2 className="card-number">{card.number}</h2>
								<div>
									<span className="card-expiry">{card.expiry}</span>
									<MCSvg />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="carousel-buttons">
				<button
					onClick={prevCard}
					disabled={isAtBeginning}
					className={button1Size}
				>
					{"_"}
				</button>
				<button onClick={nextCard} disabled={isAtEnd} className={button2Size}>
					{"_"}
				</button>
			</div>
		</>
	);
};

export default Cards;
