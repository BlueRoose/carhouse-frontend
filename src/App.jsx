import Router from "./components/Router/Router";
import { BrandsProvider } from "./providers/BrandsProvider";
import { CarsProvider } from "./providers/CarsProvider";
import { TypesProvider } from "./providers/TypesProvider";

const App = () => {
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
