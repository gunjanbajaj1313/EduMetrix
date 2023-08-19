import React from "react";
import styles from "./Connect.module.css";
import banner from "../../assets/banner.png";
import email from "../../assets/email.png";
import link from "../../assets/link.png";
import call from "../../assets/call.png";
import logo from "../../assets/logo.png";

const Connect = () => {
  return (
    <div className={styles.connectContainer}>
      <div className={styles.tagLineContainer}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <span>Edumetrix Learning Solutions Ltd.</span>
          </div>
          <div className={styles.rightSection}>
            <span>Branches: Banglore | Kerala</span>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.leftSection}>
            <span>Connect with us.</span>
          </div>
        </div>
      </div>
      <div className={styles.connectSection}>
        <div className={styles.banner}>
          <img src={banner} alt="banner" />
        </div>
        <div className={styles.connect2}>
          <div className={styles.connectHead}>
            <img src={email} alt="email" />
            <div>
              <p>Email</p>
              <h4>contact@edumetrix.io</h4>
            </div>
          </div>

          <div className={styles.connectHead}>
            <img src={link} alt="link" />
            <div>
              <p>Linkedin</p>
              <h4>EduMetrix</h4>
            </div>
          </div>

          <div className={styles.connectHead}>
            <img src={call} alt="call" />
            <div>
              <p>Call us</p>
              <h4>+9180954985501</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
