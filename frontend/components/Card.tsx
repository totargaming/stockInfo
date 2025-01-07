import React, { JSX, SyntheticEvent } from "react";
import Link from "next/link";
import { CompanySearch } from "@/types/company";
import AddPortfolio from "./Portfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg"
      key={id}
      id={id}
    >
      <Link
        legacyBehavior
        href={`/company/${searchResult.symbol}/company-profile`}
      >
        <a className="font-bold text-center text-veryDarkViolet md:text-left">
          {searchResult.name} ({searchResult.symbol})
        </a>
      </Link>
      <p className="text-veryDarkBlue">{searchResult.currency}</p>
      <p className="font-bold text-veryDarkBlue">
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
