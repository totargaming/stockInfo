import React from "react";

interface Props {
  PortfolioValues: string[];
  onPortfolioDelete: (symbol: string) => void;
}

const ListPortfolio = ({ PortfolioValues, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
        My Portfolio
      </h2>
      {PortfolioValues.length > 0 ? (
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
        ))
      ) : (
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 text-center">
          No portfolios found
        </h1>
      )}
    </div>
  );
};

export default ListPortfolio;
