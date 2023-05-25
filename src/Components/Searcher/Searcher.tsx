import React, { ChangeEvent } from "react";
import { StyledSearcher } from "./StyledSearcher";
import { BiSearch } from "react-icons/bi";

interface Props {
  onChange: (term: string) => void;
  value: string;
}

const Searcher: React.FC<Props> = ({ onChange, value }): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    onChange(term);
  };

  return (
    <StyledSearcher>
      <BiSearch className="searcher__icon" />
      <input
        type="text"
        className="searcher__input"
        placeholder="Search a country"
        value={value}
        onChange={handleChange}
        autoComplete="none"
      />
    </StyledSearcher>
  );
};

export { Searcher };
