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
      className="flex flex-col items-center justify-center max-w-sm p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={id}
      id={id}
    >
      <Link
        href={`/company/${searchResult.symbol}/company-profile`}
        className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
        {searchResult.currency}
      </p>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
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
