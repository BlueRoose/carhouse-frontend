import { createContext, useEffect, useState } from "react";
import { getCars } from "../api/cars";

export const CarsContext = createContext({
  cars: [],
  isCarsLoading: true,
});

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setIsCarsLoading] = useState(true);

  useEffect(() => {
    getCars().then((cars) => {
      setCars(cars.cars);
      setIsCarsLoading(false);
    });
  }, []);

  const value = {
    cars,
    isCarsLoading,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};
