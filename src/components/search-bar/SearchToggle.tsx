"use client";
import React from "react";
import useSearch from "@/hooks/useSearch";

const SearchToggle: React.FC = () => {
  const { searchCategory, setSearchCategory } = useSearch();
  return (
    <select
      title="Tracks or sound effects toggle"
      className="bg-transparent text-3xl font-bold py-2 pl-3 pr-12"
      aria-label="Please select to search for tracks or sound effects"
      value={searchCategory}
      onChange={(e) => {
        setSearchCategory(e.target.value as "tracks" | "sfx");
      }}
    >
      <option className="text-brand-black" value="tracks">
        Tracks
      </option>
      <option className="text-brand-black" value="sfx">
        SFX
      </option>
    </select>
  );
};

export default SearchToggle;
