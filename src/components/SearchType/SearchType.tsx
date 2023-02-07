import { FC } from "react";
import { Brands } from "../../providers/brands/types";
import styles from "./SearchType.module.scss";

type Object = {
  name: string,
}

interface SearchTypeProps {
  name: string;
  things: Array<Brands | Object>;
  onChange: (prop: string) => void;
}

const SearchType: FC<SearchTypeProps> = ({ name, things, onChange }) => {
  return (
    <div className={styles.search}>
      <p>{name}</p>
      <select onChange={(event) => onChange(event.target.value)} defaultValue={"Choose"}>
        <option disabled>
          Choose
        </option>
        {things.map((thing, index) => {
          return <option key={index}>{thing.name}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchType;
