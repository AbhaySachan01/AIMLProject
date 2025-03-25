import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Sales Analyzer </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/cases">Cases</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/signup" className={styles.ctaButton}>Get Started</Link>
    </nav>
  );
};

export default Navbar;
