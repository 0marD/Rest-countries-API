import React from "react";
import { StyledCountriesList } from "./StyledCountriesList";

interface Props {
  children?: React.ReactNode;
}

const CountriesList: React.FC<Props> = ({ children }: Props) => {
  return <StyledCountriesList>{children}</StyledCountriesList>;
};

export { CountriesList };
