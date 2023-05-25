import { StyledMainTop } from "./StyledMainTop";

interface Props {
  children?: React.ReactNode;
}

const MainTop = ({ children }: Props): JSX.Element => {
  return <StyledMainTop className="mainTop">{children}</StyledMainTop>;
};

export { MainTop };
