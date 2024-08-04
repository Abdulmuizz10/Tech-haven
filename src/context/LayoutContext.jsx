import { createContext, useState, useEffect } from "react";

export const LayoutContext = createContext();

const getFromLocalStorage = () => {
  const value = localStorage.getItem("roots");
  return value || true;
};

export const LayoutContextProvider = ({ children }) => {
  const [roots, setRoots] = useState(() => getFromLocalStorage());

  const toggleLayout = (state) => {
    setRoots(state);
  };

  useEffect(() => {
    localStorage.setItem("roots", roots);
  }, [roots]);

  return (
    <LayoutContext.Provider value={{ roots, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
