import React from "react";
import SearchToggle from "./SearchToggle";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchContainer: React.FC = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col sm:flex-row">
        <SearchBar />
        <SearchToggle />
      </div>
      <SearchResults />
    </div>
  );
};

export default SearchContainer;
