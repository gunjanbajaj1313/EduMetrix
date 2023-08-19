import React from "react";
import styles from "./Technology.module.css";
import ball from "../../assets/6.png";
import cone from "../../assets/25.png";
import horn from "../../assets/24.png";

const Technology = () => {
  return (
    <div className={styles.techContainer}>
      <div className={styles.techContent}>
        <div>
          <h1>Technology</h1>
          <p>We use the following technologies to develop your product</p>
          <img src={ball} alt="" className={styles.ball} />
          <img src={cone} alt="" className={styles.cone} />
          <img src={horn} alt="" className={styles.horn} />
        </div>
        <div className={styles.techStack}>
          <div style={{ display: "flex" }}>
            <div className={styles.techBox}>Front End</div>
            <div>
              <p>HTML CSS JAVASCRIPT REACT.JS</p>
              <h2>WEBSITE</h2>

              <div className={styles.col}></div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.techBox}>Front End</div>
            <div>
              <p>HTML CSS JAVASCRIPT REACT.JS</p>
              <h2>WEBSITE</h2>
              <div className={styles.col}></div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.techBox}>Front End</div>
            <div>
              <p>HTML CSS JAVASCRIPT REACT.JS</p>
              <h2>WEBSITE</h2>
              <div className={styles.col}></div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.techBox}>Front End</div>
            <div>
              <p>HTML CSS JAVASCRIPT REACT.JS</p>
              <h2>WEBSITE</h2>
              {/* <div className={styles.col}></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
