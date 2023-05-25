import { styled } from "styled-components";

export const StyledCountryNotFound = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  padding-top: 2rem;
  gap: 2rem;
  .country-not-found {
    &__message {
      font-size: 1.3rem;
      font-weight: 600;
    }
    &__link {
      color: inherit;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 600;
      padding: .25rem .75rem;
      box-shadow: 0 0 10px 2px hsl(0, 0%, 0%,.2);
    }
  }
`;
