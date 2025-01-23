import React from "react";
import Card from "./Card";
import { CompanySearch } from "@/types/company";
import { SyntheticEvent } from "react";

interface Props {
  results: CompanySearch[];
}

const handlePortfolioCreate = (e: SyntheticEvent) => {
  e.preventDefault();
  console.log("Portfolio created");
};

const CardList = ({ results }: Props) => {
  return (
    <div className="flex flex-wrap align-center justify-center">
      {results.map((result, index) => (
        <div
          key={index}
          className="flex-1 m-2"
          style={{ flexBasis: "calc(33.333% - 1em)" }}
        >
          <Card
            id={index.toString()}
            searchResult={result}
            onPortfolioCreate={handlePortfolioCreate}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
