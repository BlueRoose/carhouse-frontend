import { FC, useState } from "react";
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
  sendRequest: (data: FormData) => void;
}

const Order: FC<Props> = ({ brand, name, id, closeWindow, sendRequest }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: 0,
    carId: id,
  });

  const handleChangeForm = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.order}>
      <div className={styles.span}>
        <span onClick={() => closeWindow()}>✖</span>
      </div>
      <div className={styles.info}>
        <h3>Selected car:</h3>
        <h5>{brand + " " + name}</h5>
        <div className={styles.namemail}>
          <Input
          type="text"
            label="Name"
            inputWidth={205}
            inputHeight={30}
            onChange={handleChangeForm}
          />
          <Input
          type="text"
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
            inputWidth={440}
            inputHeight={30}
            onChange={handleChangeForm}
          />
        </div>
        <p onClick={() => sendRequest(formData)}>Send my order</p>
      </div>
    </div>
  );
};

export default Order;
