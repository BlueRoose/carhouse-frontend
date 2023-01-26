import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import styles from "./Services.module.scss";

const Services: FC = () => {
    return (
        <div className={styles.services}>
            <Header />
            <Question />
            <Footer />
        </div>
    );
}

export default Services;