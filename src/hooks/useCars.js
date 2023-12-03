import { useContext } from "react";
import { CarsContext } from "../providers/CarsProvider";

export function useCars() {
  return useContext(CarsContext);
}
