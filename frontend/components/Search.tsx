import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onClick, search, handleChange }: Props) => {
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
