import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import styles from "./BuyRequest.module.scss";
import { deleteRequest } from "../../api/buyRequests";

const Request = ({ items }) => {
  const { cars } = useCars();
  const { brands } = useBrands();

  async function handleClick(id) {
    await deleteRequest(id);
  }

  return (
    <div className={styles.request}>
      {items.map((item, index) => {
        return (
          <div className={styles.req} key={index}>
            <h4>{item?.phone}</h4>
            <p>{item?.email}</p>
            <p>
              {brands.find(
                (brand) =>
                  brand?.id ===
                  Number(
                    cars?.find(
                      (car) => Number(car.id) === Number(item?.carId)
                    )?.brandId
                  )
              )?.name +
                " " +
                cars?.find((car) => Number(car.id) === Number(item?.carId))
                  ?.name}
            </p>
            <button onClick={handleClick(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
