import { Link } from "react-router-dom";
import { StyledCountryNotFound } from "./StyledCountryNotFound";

const CountryNotFound = (): JSX.Element => {
  return (
    <StyledCountryNotFound className="country-not-found">
      <p className="country-not-found__message">No country found.</p>
      <Link to={"/"} className="country-not-found__link">Go to home</Link>
    </StyledCountryNotFound>
  );
};

export { CountryNotFound };
