import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
} from "../../api/cars";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Line from "../../components/Line/Line";
import Order from "../../components/Order/Order";
import Question from "../../components/Question/Question";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { useTypes } from "../../hooks/useTypes";
import styles from "./CarPage.module.scss";

const CarPage = () => {
  const { id } = useParams();
  const { cars } = useCars();
  const { types } = useTypes();
  const { brands } = useBrands();
  const [isFavourited, setIsFavourited] = useState(false);
  const [isShowed, setIsShowed] = useState(false);

  const myCar = cars.find((car) => car.id === Number(id));
  const user = JSON.parse(localStorage.getItem("user"));

  const sendRequest = () => {
    setIsShowed(false);
    enablePageScroll();
  };

  const closeWindow = () => {
    setIsShowed(false);
    enablePageScroll();
  };

  const order = () => {
    window.scrollTo(0, 0);
    setIsShowed(true);
    disablePageScroll();
  };

  const handleFavourited = async () => {
    if (isFavourited) {
      await removeFromFavourites(user?.id, myCar.id);
    } else {
      await addToFavourites(user?.id, myCar.id);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { favouritedCars } = await getFavourites(user?.id);
      setIsFavourited(favouritedCars.some((car) => car.id === myCar?.id));
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [myCar?.id, user?.id]);

  return (
    <div id="carpage" className={styles.carpage}>
      {isShowed && (
        <>
          <div className={styles.wrapper}></div>
          <Order
            closeWindow={closeWindow}
            sendRequest={sendRequest}
            id={myCar?.id}
            brand={brands?.find((brand) => brand.id === myCar?.brandId)?.name}
            name={myCar?.name}
          />
        </>
      )}
      <Header />
      <div className={styles.main}>
        <div className={styles.upper}>
          <img src={myCar?.imgs[0]} alt="car" />
          <div className={styles.info}>
            <h4 className={styles.type}>
              {types.find((type) => type.id === myCar?.typeId)?.name}
            </h4>
            <h3>
              {brands.find((brand) => brand.id === myCar?.brandId)?.name +
                " " +
                myCar?.name}
            </h3>
            <div className={styles.buttons}>
              <p style={{ backgroundColor: "#272727", color: "#ffffff" }}>
                {myCar?.price} $
              </p>
              {!myCar?.buyRequestId && user?.id && <p
                className={styles.hover}
                onClick={() => order()}
                style={{ cursor: "pointer", backgroundColor: "#ffd600" }}
              >
                Order
              </p>}
              {!user?.id && <Link to="/authorization" style={{ textDecoration: "none", color: "black" }}><p
                className={styles.hover}
                style={{ cursor: "pointer", backgroundColor: "#ffd600" }}
              >
                Log in to buy
              </p></Link>}
              {user?.id && <p className={styles.compare} onClick={() => handleFavourited()}>
                {isFavourited ? "Remove from favourites" : "Add to favourites"}
              </p>}
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <h3>Vehicle information</h3>
          <div className={styles.items}>
            <Line name="Year" value={myCar?.year} />
            <Line name="Color" value={myCar?.color} />
            <Line name="Transmission" value={myCar?.transmission} />
            <Line name="Passengers" value={myCar?.passenger} />
            <Line name="Top Speed" value={myCar?.topSpeed} />
            <Line name="Horse Power" value={myCar?.horsePower} />
            <Line name="Time to 100 km/h" value={myCar?.time} />
            <Line name="Rating" value={myCar?.rating} />
          </div>
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default CarPage;
