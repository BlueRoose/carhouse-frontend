import { useContext } from "react";
import { TypesContext } from "../providers/TypesProvider";

export function useTypes() {
  return useContext(TypesContext);
}
