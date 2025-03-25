import React from "react";
// import Navbar from "../Navbar/Navbar"; // Navbar ko import kiya
import styles from "./AboutUs.module.css";

export default function About() {
  return (
    <>
      {/* <Navbar /> Navbar yahan add ho gaya */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Sales Analyzer & Prediction</h1>
          <p className={styles.description}>
            Your ultimate solution for data-driven sales insights! Our platform empowers businesses to analyze past sales trends, identify key growth opportunities, and make accurate predictions for future performance.
          </p>
          <p className={styles.description}>
            With advanced analytics and AI-driven forecasting, we help you optimize decision-making, boost revenue, and stay ahead of the competition. Whether you're a small business or a large enterprise, our intuitive dashboard provides real-time reports, trend analysis, and predictive insights tailored to your needs.
          </p>
          <p className={styles.highlight}>
            Join us in transforming raw sales data into actionable strategies. Unlock the power of predictive sales analytics today! 🚀
          </p>
        </div>
      </div>
    </>
  );
}
