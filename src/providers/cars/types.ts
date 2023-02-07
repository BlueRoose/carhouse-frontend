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
  page: number;
}

export interface CarsContextType {
  count: number;
  cars: Cars[];
  isCarsLoading: boolean;
}
