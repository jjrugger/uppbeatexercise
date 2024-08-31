"use client";
import React, { use } from "react";
import useSearch from "@/hooks/useSearch";

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <div className="border-b border-lightborder flex py-2 px-3 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        className="bg-transparent w-full py-2 px-3 font-bold text-3xl"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
