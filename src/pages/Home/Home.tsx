import { CountriesList } from "../../Components/CountriesList/CountriesList";
import { CountryCard } from "../../Components/CountryCard/CountryCard";
import { Filter } from "../../Components/Filter/Filter";
import { MainTop } from "../../Components/MainTop/MainTop";
import { Searcher } from "../../Components/Searcher/Searcher";
import { useData } from "../../hooks/useData";
import { Country } from "../../interfaces/Country";
import { StyledHome } from "./StyledHome";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { useHome } from "./useHome";

const Home = (): JSX.Element => {
  const { handleSearch, handleFilter, searchTerm, searchResults } = useData();
  const { isLoading, rendered } = useHome();

  return (
    <StyledHome>
      <MainTop>
        <Searcher onChange={handleSearch} value={searchTerm} />
        <Filter handleFilter={handleFilter} />
      </MainTop>
      <CountriesList>
        {searchResults.length === 0 ? (
          <p className="no-results">No matches</p>
        ) : (
          <>
            {searchResults.slice(0, rendered).map((country: Country) => (
              <CountryCard country={country} key={country.alpha3Code} />
            ))}
            {isLoading && <LoadingSpinner />}
          </>
        )}
      </CountriesList>
    </StyledHome>
  );
};

export { Home };
