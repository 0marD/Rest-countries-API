import { styled } from "styled-components";

export const StyledCountryCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid hsl(0, 0%, 0%, 0.1);
  transition: box-shadow 0.1s;
  

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.25) 0px 48px 100px 0px;
    cursor: pointer;
  }
  .countryCard__link{
    text-decoration: none;
  color: inherit;
  }
  .countryCard__figure {
    width: 100%;
    overflow: hidden;
    display: grid;
    place-items: center;
    aspect-ratio: 1/0.6;
  }
  .countryCard__flag {
    object-fit: cover;
    transition: transform 0.3s;
    display: block;
    width: 100%;
    min-height: 100%;
    transform: scale(1);
    &:hover {
      transform: scale(1.2);
    }
  }
  .countryCard__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .countryCard__title {
    padding: 0.5rem 0;
  }
  .countryCard__stat {
    &-name {
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
   max-width: calc(100vw / 2);
  }

  @media screen and (min-width: 1024px) {
   max-width: calc(100vw / 3);
  }

  @media screen and (min-width: 1440px) {
   max-width: calc(100vw / 4);
  }
`;
