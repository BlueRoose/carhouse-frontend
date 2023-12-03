import { useState, useEffect } from "react";
import { getBuyRequests } from "../../api/buyRequests";
import { getRequests } from "../../api/requests";
import { getTypes } from "../../api/types";
import { getBrands } from "../../api/brands";
import { getCars, deleteCar } from "../../api/cars";
import Logo from "../../components/Logo/Logo";
import Request from "../../components/Request/Request";
import BuyRequest from "../../components/BuyRequest/BuyRequest";
import styles from "./CheckUser.module.scss";
import AddInfo from "../../components/AddInfo/AddInfo";
import AddCar from "../../components/AddCar/AddCar";
import { addBrand, deleteBrand, updateBrand } from "../../api/brands";
import { addType, deleteType, updateType } from "../../api/types";

const CheckUser = () => {
  const [action, setAction] = useState("");
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [requests, setRequests] = useState([]);
  const [buyRequests, setBuyRequests] = useState([]);

  useEffect(() => {
    getTypes().then((types) => setTypes(types.types));
    getBrands().then((brands) => setBrands(brands.brands));
    getCars().then((cars) => setCars(cars.cars));
    getRequests().then((requests) => setRequests(requests.requests));
    getBuyRequests().then((requests) => setBuyRequests(requests.buyRequests));
  }, []);

  return (
    <div className={styles.check}>
      <div className={styles.admin}>
        <Logo />
        <h1>Admin Panel</h1>
        <div className={styles.sides}>
          <div className={styles.list}>
            <p onClick={() => setAction("user")}>See user requests</p>
            <p onClick={() => setAction("buy")}>See buy requests</p>
            <p onClick={() => setAction("brand")}>Add new brand</p>
            <p onClick={() => setAction("type")}>Add new type</p>
            <p onClick={() => setAction("car")}>Add new car</p>
          </div>
          {action === "user" ? (
            <Request items={requests} />
          ) : action === "buy" ? (
            <BuyRequest items={buyRequests} />
          ) : action === "brand" ? (
            <AddInfo items={brands} OnCreate={addBrand} onDelete={deleteBrand} onUpdate={updateBrand} />
          ) : action === "type" ? (
            <AddInfo items={types} onCreate={addType} onDelete={deleteType} onUpdate={updateType} />
          ) : action === "car" ? (
            <AddCar items={cars} onDelete={deleteCar} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckUser;
