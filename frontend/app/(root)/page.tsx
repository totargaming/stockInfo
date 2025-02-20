"use client";

import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { searchCompanies } from "../api/api";
import { CompanySearch } from "@/types/company";
import ListPortfolio from "@/components/Portfolio/ListPortfolio";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [PortfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 6; // Number of items per page

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
      setPage(1); // Reset to the first page
      setTotalPages(Math.ceil(result.length / limit));
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const onPortfolioDelete = async (symbol: string) => {
    const updatedPortfolio = PortfolioValues.filter(
      (value) => value !== symbol
    );
    setPortfolioValues(updatedPortfolio);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    if (PortfolioValues.includes(e.target[0].value)) {
      alert("This company is already in your portfolio.");
      return;
    }
    const updatedPortfolio = [...PortfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  // Calculate the items to display on the current page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentResults = searchResult.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 p-4 bg-gray-100 dark:bg-gray-800">
        <ListPortfolio
          PortfolioValues={PortfolioValues}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
      <div className="w-full md:w-3/4 p-4">
        <Search
          onSearchSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit(search);
          }}
          search={search}
          handleSearchChange={handleSearchChange}
        />
        {serverError && <h1 className="text-red-500">{serverError}</h1>}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          <CardList
            results={currentResults}
            onPortfolioCreate={onPortfolioCreate}
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="p-2 mx-2 bg-gray-300 rounded-lg"
          >
            Previous
          </button>
          <span className="p-2">{`Page ${page} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="p-2 mx-2 bg-gray-300 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
