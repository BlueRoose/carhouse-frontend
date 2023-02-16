import { FC, useEffect } from "react";
import CompareLine from "../../components/CompareLine/CompareLine";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { useCompare } from "../../hooks/useCompare";
import { Cars } from "../../providers/cars/types";
import styles from "./Compare.module.scss";

const Compare: FC = () => {
  const { cars } = useCars();
  const { brands } = useBrands();
  const { carsToCompare } = useCompare();
  const autos: Cars[] = [];
  carsToCompare.map((id) => {
    cars.find((value) => {
      if (value.id === id) {
        autos.push(value);
      }
    });
  });

  console.log(autos);

  return (
    <div>
      <Header />
      <div className={styles.cover}>
        {carsToCompare.length === 2 ? (
          <>
            <h1>Compare them</h1>
            <div className={styles.compare}>
              <div className={styles.head}>
                <div className={styles.block}></div>
                <div className={styles.names}>
                  <p>
                    {brands.find((brand) => brand.id === autos[0].brandId)
                      ?.name +
                      " " +
                      autos[0].name}
                  </p>
                  <p>
                    {brands.find((brand) => brand.id === autos[1].brandId)
                      ?.name +
                      " " +
                      autos[1].name}
                  </p>
                </div>
              </div>
              <CompareLine
                name="Year"
                values={[autos[0].year, autos[1].year]}
              />
              <CompareLine
                name="Color"
                values={[autos[0].color, autos[1].color]}
              />
              <CompareLine
                name="Transmission"
                values={[autos[0].transmition, autos[1].transmition]}
              />
              <CompareLine
                name="Passengers"
                values={[autos[0].passenger, autos[1].passenger]}
              />
              <CompareLine
                name="Top Speed"
                values={[autos[0].topSpeed, autos[1].topSpeed]}
              />
              <CompareLine
                name="Horse Power"
                values={[autos[0].horsePower, autos[1].horsePower]}
              />
              <CompareLine
                name="Time to 100 km/h"
                values={[autos[0].time, autos[1].time]}
              />
              <CompareLine
                name="Rating"
                values={[autos[0].rating, autos[1].rating]}
              />
            </div>
          </>
        ) : (
          <h1>Add 2 cars to be able to compare them</h1>
        )}
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default Compare;
