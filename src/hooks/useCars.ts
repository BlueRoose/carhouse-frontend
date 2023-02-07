import { useContext } from "react";
import { CarsContext } from "../providers/cars/CarsProvider";

export function useCars() {
    return useContext(CarsContext);
}