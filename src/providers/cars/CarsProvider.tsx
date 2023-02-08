import { createContext, FC, useEffect, useState } from "react";
import { getCars } from "../../api/cars";
import { Cars, CarsContextType, Props } from "./types";

export const CarsContext = createContext<CarsContextType>({
  cars: [],
  fullCars: [],
  count: 0,
  isCarsLoading: true,
  setPage: (page) => {},
  setSortType: (type) => {},
  setBrand: (str) => {},
  setModel: (str) => {},
  setType: (str) => {},
  setYear: (str) => {},
  handleReset: () => {},
  brand: "",
  model: "",
  type: "",
  year: "",
});

export const CarsProvider: FC<Props> = ({ children }) => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [fullCars, setFullCars] = useState<Cars[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isCarsLoading, setIsCarsLoading] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [sortType, setSortType] = useState<string>("Not");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleReset = () => {
    setBrand("");
    setModel("");
    setType("");
    setYear("");
  }

  useEffect(() => {
    getCars(brand, type, model, year, page, sortType).then((cars) => {
      setCars(cars.rows);
      setFullCars(cars.fullCars)
      setCount(cars.count);
      setIsCarsLoading(false);
    });
  }, [page, sortType, brand, model, type, year]);

  const value = {
    cars,
    fullCars,
    count,
    isCarsLoading,
    setPage,
    setSortType,
    setBrand,
    setModel,
    setType,
    setYear,
    handleReset,
    brand,
    model,
    type,
    year
  };

  return (
    <CarsContext.Provider value={value}>
      {children}
    </CarsContext.Provider>
  );
};
