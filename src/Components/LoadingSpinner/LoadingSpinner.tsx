import { StyledLoadingSpinner } from "./StyledLoadingSpinner";

const LoadingSpinner = (): JSX.Element => {
  return (
    <StyledLoadingSpinner>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </StyledLoadingSpinner>
  );
};

export { LoadingSpinner };
