import { styled } from "styled-components";

export const StyledDetailsCountry = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  gap: 1.5rem;
  text-decoration: none;
min-height: 100vh;
display: flex;
flex-direction: column;
  .country {
    &__back-btn {
      background: ${({ theme }) => theme.elements};
      padding: 0.5rem 2rem;
      border-radius: 0.25rem;
      box-shadow: hsl(0, 0%, 0%, 0.2) 0 0 10px 5px;
      width: max-content;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      &-icon {
        font-size: 1.2rem;
      }
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: auto 0;
      @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 1440px) {
        grid-template-columns: 60% 40%;
      }
    }

    &__side {
      gap: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
      }
    }

    &__figure {
      width: 100%;
      overflow: hidden;
      aspect-ratio: 1/0.65;
      /* display: grid; */
      /* place-content: center; */
      margin: 1rem 0;
    }

    &__flag {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    &__name {
      font-size: 1.5rem;
      width: 100%;
    }

    &__section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      @media screen and (min-width: 768px) {
        width: 45%;
      }
      &--border {
        padding-bottom: 2rem;
        @media screen and (min-width: 768px) {
          width: 100%;
        }
      }
    }

    &__parameter {
      width: 100%;
    }

    &__label {
      width: fit-content;
      font-weight: 600;
    }

    &__border-label {
      font-weight: 600;
      padding-bottom: 1rem;
    }

    &__border-countries {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    &__border-country {
      background: ${({ theme }) => theme.elements};
      padding: 0.5rem 2rem;
      border-radius: 0.25rem;
      box-shadow: hsl(0, 0%, 0%, 0.2) 0 0 10px 5px;
      font-weight: inherit;
      color: inherit;
      text-decoration: none;
    }

    &__languages {
      display: inline-block;
    }
  }
`;
