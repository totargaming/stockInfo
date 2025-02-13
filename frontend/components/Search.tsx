import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onClick, search, handleChange }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <input
        value={search}
        onChange={(e) => handleChange(e)}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Search for a company..."
      />
      <button
        className="p-2 px-8 mt-2 rounded-lg bg-primary text-primary-foreground hover:opacity-70 focus:outline-none"
        onClick={(e) => onClick(e)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
