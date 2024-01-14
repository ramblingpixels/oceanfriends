import React, { useState } from "react";
import { Link } from "react-router-dom";
import HistorySvg from "./SvgComponents/HistorySvg";
import HomeSvg from "./SvgComponents/HomeSvg";
import ScanSvg from "./SvgComponents/ScanSvg";
import UnionSvg from "./SvgComponents/UnionSvg";

const svgs = [
	{
		id: 1,
		name: "home",
		svgComponent: <HomeSvg />,
	},
	{
		id: 2,
		name: "catalogue",
		svgComponent: <ScanSvg />,
	},
	{
		id: 3,
		name: "history",
		svgComponent: <HistorySvg />,
	},
	{
		id: 4,
		name: "union",
		svgComponent: <UnionSvg />,
	},
];

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("home");

	const handleClick = (currentLink) => {
		setActiveLink(currentLink);
	};

	return (
		<div className="navbar">
			<ul>
				{svgs.map((svg) => (
					<Link
						to={`/${svg.name}`}
						key={svg.id}
						onClick={() => handleClick(svg.name)}
						className={activeLink === svg.name ? "active-link" : ""}
					>
						<li>{svg.svgComponent}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
