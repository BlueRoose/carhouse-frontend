import styles from "./Request.module.scss";
import { deleteRequest } from "../../api/requests";

const Request = ({ items }) => {
  async function handleClick(id) {
    await deleteRequest(id);
  }
  return (
    <div className={styles.request}>
      {items.map((item, index) => {
        return (
          <div className={styles.req} key={index}>
            <h4>{item?.name + " - " + item?.email}</h4>
            <p>{item?.subject}</p>
            <p>{item?.text}</p>
            <button onClick={() => handleClick(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
