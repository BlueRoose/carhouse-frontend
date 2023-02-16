import { FC, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import ReactPaginate from "react-paginate";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import SearchType, { Object } from "../../components/SearchType/SearchType";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { useTypes } from "../../hooks/useTypes";
import { Cars } from "../../providers/cars/types";
import styles from "./Collections.module.scss";
import { Link } from "react-router-dom";

interface Event {
  selected: number;
}

const Collections: FC = () => {
  const {
    cars,
    fullCars,
    count,
    isCarsLoading,
    page,
    setPage,
    setSortType,
    setBrand,
    setType,
    setModel,
    setYear,
    handleReset,
    brand,
    model,
    type,
  } = useCars();
  const { brands } = useBrands();
  const { types } = useTypes();
  const [carsList, setCarsList] = useState<Array<Cars>>([]);

  let models: Array<Object> = [];
  models = fullCars.map((car) => {
    if (
      car.brandId === Number(brands.find((br) => br.name === brand)?.id) &&
      car.typeId === Number(types.find((tp) => tp.name === type)?.id)
    ) {
      return { name: car.name };
    } else {
      return { name: "" };
    }
  });

  let years: Array<Object> = [];
  years = fullCars.map((car) => {
    if (
      car.brandId === Number(brands.find((br) => br.name === brand)?.id) &&
      car.name === model &&
      car.typeId === Number(types.find((tp) => tp.name === type)?.id)
    ) {
      return { name: String(car.year) };
    } else {
      return { name: "" };
    }
  });

  let newTypes: Array<Object> = [];
  newTypes = fullCars.map((car) => {
    if (car.brandId === Number(brands.find((br) => br.name === brand)?.id)) {
      return { name: String(types.find((tp) => tp.id === car.typeId)?.name) };
    } else {
      return { name: "" };
    }
  });

  const handleClickReset = () => {
    handleReset();
    window.location.reload();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    setCarsList(cars);
  }, [cars]);

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
        <div className={styles.filter}>
          <div className={styles.searchs}>
            <SearchType name="Brand" things={brands} onChange={setBrand} />
            <SearchType
              name="Type"
              things={newTypes.filter((type) => type.name !== "")}
              onChange={setType}
            />
            <SearchType
              name="Model"
              things={models.filter((model) => model.name !== "")}
              onChange={setModel}
            />
            <SearchType
              name="Year"
              things={years.filter((year) => year.name !== "")}
              onChange={setYear}
            />
          </div>
          <p className={styles.find} onClick={handleClickReset}>
            RESET
          </p>
          <Link to="/compare">
            <img
              className={styles.compare}
              width={64}
              height={64}
              src="res/ves.avif"
              alt="ves"
            />
          </Link>
        </div>
        <div className={styles.main}>
          {fullCars.length ? (
            <>
              {isCarsLoading ? (
                <div className={styles.spinner}>
                  <BeatLoader color="#ffd600" size={50} margin="20px" />
                </div>
              ) : (
                <>
                  <div className={styles.sort}>
                    <h3>
                      Showing {cars.length} from {count} results
                    </h3>
                    <SearchType
                      name="Sort by"
                      things={[
                        { name: "Name" },
                        { name: "Popularity" },
                        { name: "Low Price" },
                        { name: "High Price" },
                      ]}
                      onChange={setSortType}
                    />
                  </div>
                  <div className={styles.cards}>
                    {carsList.map((car, index) => {
                      return (
                        <CarCard
                          key={index}
                          brand={
                            brands.find((brand) => brand.id === car.brandId)
                              ?.name
                          }
                          id={car.id}
                          name={car.name}
                          img={car.img}
                          price={car.price}
                          transmition={car.transmition}
                          passenger={car.passenger}
                          topSpeed={car.topSpeed}
                          horsePower={car.horsePower}
                          time={car.time}
                        />
                      );
                    })}
                  </div>
                  <ReactPaginate
                    className={styles.root}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(event: Event) => setPage(event.selected)}
                    pageRangeDisplayed={9}
                    pageCount={Math.ceil(count / 9)}
                    previousLabel="<"
                  />
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
