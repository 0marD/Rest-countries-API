import { StyledCountryCard } from "./StyledCountryCard";
import { Country } from "../../interfaces/Country";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCountrySelected } from "../../redux/slices/countrySlice";

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({ country }: Props) => {
  const formatNumberWithCommas = (number: number): string => {
    return number.toLocaleString();
  };

  const dispatch = useDispatch();

  const handleCardOnClick = (name: string) => {
    dispatch(setCountrySelected(name));
  };

  return (
    <StyledCountryCard>
      <Link
        to={`/country/${country.alpha3Code}`}
        className="countryCard__link"
        onClick={() => handleCardOnClick(country.name)}
      >
        <figure className="countryCard__figure">
          <img
            className="countryCard__flag"
            src={country.flags.svg}
            alt={`${country.name} flag`}
          />
        </figure>
        <div className="countryCard__content">
          <h3 className="countryCard__title">{country.name}</h3>
          <p className="countryCard__stat">
            <span className="countryCard__stat-name">Population: </span>
            <span className="countryCard__stat-value">
              {formatNumberWithCommas(country.population)}
            </span>
          </p>
          <p className="countryCard__stat">
            <span className="countryCard__stat-name">Region: </span>
            <span className="countryCard__stat-value">{country.region}</span>
          </p>
          <p className="countryCard__stat">
            <span className="countryCard__stat-name">Capital: </span>
            <span className="countryCard__stat-value">{country.capital}</span>
          </p>
        </div>
      </Link>
    </StyledCountryCard>
  );
};

export { CountryCard };
