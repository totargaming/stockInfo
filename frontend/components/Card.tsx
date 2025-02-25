import React, { SyntheticEvent } from "react";
import Link from "next/link";
import { CompanySearch } from "@/types/company";
import AddPortfolio from "./Portfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card = ({ id, searchResult, onPortfolioCreate }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-between p-4 m-2 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={id}
      id={id}
      style={{ width: "250px", height: "200px" }} // Set fixed width and height for the card
    >
      <Link
        href={`/company/${searchResult.symbol}`}
        className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis whitespace-nowrap"
        style={{ maxWidth: "100%" }} // Ensure the text does not overflow
      >
        ({searchResult.symbol}) {searchResult.name}
      </Link>
      <p
        className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 overflow-hidden overflow-ellipsis whitespace-nowrap"
        style={{ maxWidth: "100%" }}
      >
        {searchResult.currency}
      </p>
      <p
        className="mb-2 text-sm text-gray-700 dark:text-gray-300 overflow-hidden overflow-ellipsis whitespace-nowrap"
        style={{ maxWidth: "100%" }}
      >
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
