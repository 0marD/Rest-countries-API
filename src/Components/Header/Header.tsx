import { StyledHeader } from "./StylesHeader";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  onClick: () => void;
  theme: boolean;
}

const Header = ({ text, onClick, theme }: Props): JSX.Element => {
  return (
    <StyledHeader className="header">
      <Link className="header__heading" to={"/"}><h2>{text}</h2></Link>
      <button className="header__button" onClick={onClick} title={`Switch to ${theme ? "Light mode":"Dark mode"}`}>
        {!theme ? <BsFillSunFill className="header__icon" /> : <BsFillMoonFill className="header__icon" />}
      </button>
    </StyledHeader>
  );
}

export { Header };
