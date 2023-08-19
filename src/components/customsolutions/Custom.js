import React from "react";
import styles from "./Custom.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Custom = () => {
  return (
    <div className={styles.customContainer}>
      <div className={styles.customSection}>
        <div className={styles.customDesc}>
          <h1>Custom Solutions</h1>
          <p>
            Our team specializes in customizing IT development to meet your
            specific requirements.With our expertise, we deliver bespoke
            solutions tailored to address your unique challenges.Leveragge our
            technical prowess and propel your business forward with our
            customized IT solutions.
          </p>
        </div>
        <div className={styles.customHead}>
          <div className={styles.coursesContainer}>
            <div>
              <div className={styles.courseBox} style={{background:"#ffcf3e"}}>Front End Development</div>
              <div className={styles.courseBox} style={{background:"#ff7e07"}}>Progressive Web Apps</div>
              <div className={styles.courseBox} style={{background:"#fa643f",color:"white"}}>UI/UX Design</div>
              <div className={styles.courseBox} style={{background:"#fa3f8e",color:"white"}}>Cloud Solution Microsoft Azure</div>
            </div>
            <div>
              <div className={styles.courseBox} style={{background:"#ffcf3e"}}>Front End Development</div>
              <div className={styles.courseBox} style={{background:"#ff7e07"}}>Front End Development</div>
              <div className={styles.courseBox} style={{background:"#fa643f",color:"white"}}>Front End Development</div>
              <div className={styles.courseBox} style={{background:"#fa3f8e",color:"white"}}>Front End Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
