import { Brands } from "../providers/brands/types";
import { Cars } from "../providers/cars/types";

export const sortByName = (cars: Array<Cars>, brands: Array<Brands>) => {
  let newBrands: Array<Brands> = brands.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const order: Array<number> = [];
  newBrands.map((brand) => order.push(brand.id));
  return cars.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};

export const sortByPopularity = (cars: Array<Cars>) => {
  return cars.sort((a, b) => (a.rating < b.rating ? 1 : -1));
};

export const sortByPriceLow = (cars: Array<Cars>) => {
  return cars.sort((a, b) => (a.price > b.price ? 1 : -1));
};

export const sortByPriceHigh = (cars: Array<Cars>) => {
  return cars.sort((a, b) => (a.price < b.price ? 1 : -1));
};
