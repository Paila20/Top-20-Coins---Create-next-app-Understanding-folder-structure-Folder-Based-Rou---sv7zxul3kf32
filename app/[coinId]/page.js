"use client";
import React, { useState, useEffect } from "react";

function CoinDetail({ params }) {
	const [coin, setCoin] = useState({});
	useEffect(() => {
		fetch(`https://api.coinlore.net/api/ticker/?id=${params.coinId}`)
			.then((res) => res.json())
			.then((data) => setCoin(data[0]));
	}, []);
	const { name, price_usd, symbol, rank, market_cap_usd, tsupply, msupply } =
		coin;
	return (
		<div className="coin-detail">
			<div className="name-symbol">
				<h1 className="name">{name}</h1>
				<h2 className="symbol">({symbol})</h2>
			</div>
			<div className="market-description">
				<p className="coin-rank">Rank: {rank}</p>
				<p className="coin-price">Price: ${price_usd}</p>
				<p className="coin-market-cap">Market Cap: ${market_cap_usd}</p>
				<p className="coin-total-supply">Total Supply: {tsupply}</p>
				<p className="coin-max-supply">
					Max Supply: {msupply ? msupply : "N/A"}
				</p>
			</div>
		</div>
	);
}

export default CoinDetail;
