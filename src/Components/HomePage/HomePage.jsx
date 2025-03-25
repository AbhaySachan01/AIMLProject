import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import imgSrc from "../../assets/IMG.webp";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Grow Your Business With Us</h1>
          <p>We help businesses scale with strategic solutions and insights.</p>
          <div className={styles.buttons}>
            <Link to="/learn-more" className={styles.learnMore}>Learn More →</Link>
            <Link to="/quote" className={styles.getQuote}>Get a Quote</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
        <img src={imgSrc} alt="Sales Analyzer" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
