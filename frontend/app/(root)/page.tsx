"use client";
import Card from "@/components/Card";
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
const Home = () => {
  return (
    <Card
      id="1"
      searchResult={mockSearchResult}
      onPortfolioCreate={handlePortfolioCreate}
    />
  );
};
export default Home;
