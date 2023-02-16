import { createContext, FC, useEffect, useState } from "react";
import { getTypes } from "../../api/types";
import { Types, TypesContextType, Props } from "./types";

export const TypesContext = createContext<TypesContextType>({ types: [] });

export const TypesProvider: FC<Props> = ({ children }) => {
  const [types, setTypes] = useState<Types[]>([]);

  useEffect(() => {
    getTypes().then((types) => {
      setTypes(types);
    });
  }, []);

  const value = {
    types,
  };

  return (
    <TypesContext.Provider value={value}>{children}</TypesContext.Provider>
  );
};
