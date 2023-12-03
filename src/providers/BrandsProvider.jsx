import { createContext, useEffect, useState } from "react";
import { getBrands } from "../api/brands";

export const BrandsContext = createContext({ brands: [] });

export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands().then((brands) => {
      setBrands(brands.brands);
    });
  }, []);

  const value = {
    brands,
  };

  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
