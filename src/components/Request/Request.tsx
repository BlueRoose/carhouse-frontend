import { FC } from "react";
import { Req } from "../../pages/CheckUser/CheckUser";
import styles from "./Request.module.scss";

interface Props {
  items: Req[];
}

const Request: FC<Props> = ({ items }) => {
  return (
    <div className={styles.request}>
      {items.map((item: Req, index) => {
        return (
          <div className={styles.req} key={index}>
            <h4>{item?.name + " - " + item?.email}</h4>
            <p>{item?.subject}</p>
            <p>{item?.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
