import { FC, useState } from "react";
import Input from "../Input/Input";
import styles from "./AddInfo.module.scss";

interface Props {
    onSubmit: (name: string) => void;
}

const AddInfo: FC<Props> = ({ onSubmit }) => {
    const [name, setName] = useState<string>("");

    const handleChangeInput = (name: string, value: string) => {
        setName(value);
    }

    return (
        <div className={styles.add}>
            <Input label="Enter name:" type="text" inputWidth={200} inputHeight={30} onChange={handleChangeInput} />
            <h4 onClick={() => onSubmit(name)}>Add</h4>
        </div>
    );
}

export default AddInfo;