export type Types = {
    id: number;
    name: string;
  };
  
  export type Props = {
    children: JSX.Element;
  }
  
  export interface TypesContextType {
    types: Types[];
  }
  