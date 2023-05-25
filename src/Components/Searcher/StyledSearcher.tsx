import { styled } from "styled-components";

export const StyledSearcher = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1.25rem;
  width: 100%;
  transition: box-shadow 0.3s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0 10px 2px;
  font-size: 1rem;
  max-width: 425px;
  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0 10px 2px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0 10px 2px;
  }
  .searcher__icon {
    font-size: 1.25rem;
  }

  .searcher__input {
    font-size: 1rem;
    padding: 0.25rem 0;
    display: block;
    width: 70%;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    width: max-content;
    transition: color, background-color, 0.3s;
    &::placeholder {
      color: ${({ theme }) => theme.text};
      transition: color, background-color, 0.3s;
    }
    &:hover {
      &::placeholder {
        filter: brightness(200%);
      }
    }
  }
`;
