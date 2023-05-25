
import { useState } from "react";
import { Country } from "../interfaces/Country";
import data from "../Data/data.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertJsonToArray = (json: any): Country[] => {
  return Object.values(json);
};

export const useData = () => {
  const dataArray: Country[] = convertJsonToArray(data);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Country[]>(dataArray);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    const results = dataArray.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleFilter = (term: string) => {
    const results = dataArray.filter((country) =>
      country.region.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  return { handleSearch, handleFilter, searchTerm, searchResults };
};

