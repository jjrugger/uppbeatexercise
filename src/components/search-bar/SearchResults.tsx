"use client";
import React from "react";
import useSearch from "@/hooks/useSearch";
import { Ellipsis, Tags } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const SearchResults: React.FC = () => {
  const { query, searchCategory, searchTerm } = useSearch();
  console.log(query.data?.pages[0].hits);
  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul className="flex flex-col gap-6 sm:gap-2 py-10">
        {query.data?.pages.map((page) =>
          page.hits.map((hit) => {
            return (
              <li key={hit.document.id}>
                <div className="flex justify-between	sm:items-center max-w-[648px] flex-col sm:flex-row gap-2">
                  <a
                    target="_blank"
                    className="flex gap-2"
                    href={`https://uppbeat.io/${
                      searchCategory === "tracks" ? "track" : "sfx"
                    }/${hit.document.artist_slug}/${hit.document.slug}`}
                  >
                    <img
                      src={hit.document.image}
                      alt={`An image of ${hit.document.artist}`}
                      className="h-14 w-14 rounded-full"
                    />

                    <div className="flex sm:flex-row sm:gap-1 sm:flex-wrap flex-col">
                      <p>{hit.document.name}</p>
                      <p>{hit.document.artist}</p>
                    </div>
                  </a>
                  <div className="flex gap-2">
                    {hit.document.featured_tags &&
                      hit.document.featured_tags.length > 0 && (
                        <ul className="flex gap-2">
                          {hit.document.featured_tags?.map(
                            (featured_tags, index) => (
                              <li
                                key={index}
                                className="px-2 py-1 bg-pillbg dark:bg-lightborder rounded-full text-[14px]"
                              >
                                {featured_tags.name}
                              </li>
                            )
                          )}
                        </ul>
                      )}

                    {hit.document.tags && hit.document.tags.length > 0 && (
                      <Popover>
                        <PopoverTrigger className="px-2 py-1 aspect-square bg-pillbg dark:bg-lightborder rounded-full text-[14px]">
                          <Ellipsis className="size-4" />
                          <span className="sr-only">Show all tags</span>
                        </PopoverTrigger>
                        <PopoverContent>
                          <ul className="grid grid-cols-3 gap-1">
                            {hit.document.tags.map((tag, index) => (
                              <li
                                className="line-clamp-1 whitespace-nowrap block overflow-ellipsis flex-1 text-[14px]"
                                key={index}
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>

      {query.hasNextPage && (
        <Button
          className="mb-10"
          onClick={() => query.fetchNextPage()}
          disabled={query.isFetchingNextPage}
        >
          {query.isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}

      {searchTerm &&
        query.data &&
        (query.data.pages[0].hits.length === 0 ? (
          <p className="text-2xl font-bold dark:text-brand-white">
            Sorry, your search for "{searchTerm}" returned zero results.
          </p>
        ) : (
          <p className="text-2xl font-bold dark:text-brand-white">
            Showing{" "}
            {(query.data.pages.length - 1) * 5 +
              query.data.pages[query.data.pages.length - 1].hits.length}{" "}
            of {query.data.pages[0].found}
          </p>
        ))}
    </div>
  );
};

export default SearchResults;
