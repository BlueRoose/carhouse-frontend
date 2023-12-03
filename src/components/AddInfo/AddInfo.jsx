import { useState } from "react";
import Input from "../Input/Input";
import styles from "./AddInfo.module.scss";

const AddInfo = ({ items, onCreate, onDelete, onUpdate }) => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleChangeInput = (name, value) => {
    setName(value);
  };

  const handleChangeName = (name, value) => {
    setNewName(value);
  };

  return (
    <div className={styles.add}>
      <Input
        label="Enter name:"
        type="text"
        inputWidth={200}
        inputHeight={30}
        onChange={handleChangeInput}
      />
      <h4 onClick={() => onCreate(name)}>Create</h4>
      <select onChange={handleChange}>
        {items.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
      <h4 onClick={() => onDelete(selectedId)}>Delete</h4>
      <select onChange={handleChange}>
        {items.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
      <Input
        label="Enter new name:"
        type="text"
        inputWidth={200}
        inputHeight={30}
        onChange={handleChangeName}
      />
      <h4 onClick={() => onUpdate(selectedId, newName)}>Update</h4>
    </div>
  );
};

export default AddInfo;
