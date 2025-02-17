"use client";

import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { searchCompanies } from "../api/api";
import { CompanySearch } from "@/types/company";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      onSearchSubmit(value);
    }, 500); // 500ms delay

    setDebounceTimeout(timeout);
  };

  const onSearchSubmit = async (searchValue: string) => {
    const result = await searchCompanies(searchValue);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
    }
  };

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Search
        onSearchSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit(search);
        }}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1 className="text-red-500">{serverError}</h1>}
      <CardList results={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
};

export default Home;
