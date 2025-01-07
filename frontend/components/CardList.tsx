import React from "react";
import Card from "./Card";
import { CompanySearch } from "@/types/company";
import { SyntheticEvent } from "react";

const mockSearchResult: CompanySearch = {
  currency: "USD",
  exchangeShortName: "NASDAQ",
  name: "Apple Inc.",
  stockExchange: "NASDAQ",
  symbol: "AAPL",
};

const handlePortfolioCreate = (e: SyntheticEvent) => {
  e.preventDefault();
  console.log("Portfolio created");
};
// interface Props {}

const CardList = () => {
  return (
    <div>
      <Card
        id="1"
        searchResult={mockSearchResult}
        onPortfolioCreate={handlePortfolioCreate}
      />
      <Card
        id="1"
        searchResult={mockSearchResult}
        onPortfolioCreate={handlePortfolioCreate}
      />
      <Card
        id="1"
        searchResult={mockSearchResult}
        onPortfolioCreate={handlePortfolioCreate}
      />
    </div>
  );
};

export default CardList;
