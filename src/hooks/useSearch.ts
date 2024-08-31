import { ResponseObject } from "@/app/defs/Response";
import { useSearchContext } from "@/providers/SearchProvider";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce";

const runSearchQuery = async (
  searchTerm: string,
  searchCategory: "tracks" | "sfx",
  page = "1"
) => {
  const params = new URLSearchParams({
    q: searchTerm,
    query_by: "name",
    collection: searchCategory,
    page,
    per_page: "5",
  });

  const res = await fetch(
    `https://3feynu8vjgbqkl27p.a1.typesense.net/collections/tracks/documents/search?${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-TYPESENSE-API-KEY": "MqZdBn4VL8k7IqhuMKOSNuBxmU0isNLk",
      },
    }
  );
  const json = await res.json();
  return json;
};

const useSearch = () => {
  const { searchTerm, setSearchTerm, searchCategory, setSearchCategory } =
    useSearchContext();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const query = useInfiniteQuery<ResponseObject>({
    queryKey: ["search", debouncedSearchTerm, searchCategory],
    queryFn: ({ pageParam }) =>
      runSearchQuery(
        debouncedSearchTerm,
        searchCategory,
        pageParam as string | undefined
      ),
    enabled: !!debouncedSearchTerm,
    initialPageParam: "1",
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hits.length < 5) {
        return undefined;
      }
      const totalPages = Math.ceil(lastPage.found / 5);
      const loadedPages = pages.length;
      if (loadedPages >= totalPages) {
        return undefined;
      }
      return String(loadedPages + 1);
    },
  });

  return {
    searchTerm,
    setSearchTerm,
    searchCategory,
    setSearchCategory,
    query,
  };
};

export default useSearch;
