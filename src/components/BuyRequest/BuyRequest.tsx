import { FC } from "react";
import { useBrands } from "../../hooks/useBrands";
import { useCars } from "../../hooks/useCars";
import { BuyRequest } from "../../pages/CheckUser/CheckUser";
import styles from "./BuyRequest.module.scss";

interface Props {
  items: BuyRequest[];
}

const Request: FC<Props> = ({ items }) => {
  const { fullCars } = useCars();
  const { brands } = useBrands();

  return (
    <div className={styles.request}>
      {items.map((item: BuyRequest, index) => {
        return (
          <div className={styles.req} key={index}>
            <h4>{item?.name + " - " + item?.phone}</h4>
            <p>{item?.email}</p>
            <p>
              {brands.find(
                (brand) =>
                  brand?.id ===
                  Number(
                    fullCars?.find(
                      (car) => Number(car.id) === Number(item?.carId)
                    )?.brandId
                  )
              )?.name +
                " " +
                fullCars?.find((car) => Number(car.id) === Number(item?.carId))
                  ?.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
