"use client";

import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "../api/api";
import { CompanySearch } from "@/types/company";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<CompanySearch[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = await searchCompanies(search);
    setResults(data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList results={results} />
    </div>
  );
};

export default Home;
