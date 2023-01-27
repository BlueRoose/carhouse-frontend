import { FC } from "react";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import SearchType from "../../components/SearchType/SearchType";
import styles from "./Collections.module.scss";

const Collections: FC = () => {
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
            <SearchType
              name="Brand"
              things={["BMW", "Porsche", "Aston Martin"]}
            />
            <SearchType
              name="Class"
              things={["BMW", "Porsche", "Aston Martin"]}
            />
            <SearchType
              name="Model"
              things={["BMW", "Porsche", "Aston Martin"]}
            />
            <SearchType
              name="Year"
              things={["BMW", "Porsche", "Aston Martin"]}
            />
          </div>
          <p className={styles.find}>FIND</p>
        </div>
        <div className={styles.main}>
          <div className={styles.sort}>
            <h3>Showing 9 from 98 results</h3>
            <SearchType
              name="Sort by"
              things={["Brand", "Class", "Model", "Year"]}
            />
          </div>
          <div className={styles.cards}>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
          <div className={styles.pagination}></div>
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default Collections;
