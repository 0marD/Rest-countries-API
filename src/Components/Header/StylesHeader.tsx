import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: -10px 0 15px 2px hsl(56, 100%, 0%, 0.15);

  .header {
      &__heading {
      width: fit-content;
      font-size: 1.25rem;
      text-shadow: 0 0 5px hsl(56, 100%, 0%, 0.1);
      font-weight: 800;
      text-decoration: none;
      color: inherit;
      h2{
        font-size: inherit;
        font-weight: inherit;
      }
    }
    &__button {
      color: ${({ theme }) => theme.text};
      display: grid;
      place-items: center;
      cursor: pointer;
      width: max-content;
    }
    &__icon {
      font-size: 1.5rem;
    }
  }
`;
