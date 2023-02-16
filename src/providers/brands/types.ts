export type Brands = {
  id: number;
  name: string;
};

export type Props = {
  children: JSX.Element;
};

export interface BrandsContextType {
  brands: Brands[];
}
