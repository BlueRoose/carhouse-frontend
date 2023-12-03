import { useState, useEffect } from "react";
import { addRequest } from "../../api/requests";
import DealerCard from "../../components/DealerCard/DealerCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [error, setError] = useState(false);

  const handleChangeForm = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const sendRequest = async () => {
    try {
      if (
        formData.email === "" ||
        formData.name === "" ||
        formData.subject === "" ||
        formData.text === ""
      ) {
        throw Error;
      } else {
        const data = await addRequest(formData);
        setFormData({ name: "", email: "", subject: "", text: "" });
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

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
            <Input
              type="text"
              label="Name"
              value={formData.name}
              inputWidth={205}
              inputHeight={30}
              onChange={handleChangeForm}
            />
            <Input
              pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
              type="text"
              label="Email"
              value={formData.email}
              inputWidth={205}
              inputHeight={30}
              onChange={handleChangeForm}
            />
          </div>
          <div className={styles.other}>
            <Input
              type="text"
              label="Subject"
              value={formData.subject}
              inputWidth={440}
              inputHeight={30}
              onChange={handleChangeForm}
            />
            <div className={styles.message}>
              <span>Message</span>
              <textarea
                name="Message"
                value={formData.text}
                onChange={(event) =>
                  handleChangeForm("text", event.target.value)
                }
              ></textarea>
            </div>
          </div>
          <h5 className={styles.error}>{error && "Something went wrong"}</h5>
          <p onClick={sendRequest}>Send message</p>
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
