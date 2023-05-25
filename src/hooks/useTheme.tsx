import { useState, useEffect } from 'react';

const initialThemeState = false;

export const useTheme = (initialState: boolean = initialThemeState) => {
  const [theme, setTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? storedTheme === 'true' : initialState;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return { theme, toggleTheme };
};
