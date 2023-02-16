import { useContext } from "react";
import { BrandsContext } from "../providers/brands/BrandsProvider";

export function useBrands() {
  return useContext(BrandsContext);
}
