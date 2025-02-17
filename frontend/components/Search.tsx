import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearchSubmit, search, handleSearchChange }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <form onSubmit={onSearchSubmit} className="flex flex-col items-center">
        <input
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Search for a company..."
        />
        <button
          type="submit"
          className="p-2 px-8 mt-2 rounded-lg bg-primary text-primary-foreground hover:opacity-70 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
