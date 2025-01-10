import React, { ChangeEvent, useState, SyntheticEvent } from "react";

type Props = {};

const Search = (props: Props) => {
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
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button
        className="p-2 px-8 mt-2 rounded-lg bg-primary text-primary-foreground hover:opacity-70 focus:outline-none"
        onClick={(e) => onClick(e)}
      />
    </div>
  );
};

export default Search;
