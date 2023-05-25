import { styled } from "styled-components";

export const StyledNotFound = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 0.75;
  gap: 5em;

  .text {
    font-size: 1.5rem;
  }

  .link {
    text-decoration: none;
    color: inherit;
    margin: 0 auto;
    box-shadow: 0 0 10px 5px hsl(0, 0%, 0%, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 600;
    transition: box-shadow 0.3s;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 10px 2px hsl(0, 0%, 0%, 0.3);
    }
  }

  .loader {
    position: relative;
    min-width: 120px;
    min-height: 90px;
    transform: scale(1.25);
    margin: 0 auto;
  }

  .loader:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 ${({ theme }) => theme.input},
      -35px 50px 0 ${({ theme }) => theme.input},
      -70px 95px 0 ${({ theme }) => theme.input};
    animation: loading-step 1s ease-in-out infinite;
  }

  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }

    40% {
      transform: scale(0.8, 1.2);
    }

    60% {
      transform: scale(1, 1);
    }

    100% {
      bottom: 140px;
    }
  }

  @keyframes loading-step {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
        0 10px 0 ${({ theme }) => theme.input},
        -35px 50px 0 ${({ theme }) => theme.input},
        -70px 90px 0 ${({ theme }) => theme.input};
    }

    100% {
      box-shadow: 0 10px 0 ${({ theme }) => theme.input},
        -35px 50px 0 ${({ theme }) => theme.input},
        -70px 90px 0 ${({ theme }) => theme.input},
        -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;
