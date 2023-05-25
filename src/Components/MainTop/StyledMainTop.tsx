import { styled } from "styled-components";

export const StyledMainTop = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
   flex-direction: row;
   justify-content: space-between;
   padding-bottom: 3rem;
  }
`;
