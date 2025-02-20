import React from "react";
import CardPortfolio from "./CardPorfolio";

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
          <CardPortfolio
            key={symbol}
            symbol={symbol}
            onDelete={onPortfolioDelete}
          />
        ))}
    </>
  );
};

export default ListPortfolio;
