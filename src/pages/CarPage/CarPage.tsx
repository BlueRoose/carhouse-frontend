import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { addRequest } from "../../api/buyRequests";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Line from "../../components/Line/Line";
import Order, { FormData } from "../../components/Order/Order";
import Question from "../../components/Question/Question";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { useTypes } from "../../hooks/useTypes";
import { Cars } from "../../providers/cars/types";
import styles from "./CarPage.module.scss";

const CarPage: FC = () => {
  const { id } = useParams();
  const { fullCars } = useCars();
  const { types } = useTypes();
  const { brands } = useBrands();
  const myCar = fullCars.find((car) => car.id === Number(id));
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const other: Array<Cars> = [];
  for (let i = 0; i < 100; i++) {
    let rand =
      fullCars[0]?.id +
      Math.random() * (fullCars[fullCars.length - 1]?.id + 1 - fullCars[0]?.id);
    if (fullCars[Math.floor(rand)]?.id !== myCar?.id && other.length < 3 && fullCars[Math.floor(rand)] && !other.includes(fullCars[Math.floor(rand)])) {
      other.push(fullCars[Math.floor(rand)]);
    } else {
      continue;
    }
    console.log(other);
  }

  const sendRequest = (data: FormData) => {
    addRequest(data);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [myCar?.id]);

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
          <img src={"http://localhost:5000/" + myCar?.img} alt="car" />
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
              <p
                className={styles.hover}
                onClick={() => order()}
                style={{ cursor: "pointer", backgroundColor: "#ffd600" }}
              >
                Order
              </p>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <h3>Vehicle information</h3>
          <div className={styles.items}>
            <Line name="Year" value={myCar?.year} />
            <Line name="Color" value={myCar?.color} />
            <Line name="Transmission" value={myCar?.transmition} />
            <Line name="Passengers" value={myCar?.passenger} />
            <Line name="Top Speed" value={myCar?.topSpeed} />
            <Line name="Horse Power" value={myCar?.horsePower} />
            <Line name="Time to 100 km/h" value={myCar?.time} />
            <Line name="Rating" value={myCar?.rating} />
          </div>
        </div>
      </div>
      <div className={styles.related}>
        <h3>You may also like</h3>
        <div className={styles.cards}>
          {other.map((oth, index) => {
            return (
              <CarCard
                key={index}
                id={oth?.id}
                brand={brands.find((brand) => brand?.id === oth?.brandId)?.name}
                name={oth?.name}
                img={oth?.img}
                price={oth?.price}
                transmition={oth?.transmition}
                passenger={oth?.passenger}
                topSpeed={oth?.topSpeed}
                horsePower={oth?.horsePower}
                time={oth?.time}
              />
            );
          })}
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default CarPage;
