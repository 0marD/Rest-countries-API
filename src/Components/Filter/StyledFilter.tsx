import { styled } from "styled-components";

export const StyledFilter = styled.div`
  background-color: ${({ theme }) => theme.elements};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  width: max-content;
  transition: box-shadow 0.3s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0 10px 2px;
  position: relative;

  .filter__content {
    gap: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &-icon {
      transition: transform 0.3s;
      &.active {
        transition: transform 0.3s;
        transform: rotate(180deg);
      }
    }
  }

  .filter__modal {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    left: 0;
    top: 120%;
    width: 100%;
    background-color: ${({ theme }) => theme.elements};
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0 10px 2px;
    border-radius: 0.5rem;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
    z-index: 1;
    &-continent {
      &:hover {
        cursor: pointer;
      }
    }
    &.active {
      padding: 0.75rem 1rem;
      transition: height 0.3s;
      height: 10.875rem;
    }
  }
`;
