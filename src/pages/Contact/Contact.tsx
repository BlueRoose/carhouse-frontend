import { FC } from "react";
import DealerCard from "../../components/DealerCard/DealerCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <Header />
      <div className={styles.map}>
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quae iure quia hic architecto asperiores ullam molestiae obcaecati
          culpa quibusdam perspiciatis doloremque illo soluta dolor dolorum
          corporis, mollitia rerum iusto.
        </p>
        <div className={styles.mapbg}>
          <img
            src="res/mapBackground.png"
            alt="map"
            width={1000}
            height={600}
          />
        </div>
        <div className={styles.form}>
          <div className={styles.namemail}>
            <Input label="Name" inputWidth={205} inputHeight={30} />
            <Input label="Email" inputWidth={205} inputHeight={30} />
          </div>
          <div className={styles.other}>
            <Input label="Subject" inputWidth={440} inputHeight={30} />
            <div className={styles.message}>
              <span>Message</span>
              <textarea></textarea>
            </div>
          </div>
          <p>Send message</p>
        </div>
      </div>
      <div className={styles.white}>
        <div className={styles.dealers}>
          <div className={styles.text}>
            <h2>Our Dealer Locations</h2>
            <p>Here you will receive timely advice and assistance.</p>
          </div>
          <div className={styles.cards}>
            <DealerCard
              city="London,"
              country="United Kingdom"
              description="59 Victoria Street, London, EC43 5BI"
            />
            <DealerCard
              city="Sydney,"
              country="Australia"
              description="3 Doris St, North Sydney NSW 2060"
            />
            <DealerCard
              city="Dhaka,"
              country="Bangladesh"
              description="Phoenix Tower, 2nd & 3rd Floor407, Tejgoan Industrial Area, Dhaka 1208"
            />
            <DealerCard
              city="Jakarta,"
              country="Indonesia"
              description="Jl. Jend. Sudirman, No.Kav 47-48, Karet Semanggi, Jakarta Selatan"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
