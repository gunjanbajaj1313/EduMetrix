import React from "react";
import styles from "./About.module.css";
import logo from "../../assets/logo.png";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutHead}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h3>EDUMETRIX</h3>
          </div>
          <h1>About the Company</h1>
          <p>
            Founded in 2017,Edumetrix Learning Solutions Pvt Ltd has emerged as
            a leading IT firm in the education technology sector. With a focus
            on website and mobile application development, we deliver
            high-quality solutions that empower businesses and institutions to
            excel in the digital era.
          </p>
        </div>
        <div className={styles.aboutRight}>
          <img src={about} alt="about" className={styles.about} />
          <div className={styles.aboutText}>
          <p>
            Our expertise lies in utilizing a range of cutting-edge technologies
            including HTML, CSS, JavaScript, React Js, React Native, MySql, Node
            Js and Azure.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
