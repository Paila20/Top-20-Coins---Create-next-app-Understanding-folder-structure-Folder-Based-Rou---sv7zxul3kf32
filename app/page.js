"use client";
import React, { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";

function Home() {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinlore.net/api/tickers/")
			.then((res) => res.json())
			.then(({ data }) => {
				setCoins(data.slice(0, 20));
				// console.log(data);
			});
	}, []);
	return (
		<div className="home">
			<h1>Top 20 Cryptos</h1>
			<div className="coins-container">
				{coins.map((coin, index) => (
					<CoinCard key={index} coin={coin} />
				))}
			</div>
		</div>
	);
}

export default Home;
