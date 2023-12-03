import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import styles from "./Collections.module.scss";

const Collections = () => {
  const {
    cars,
    isCarsLoading
  } = useCars();
  const { brands } = useBrands();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.collections}>
      <Header />
      <div className={styles.info}>
        <div className={styles.text}>
          <span>C o l l e c t i o n s</span>
          <h2>Find your dream car here</h2>
          <p>
            The most powerful and prestigious cars at the most affordable price
          </p>
        </div>
        <div className={styles.main}>
          {cars.length ? (
            <>
              {isCarsLoading ? (
                <div className={styles.spinner}>
                  <BeatLoader color="#ffd600" size={50} margin="20px" />
                </div>
              ) : (
                <>
                  <div className={styles.cards}>
                    {cars.map((car, index) => {
                      return (
                        <CarCard
                          key={index}
                          brand={
                            brands.find((brand) => brand.id === car.brandId)
                              ?.name
                          }
                          id={car.id}
                          name={car.name}
                          img={car.imgs[0]}
                          price={car.price}
                          transmission={car.transmission}
                          passenger={car.passenger}
                          topSpeed={car.topSpeed}
                          horsePower={car.horsePower}
                          time={car.time}
                          isOrdered={Boolean(car.buyRequestId)}
                          isFavourited={Boolean(car.favouritedCarId)}
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          ) : (
            <h2 style={{ textAlign: "center", marginTop: "130px" }}>
              Sorry, we don't have any positions available at the moment :{"("}
            </h2>
          )}
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default Collections;
