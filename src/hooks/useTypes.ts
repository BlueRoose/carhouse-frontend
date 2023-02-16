import { useContext } from "react";
import { TypesContext } from "../providers/types/TypesProvider";

export function useTypes() {
  return useContext(TypesContext);
}
