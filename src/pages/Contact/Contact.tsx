import { FC, useState, useEffect } from "react";
import DealerCard from "../../components/DealerCard/DealerCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./Contact.module.scss";

interface FormData {
  name: string,
  email: string,
  subject: string,
  message: string,
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({name: "", email: "", subject: "", message: ""})

  const handleChangeForm = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contact}>
      <Header />
      <div className={styles.map}>
        <h2>Contact us</h2>
        <p>
          Our experts are always ready to process your orders, listen to your
          feedback or provide assistance.
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
            <Input label="Name" inputWidth={205} inputHeight={30} onChange={handleChangeForm} />
            <Input label="Email" inputWidth={205} inputHeight={30} onChange={handleChangeForm} />
          </div>
          <div className={styles.other}>
            <Input label="Subject" inputWidth={440} inputHeight={30} onChange={handleChangeForm} />
            <div className={styles.message}>
              <span>Message</span>
              <textarea name="Message" onChange={(event) => handleChangeForm("Message", event.target.value)}></textarea>
            </div>
          </div>
          <p onClick={() => console.log(formData)}>Send message</p>
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
