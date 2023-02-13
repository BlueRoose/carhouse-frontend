import { FC, useState, useEffect } from "react";
import { getBuyRequests } from "../../api/buyRequests";
import { getRequests } from "../../api/requests";
import { checkUser } from "../../api/user";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import Request from "../../components/Request/Request";
import BuyRequest from "../../components/BuyRequest/BuyRequest";
import styles from "./CheckUser.module.scss";
import AddInfo from "../../components/AddInfo/AddInfo";
import { addBrand } from "../../api/brands";
import { addType } from "../../api/types";

export interface Req {
  name: string;
  email: string;
  subject: string;
  text: string;
}

export interface BuyRequest {
  name: string;
  email: string;
  phone: string;
  carId: string;
}

const CheckUser: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [requests, setRequests] = useState<Req[]>([]);
  const [buyRequests, setBuyRequests] = useState<BuyRequest[]>([]);

  const handleChangePassword = (name: string, password: string) => {
    setPassword(password);
  };

  const handleLogin = () => {
    checkUser(password).then(() => setIsAuth(true));
  };

  useEffect(() => {
    getRequests().then((requests) => setRequests(requests));
    getBuyRequests().then((requests) => setBuyRequests(requests));
  }, []);

  return (
    <div className={styles.check}>
      {!isAuth ? (
        <div className={styles.auth}>
          <Logo />
          <h2>Admin panel</h2>
          <Input
            type="password"
            label="Enter your password:"
            inputWidth={300}
            inputHeight={25}
            onChange={handleChangePassword}
          />
          <p className={styles.button} onClick={handleLogin}>
            Login
          </p>
        </div>
      ) : (
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
              <BuyRequest items={buyRequests}/>
            ) : action === "brand" ? (
              <AddInfo onSubmit={addBrand}/>
            ) : action === "type" ? (
              <AddInfo onSubmit={addType}/>
            ) : action === "car" ? (
              <></>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckUser;
