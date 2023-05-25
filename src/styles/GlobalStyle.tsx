import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
:root{
    @media screen and (min-width: 768px) {
   font-size: 18px;
  }
}
    button{
        background-color: transparent;
        border: none;
        font-size: inherit;
    }

    input{
        font-family: inherit;
        border: none;
        &:focus{
            outline: none;
        }
    }
li{
    list-style: none;
}
    body{
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
        font-family: 'Nunito Sans', sans-serif;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        
    }
`;
