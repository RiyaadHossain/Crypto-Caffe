import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="text-center">
          <h1 className="mt-10 text-4xl font-bold mb-4">
            Available Crypto Currencies
          </h1>
          <span className="text-xl text-gray-500">
            Total Coins: {coins.length}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-16">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
