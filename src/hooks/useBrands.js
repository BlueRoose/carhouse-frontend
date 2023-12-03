import { useContext } from "react";
import { BrandsContext } from "../providers/BrandsProvider";

export function useBrands() {
  return useContext(BrandsContext);
}
