"use client";

import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onClick = (e: SyntheticEvent) => {
    console.log(e);
  };
  return (
    <div>
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </div>
  );
};
export default Home;
