import React, { useState } from "react";
import { StyledFilter } from "./StyledFilter";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  handleFilter: (term: string) => void;
}

const Filter: React.FC<Props> = ({ handleFilter }): JSX.Element => {
  const [modalFilter, setModalFilter] = useState<boolean>(false);

  const handleModalFilter = () => {
    setModalFilter(!modalFilter);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const term = event.currentTarget.textContent?.toLowerCase() || "";
    handleFilter(term);
  };

  return (
    <StyledFilter onClick={handleModalFilter}>
      <div className="filter__content">
        Filter by region
        <IoIosArrowDown
          className={`filter__content-icon ${modalFilter && "active"}`}
        />
      </div>
      <ul className={`filter__modal ${modalFilter && "active"}`}>
        <li className="filter__modal-continent" onClick={handleClick}>
          Africa
        </li>
        <li className="filter__modal-continent" onClick={handleClick}>
          Asia
        </li>
        <li className="filter__modal-continent" onClick={handleClick}>
          America
        </li>
        <li className="filter__modal-continent" onClick={handleClick}>
          Europe
        </li>
        <li className="filter__modal-continent" onClick={handleClick}>
          Oceania
        </li>
      </ul>
    </StyledFilter>
  );
};

export { Filter };
