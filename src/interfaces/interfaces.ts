export interface ICar {
  id: number;
  name: string;
  transmition: string;
  passenger: number;
  topSpeed: number;
  horsePower: number;
  time: number;
  rating: number;
  img: string;
}

export interface IAction {
  type: string;
  payload: any;
}
