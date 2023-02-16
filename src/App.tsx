import { FC } from "react";
import Router from "./components/Router/Router";
import { BrandsProvider } from "./providers/brands/BrandsProvider";
import { CarsProvider } from "./providers/cars/CarsProvider";
import { CompareProvider } from "./providers/compare/CompareProvider";
import { TypesProvider } from "./providers/types/TypesProvider";

const App: FC = () => {
  return (
    <div className="App">
      <BrandsProvider>
        <CarsProvider>
          <TypesProvider>
            <CompareProvider>
              <Router />
            </CompareProvider>
          </TypesProvider>
        </CarsProvider>
      </BrandsProvider>
    </div>
  );
};

export default App;
