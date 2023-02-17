import { FC, useState } from "react";
import { addRequest } from "../../api/buyRequests";
import Input from "../Input/Input";
import styles from "./Order.module.scss";

export interface FormData {
  name: string;
  email: string;
  phone: number;
  carId: number | undefined;
}

interface Props {
  brand: string | undefined;
  name: string | undefined;
  id: number | undefined;
  closeWindow: () => void;
  sendRequest: () => void;
}

const Order: FC<Props> = ({ brand, name, id, closeWindow, sendRequest }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: 0,
    carId: id,
  });
  const [error, setError] = useState<boolean>(false);

  const handleChangeForm = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleClickSend = async () => {
    try {
      if (
        formData.name === "" ||
        formData.email === "" ||
        formData.phone === 0
      ) {
        throw Error;
      } else {
        await addRequest(formData);
        sendRequest();
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className={styles.order}>
      <div className={styles.span}>
        <span onClick={() => closeWindow()}>✖</span>
      </div>
      <div className={styles.info}>
        <h3>Selected car:</h3>
        <h4>{brand + " " + name}</h4>
        <div className={styles.namemail}>
          <Input
            type="text"
            pattern="^[a-zA-Z]+$"
            label="Name"
            inputWidth={205}
            inputHeight={30}
            onChange={handleChangeForm}
          />
          <Input
            type="text"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            label="Email"
            inputWidth={205}
            inputHeight={30}
            onChange={handleChangeForm}
          />
        </div>
        <div className={styles.other}>
          <Input
            type="text"
            label="Phone"
            pattern="[0-9]{5,15}"
            inputWidth={440}
            inputHeight={30}
            onChange={handleChangeForm}
          />
        </div>
        <h5>{error && "Something went wrong"}</h5>
        <p onClick={handleClickSend}>Send my order</p>
      </div>
    </div>
  );
};

export default Order;
