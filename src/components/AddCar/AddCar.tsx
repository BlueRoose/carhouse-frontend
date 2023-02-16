import { FC, useState } from "react";
import { createCar } from "../../api/cars";
import { useBrands } from "../../hooks/useBrands";
import { useTypes } from "../../hooks/useTypes";
import Input from "../Input/Input";
import SearchType from "../SearchType/SearchType";
import styles from "./AddCar.module.scss";

export interface Car {
  name: string;
  year: number;
  price: number;
  color: string;
  transmition: string;
  passenger: number;
  topSpeed: number;
  horsePower: number;
  time: number;
  rating: number;
  img: File | null;
  brandId: number;
  typeId: number;
}

const AddCar: FC = () => {
  const [form, setForm] = useState<Car>({
    name: "",
    year: 0,
    price: 0,
    color: "",
    transmition: "",
    passenger: 0,
    topSpeed: 0,
    horsePower: 0,
    time: 0,
    rating: 0,
    img: null,
    brandId: 0,
    typeId: 0,
  });
  const { brands } = useBrands();
  const { types } = useTypes();

  const handleChangeForm = (name: string, value: string) => {
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
        setForm({ ...form, transmition: value });
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
    }
  };

  const handleChangeType = (prop: string) => {
    const id = types?.find((type) => type.name === prop)?.id;
    setForm({ ...form, typeId: Number(id) });
  };

  const handleChangeBrand = (prop: string) => {
    const id = brands?.find((brand) => brand.name === prop)?.id;
    setForm({ ...form, brandId: Number(id) });
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    </div>
  );
};

export default AddCar;
