import { FC, useState } from "react";
import Router from "./components/Router/Router";
import { BrandsProvider } from "./providers/brands/BrandsProvider";
import { CarsProvider } from "./providers/cars/CarsProvider";
import { TypesProvider } from "./providers/types/TypesProvider";

const App: FC = () => {
  return (
    <div className="App">
      <BrandsProvider>
        <CarsProvider>
          <TypesProvider>
            <Router />
          </TypesProvider>
        </CarsProvider>
      </BrandsProvider>
    </div>
  );
};

export default App;
