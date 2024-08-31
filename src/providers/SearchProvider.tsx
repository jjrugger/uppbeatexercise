import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchCategory: "tracks" | "sfx";
  setSearchCategory: Dispatch<SetStateAction<"tracks" | "sfx">>;
}

const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchCategory: "tracks",
  setSearchCategory: () => {},
});

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState<"tracks" | "sfx">(
    "tracks"
  );

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchCategory, setSearchCategory }}
    >
      {children}
    </SearchContext.Provider>
  );
};
