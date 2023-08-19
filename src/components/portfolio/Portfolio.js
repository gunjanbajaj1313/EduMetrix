import React from "react";
import styles from "./Portfolio.module.css";
import portfolio from "../../assets/banner.png";
import logo from "../..//assets/logo.png";
import {RiErrorWarningFill} from "react-icons/ri";


const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioSection}>
        <div className={styles.portfolioText}>
          <h1>Portfolio</h1>
          <p>EduMetrix Learning Solutions Pvt Ltd</p>
        </div>
        <div className={styles.bannerImage}>
          <img src={portfolio} alt="portfolio" />
        </div>
      </div>
      <div className={styles.tagLineContainer}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <span>Edumetrix</span>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.leftSection}>
            <span>edumetrix.io</span>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.icon}><RiErrorWarningFill/></div>
            <span>Banglore | Kerala</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
