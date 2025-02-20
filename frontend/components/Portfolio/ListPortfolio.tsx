import React from "react";

interface Props {
  PortfolioValues: string[];
  onPortfolioDelete: (symbol: string) => void;
}

const ListPortfolio = ({ PortfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
        My Portfolio
      </h2>
      {PortfolioValues &&
        PortfolioValues.map((symbol) => (
          <div
            key={symbol}
            className="flex items-center justify-between w-full p-2 mb-2 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          >
            <span className="text-gray-700 dark:text-gray-300">{symbol}</span>
            <button
              onClick={() => onPortfolioDelete(symbol)}
              className="p-1 text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default ListPortfolio;
