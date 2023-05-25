import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./Components/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Themes } from "./styles/Themes";
import { NotFound } from "./pages/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
import { DetailsCountry } from "./pages/DetailsCountry/DetailsCountry";
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  prompt(): Promise<void>;
}
const App: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  const handleInstallPrompt = (event: Event) => {
    event.preventDefault();
    // Mostrar la notificación de instalación aquí
    const installPromptEvent = event as BeforeInstallPromptEvent;
    installPromptEvent.prompt();
  };

  return (
    <ThemeProvider theme={Themes[theme ? "dark" : "light"]}>
      <GlobalStyles />
      <BrowserRouter>
        <Header
          text="Where in the world?"
          onClick={toggleTheme}
          theme={theme}
        />
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
