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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
    }
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <h1 className="text-red-500">{serverError}</h1>}
      <CardList results={searchResult} />
    </div>
  );
};

export default Home;
