import { useDispatch, useSelector } from "react-redux";
import data from "../../Data/data.json";
import { RootState } from "../../redux/store";
import { Country } from "../../interfaces/Country";
import { setCountrySelected } from "../../redux/slices/countrySlice";

const useDetailsCountry = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const convertJsonToArray = (json: any): Country[] => {
    return Object.values(json);
  };
  const countries: Country[] = convertJsonToArray(data);

  const countrySelected = useSelector(
    (state: RootState) => state.countrySelected.country
  );

  const countryToRender = countries.find(
    (country) => country.name === countrySelected
  );
  const handleBorderClick = (borderCountry: string) => {
    const findCountry = countries.find(
      (country) => country.alpha3Code === borderCountry
    );
    if (findCountry) {
      const countryFound = findCountry.name;
      dispatch(setCountrySelected(countryFound));
    }
  };
  return { countryToRender, handleBorderClick };
};

export { useDetailsCountry };
