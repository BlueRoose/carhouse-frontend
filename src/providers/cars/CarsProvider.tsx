import { createContext, FC, useEffect, useState } from "react";
import { getCars } from "../../api/cars";
import { Cars, CarsContextType, Props } from "./types";

export const CarsContext = createContext<CarsContextType>({cars: [], count: 0, isCarsLoading: true});

export const CarsProvider:FC<Props> = ({ children, page }) => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isCarsLoading, setIsCarsLoading] = useState(true);

  useEffect(() => {
    getCars(page).then((cars) => {
      setCars(cars.rows);
      setCount(cars.count);
      setIsCarsLoading(false);
    });
  }, [page]);

  const value = {
    cars,
    count,
    isCarsLoading,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};
