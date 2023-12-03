import { useState } from "react";
import { createCar } from "../../api/cars";
import { useBrands } from "../../hooks/useBrands";
import { useTypes } from "../../hooks/useTypes";
import Input from "../Input/Input";
import SearchType from "../SearchType/SearchType";
import styles from "./AddCar.module.scss";

const AddCar = ({ items, onDelete }) => {
  const [form, setForm] = useState({
    name: "",
    year: 0,
    price: 0,
    color: "",
    transmission: "",
    passenger: 0,
    topSpeed: 0,
    horsePower: 0,
    time: 0,
    rating: 0,
    imgs: null,
    brandId: 0,
    typeId: 0,
  });
  const [selectedId, setSelectedId] = useState(null);
  const { brands } = useBrands();
  const { types } = useTypes();

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleChangeForm = (name, value) => {
    switch (name) {
      case "name":
        setForm({ ...form, name: value });
        break;
      case "year":
        setForm({ ...form, year: Number(value) });
        break;
      case "price":
        setForm({ ...form, price: Number(value) });
        break;
      case "color":
        setForm({ ...form, color: value });
        break;
      case "transmission":
        setForm({ ...form, transmission: value });
        break;
      case "passenger":
        setForm({ ...form, passenger: Number(value) });
        break;
      case "top speed":
        setForm({ ...form, topSpeed: Number(value) });
        break;
      case "horse power":
        setForm({ ...form, horsePower: Number(value) });
        break;
      case "time":
        setForm({ ...form, time: Number(value) });
        break;
      case "rating":
        setForm({ ...form, rating: Number(value) });
        break;
      default:
        break;
    }
  };

  const handleChangeType = (prop) => {
    const id = types?.find((type) => type.name === prop)?.id;
    setForm({ ...form, typeId: Number(id) });
  };

  const handleChangeBrand = (prop) => {
    const id = brands?.find((brand) => brand.name === prop)?.id;
    setForm({ ...form, brandId: Number(id) });
  };

  const handleChangeFile = (event) => {
    if (event.currentTarget.files != null) {
      let a = event.currentTarget.files[0];
      setForm({ ...form, img: a });
    }
  };

  return (
    <div className={styles.add}>
      <h3>Add new car</h3>
      <div className={styles.inputs}>
        <Input
          label="Name"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Year"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Color"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Price"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Transmission"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Passenger"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Top Speed"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Horse Power"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Time"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <Input
          label="Rating"
          inputWidth={120}
          inputHeight={20}
          type="text"
          onChange={handleChangeForm}
        />
        <SearchType name="Brand" things={brands} onChange={handleChangeBrand} />
        <SearchType name="Type" things={types} onChange={handleChangeType} />
        <input
          onChange={(event) => handleChangeFile(event)}
          className={styles.file}
          type="file"
        />
      </div>
      <p className={styles.click} onClick={() => createCar(form)}>
        Add new car
      </p>

      <select onChange={handleChange}>
        {items.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
      <h4 className={styles.click} onClick={() => onDelete(selectedId)}>Delete</h4>
    </div>
  );
};

export default AddCar;
