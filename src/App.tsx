import { FC, useState } from "react";
import Router from "./components/Router/Router";
import { BrandsProvider } from "./providers/brands/BrandsProvider";
import { CarsProvider } from "./providers/cars/CarsProvider";
import { TypesProvider } from "./providers/types/TypesProvider";

const App: FC = () => {
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (page: number) => {
    setPage(page);
  }

  return (
    <div className="App">
      <CarsProvider page={page}>
        <BrandsProvider>
          <TypesProvider>
            <Router handleChangePage={handleChangePage} />
          </TypesProvider>
        </BrandsProvider>
      </CarsProvider>
    </div>
  );
};

export default App;
