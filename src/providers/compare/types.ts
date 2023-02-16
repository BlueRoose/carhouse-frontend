export interface CompareContextType {
  carsToCompare: number[];
  onAddCar: (id: number) => void;
  isCarAdded: (id: number) => boolean;
}
