import React from "react";
import Card from "./Card";
import { CompanySearch } from "@/types/company";
import { SyntheticEvent } from "react";

interface Props {
  results: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList = ({ results, onPortfolioCreate }: Props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {results.length > 0 ? (
        results.map((result) => (
          <Card
            key={result.symbol}
            id={result.symbol}
            searchResult={result}
            onPortfolioCreate={(e) => onPortfolioCreate(e)}
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
          No results found
        </h1>
      )}
    </div>
  );
};

export default CardList;
