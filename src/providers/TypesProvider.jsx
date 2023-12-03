import { createContext, useEffect, useState } from "react";
import { getTypes } from "../api/types";

export const TypesContext = createContext({ types: [] });

export const TypesProvider = ({ children }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes().then((types) => {
      setTypes(types.types);
    });
  }, []);

  const value = {
    types,
  };

  return (
    <TypesContext.Provider value={value}>{children}</TypesContext.Provider>
  );
};
