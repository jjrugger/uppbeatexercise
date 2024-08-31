import React from "react";
import SearchContainer from "../components/search-bar/SearchContainer";

export default function Home() {
  return (
    <main className="flex-grow py-4 sm:p-8 sm:flex sm:flex-col sm:items-center">
      <h1 className="text-5xl font-bold dark:text-brand-white">
        Free music for creators
      </h1>
      <p className="mt-4 font-bold text-xl dark:text-brand-white">
        No copyright claims. Your favorite beatmakers.
      </p>
      <div>
        <SearchContainer />
      </div>
    </main>
  );
}
