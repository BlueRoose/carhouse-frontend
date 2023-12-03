import styles from "./WhyChooseUs.module.scss";

const WhyChooseUs = () => {
  return (
    <div className={styles.us}>
      <h2>Why choose us</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="res/money.png" alt="price" />
          <h3>The best price that you really expect</h3>
          <p>Our cars are cheaper than in other car dealerships</p>
        </div>
        <div className={styles.card}>
          <img src="res/support.png" alt="support" />
          <h3>Support is ready 24/7 to serve you</h3>
          <p>
            Our managers are ready to answer your questions at any time of the
            day.
          </p>
        </div>
        <div className={styles.card}>
          <img src="res/star.png" alt="brand" />
          <h3>Top brand in the world</h3>
          <p>
            Our reputation based on our customer reviews makes us the most
            popular car dealership
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
