import { FC, createContext, useState } from "react";
import { Props } from "../cars/types";
import { CompareContextType } from "./types";

export const CompareContext = createContext<CompareContextType>({
  carsToCompare: [],
  onAddCar: (id) => {},
  isCarAdded: (id) => false,
});

export const CompareProvider: FC<Props> = ({ children }) => {
  const [carsToCompare, setCarsToCompare] = useState<number[]>([]);

  const onAddCar = (id: number) => {
    if (carsToCompare.find((ID) => ID === id)) {
      setCarsToCompare((prev) => prev.filter((ID) => ID !== id));
    } else {
      carsToCompare.length < 2
        ? setCarsToCompare((prev) => [...prev, id])
        : setCarsToCompare((prev) => [prev[1], id]);
    }
  };

  const isCarAdded = (id: number) => {
    return carsToCompare.some((ID) => ID === id);
  };

  const value = {
    carsToCompare,
    onAddCar,
    isCarAdded,
  };

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
};
