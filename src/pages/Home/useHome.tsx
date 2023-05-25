import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";

const useHome = () => {
  const [rendered, setRendered] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const { searchResults } = useData();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        rendered < searchResults.length
      ) {
        setIsLoading(true);
        setTimeout(() => {
          setRendered((prevRendered) => prevRendered + 6);
          setIsLoading(false);
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rendered, searchResults]);

  return {
    isLoading,
    rendered,
  };
};

export { useHome };
