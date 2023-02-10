import { FC } from "react";
import styles from "./Line.module.scss";

interface Props {
    name: string;
    value: string | number | undefined;
}

const Line: FC<Props> = ({ name, value }) => {
    return (
        <div className={styles.line}>
            <p className={styles.left}>{name}</p>
            <p className={styles.right}>{value}</p>
        </div>
    );
}

export default Line;