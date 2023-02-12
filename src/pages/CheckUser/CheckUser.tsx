import { FC, useState } from "react";
import { checkUser } from "../../api/user";
import Input from "../../components/Input/Input";
import styles from "./CheckUser.module.scss";

const CheckUser: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const handleChangePassword = (name: string, password: string) => {
    setPassword(password);
  };

  const handleLogin = () => {
    checkUser(password).then(() => setIsAuth(true));
  };
  return (
    <div className={styles.check}>
      {!isAuth ? (
        <div className={styles.auth}>
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
          <h1>Admin Panel</h1>
          <div className={styles.list}>
            <p>See user requests</p>
            <p>See buy requests</p>
            <p>Add new brand</p>
            <p>Add new type</p>
            <p>Add new car</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckUser;
