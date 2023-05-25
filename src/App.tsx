import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./Components/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Themes } from "./styles/Themes";
import { NotFound } from "./pages/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
import { DetailsCountry } from "./pages/DetailsCountry/DetailsCountry";

const App: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={Themes[theme ? "dark" : "light"]}>
      <GlobalStyles />
      <BrowserRouter>
        <Header text="Where in the world?" onClick={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<DetailsCountry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
