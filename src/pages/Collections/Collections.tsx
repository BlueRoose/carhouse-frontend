import { FC, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import ReactPaginate from 'react-paginate';
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import SearchType from "../../components/SearchType/SearchType";
import {
  sortByName,
  sortByPopularity,
  sortByPriceHigh,
  sortByPriceLow,
} from "../../data/sorts";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { useTypes } from "../../hooks/useTypes";
import { Cars } from "../../providers/cars/types";
import styles from "./Collections.module.scss";

interface Props {
  handleChangePage: (page: number) => void;
}

interface Event {
  selected: number;
}

const Collections: FC<Props> = ({handleChangePage}) => {
  const { cars, count, isCarsLoading } = useCars();
  const { brands } = useBrands();
  const { types } = useTypes();
  const [carsList, setCarsList] = useState<Array<Cars>>([]);

  const handleChangeSort = (type: string) => {
    switch (type) {
      case "Name":
        setCarsList([...sortByName(cars, brands)]);
        break;
      case "Popularity":
        setCarsList([...sortByPopularity(cars)]);
        break;
      case "Low Price":
        setCarsList([...sortByPriceLow(cars)]);
        break;
      case "High Price":
        setCarsList([...sortByPriceHigh(cars)]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className={styles.searchs}></div>
          <p className={styles.find}>FIND</p>
        </div>
        <div className={styles.main}>
          {isCarsLoading ? (
            <div className={styles.spinner}>
              <BeatLoader color="#ffd600" size={50} margin="20px" />
            </div>
          ) : (
            <>
              <div className={styles.sort}>
                <h3>Showing 9 from {count} results</h3>
                <SearchType
                  name="Sort by"
                  things={[
                    { name: "Name" },
                    { name: "Popularity" },
                    { name: "Low Price" },
                    { name: "High Price" },
                  ]}
                  onChange={handleChangeSort}
                />
              </div>
              <div className={styles.cards}>
                {carsList.map((car, index) => {
                  return (
                    <CarCard
                    key={index}
                      brand={
                        brands.find((brand) => brand.id === car.brandId)?.name
                      }
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
                onPageChange={(event: Event) => handleChangePage(event.selected)}
                pageRangeDisplayed={9}
                pageCount={Math.ceil(count/9)}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </>
          )}
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default Collections;
