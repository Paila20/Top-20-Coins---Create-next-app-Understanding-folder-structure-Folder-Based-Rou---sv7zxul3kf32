import React from "react";
import Link from "next/link";

function CoinCard({ coin }) {
	const { id, symbol, name, rank, price_usd } = coin;
	return (
		<div className="coin-card">
			<h3 className="coin-name">{name}</h3>
			<h4 className="coin-symbol">{symbol}</h4>
			<p className="coin-rank">Rank: {rank}</p>
			<p className="coin-price">Price: ${price_usd}</p>
			<Link className="view-details-link" href={`/${id}`}>
				View Details
			</Link>
		</div>
	);
}

export default CoinCard;
