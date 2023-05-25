import React from "react";
import { StyledDetailsCountry } from "./StyledDetailsCountry";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { CountryNotFound } from "../../Components/CountryNotFound/CountryNotFound";
import { useDetailsCountry } from "./useDetailsCountry";

const DetailsCountry: React.FC = (): JSX.Element => {
  const { countryToRender, handleBorderClick } = useDetailsCountry();

  if (!countryToRender) {
    return <CountryNotFound />;
  }

  return (
    <StyledDetailsCountry className="country">
      <Link to="/" className="country__back-btn">
        <BiArrowBack className="country__back-btn-icon" />
        Back to Home
      </Link>
      <div className="country__content">
        <div className="country__side">
          <figure className="country__figure">
            <img
              className="country__flag"
              src={countryToRender.flags.svg}
              alt={countryToRender.name}
            />
          </figure>
        </div>
        <div className="country__side">
          <h3 className="country__name">{countryToRender.name}</h3>
          <div className="country__section">
            <p className="country__parameter">
              <span className="country__label">Native name: </span>
              <span>{countryToRender.nativeName}</span>
            </p>
            <p className="country__parameter">
              <span className="country__label">Population: </span>
              <span>{countryToRender.population.toLocaleString()}</span>
            </p>
            <p className="country__parameter">
              <span className="country__label">Sub region: </span>
              <span>{countryToRender.subregion}</span>
            </p>
            <p className="country__parameter">
              <span className="country__label">Capital: </span>
              <span>{countryToRender.capital}</span>
            </p>
          </div>
          <div className="country__section">
            <p>
              <span className="country__label">Top level domain: </span>
              <span>{countryToRender.topLevelDomain}</span>
            </p>
            <p>
              <span className="country__label">Currency: </span>
              <span>{countryToRender.currencies[0]?.name}</span>
            </p>
            <p>
              <span className="country__label">Languages: </span>
              <span className="country__languages">
                {countryToRender.languages.map((language, index) => (
                  <React.Fragment key={language.iso639_1}>
                    {index > 0 && ", "}
                    {language.name}
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>
          <div className="country__section country__section--border">
            <p className="country__border-label">Border countries: </p>
            <div className="country__border-countries">
              {countryToRender.borders ? (
                countryToRender.borders.map((border) => (
                  <Link
                    to={`/country/${border}`}
                    className="country__border-country"
                    key={border}
                    onClick={() => handleBorderClick(border)}
                  >
                    {border}
                  </Link>
                ))
              ) : (
                <p className="country__border-country">
                  This country has no land borders
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledDetailsCountry>
  );
};

export { DetailsCountry };
