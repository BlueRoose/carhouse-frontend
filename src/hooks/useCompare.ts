import { useContext } from "react";
import { CompareContext } from "../providers/compare/CompareProvider";

export function useCompare() {
  return useContext(CompareContext);
}
