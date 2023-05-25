import { styled } from "styled-components";

export const StyledCountriesList = styled.div`
  width: 100%;
  gap: 3rem 0;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .countryList__card {
    width: 100%;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background-color: ${({ theme }) => theme.elements};
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px solid hsla(0, 0%, 0%, 0.1);
    transition: box-shadow 0.1s;

    &:hover {
      box-shadow: rgba(17, 12, 46, 0.25) 0px 48px 100px 0px;
    }

    &-figure {
      width: 100%;
      overflow: hidden;
      display: grid;
      place-items: center;
      aspect-ratio: 1/0.6;
    }

    &-flag {
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

    &-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &-title {
      padding: 0.5rem 0;
    }

    &-stat-name {
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
