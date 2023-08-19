import React from "react";
import styles from "./Services.module.css";
import services from "../../assets/services.jpg";
import service from "../../assets/service.png";

const Services = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceHeadContainer}>
          <h1>Our Services</h1>
          <h5>
            Fastest results assured with our efficent team and stramlined
            processes.
          </h5>
          <div>
            <div className={styles.serviceHeads}>
              <div>
                <div className={styles.box}>Website</div>
                <div className={styles.box} style={{ background: "#ff7e07" }}>
                  CRM Software
                </div>
                <img src={service} alt="services" />
              </div>
              <div>
                <div className={styles.box} style={{ background: "#ff7e07" }}>
                  Mobile App
                </div>
                <div className={styles.box}>Idea to Product</div>
                <div className={styles.box} style={{ background: "#ff7e07" }}>
                  Project Incubation Partnership
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.serviceImage}>
          <img src={services} alt="service" />
        </div>
      </div>
    </div>
  );
};

export default Services;
