import Link from "next/link";
import React from "react";

interface Props {
  symbol: string;
  onDelete: (symbol: string) => void;
}

const CardPortfolio = ({ symbol, onDelete }: Props) => {
  return (
    <div className="flex items-center justify-between w-full p-2 mb-2 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      <Link
        href={`/company/${symbol}/profile`}
        className="text-gray-700 dark:text-gray-300"
      >
        {symbol}
      </Link>
      <button
        onClick={() => onDelete(symbol)}
        className="p-1 text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </div>
  );
};

export default CardPortfolio;
