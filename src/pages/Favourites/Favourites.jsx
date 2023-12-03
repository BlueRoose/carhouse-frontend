import { useState, useEffect } from "react";
import CarCard from "../../components/CarCard/CarCard";
import { getFavourites } from "../../api/cars";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import styles from "./Favourites.module.scss";
import { useBrands } from "../../hooks/useBrands";

const Collections = () => {
  const { brands } = useBrands();

  const user = JSON.parse(localStorage.getItem("user"));

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { favouritedCars } = await getFavourites(user.id);
      setFavourites(favouritedCars);
    }
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.collections}>
      <Header />
      <div className={styles.info}>
        <div className={styles.text}>
          <span>Favourites</span>
          <h2>Find your dream car here</h2>
          <p>
            The most powerful and prestigious cars at the most affordable price
          </p>
        </div>
        <div className={styles.main}>
          {favourites.length ? (
            <>
              <div className={styles.cards}>
                {favourites.map((car, index) => {
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
                      topSpeed={car.topSpeed}
                      horsePower={car.horsePower}
                      isFavourited={true}
                    />
                  );
                })}
              </div>
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
