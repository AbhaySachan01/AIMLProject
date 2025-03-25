import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oops! Page Not Found</p>
      <Link to="/" className={styles.homeButton}>
        Go Home
      </Link>
    </div>
  );
}
