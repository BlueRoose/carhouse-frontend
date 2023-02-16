import { createContext, FC, useEffect, useState } from "react";
import { getBrands } from "../../api/brands";
import { Brands, BrandsContextType, Props } from "./types";

export const BrandsContext = createContext<BrandsContextType>({ brands: [] });

export const BrandsProvider: FC<Props> = ({ children }) => {
  const [brands, setBrands] = useState<Brands[]>([]);

  useEffect(() => {
    getBrands().then((brands) => {
      setBrands(brands);
    });
  }, []);

  const value = {
    brands,
  };

  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
};
