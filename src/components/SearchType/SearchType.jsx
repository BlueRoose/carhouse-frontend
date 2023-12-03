import styles from "./SearchType.module.scss";

const SearchType = ({ name, things, onChange }) => {
  const names = [];
  things.map((thing) => names.push(thing.name));
  const newNames = new Set(names);

  return (
    <div className={styles.search}>
      <p>{name}</p>
      <select
        onChange={(event) => onChange(event.target.value)}
        defaultValue={"Choose"}
      >
        <option disabled>Choose</option>
        {Array.from(newNames).map((thing, index) => {
          return <option key={index}>{thing}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchType;
