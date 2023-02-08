import { FC } from "react";
import { Brands } from "../../providers/brands/types";
import styles from "./SearchType.module.scss";

export type Object = {
  name: string,
}

interface SearchTypeProps {
  name: string;
  things: Array<Brands | Object>;
  onChange: (prop: string) => void;
}

const SearchType: FC<SearchTypeProps> = ({ name, things, onChange }) => {
  const names: string[] = [];
  things.map(thing => names.push(thing.name));
  const newNames = new Set(names);

  return (
    <div className={styles.search}>
      <p>{name}</p>
      <select onChange={(event) => onChange(event.target.value)} defaultValue={"Choose"}>
        <option disabled>
          Choose
        </option>
        {Array.from(newNames).map((thing, index) => {
          return <option key={index}>{thing}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchType;
