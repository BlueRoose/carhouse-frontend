import { FC } from "react";
import styles from "./SearchType.module.scss";

interface SearchTypeProps {
  name: string;
  things: Array<string>;
}

const SearchType: FC<SearchTypeProps> = ({ name, things }) => {
  return (
    <div className={styles.search}>
      <p>{name}</p>
      <select>
        <option disabled selected>
          Choose
        </option>
        {things.map((thing) => {
          return <option>{thing}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchType;
