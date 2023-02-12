export type Cars = {
  id: number;
  name: string;
  year: number;
  price: number;
  color: string;
  transmition: string;
  passenger: number;
  topSpeed: number;
  horsePower: number;
  time: number;
  rating: number;
  img: string;
  brandId: number;
  typeId: number;
};

export type Props = {
  children: JSX.Element;
}

export interface CarsContextType {
  count: number;
  cars: Cars[];
  fullCars: Cars[];
  isCarsLoading: boolean;
  page: number;
  setPage: (page: number) => void;
  setSortType: (type: string) => void;
  setBrand: (str: string) => void;
  setModel: (str: string) => void;
  setType: (str: string) => void;
  setYear: (num: string) => void;
  handleReset: () => void;
  brand: string;
  model: string;
  type: string;
  year: string;
}
