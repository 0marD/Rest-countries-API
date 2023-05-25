import { StyledNotFound } from "./StyledNotFound"
import { Link } from "react-router-dom";

const NotFound = () :JSX.Element=> {
  return (
    <StyledNotFound>
      <div className="loader"></div>
      <p className="text">Page not found</p>
      <Link to={"/"} className="link">Home</Link>
    </StyledNotFound>
  )
}

export  {NotFound}