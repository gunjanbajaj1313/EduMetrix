import React from "react";
import styles from "./Build.module.css";
import buildgirl from "../../assets/buildgirl.png";
import buildboy from "../../assets/buildboy.png";

const Build = () => {
  return (
    <div className={styles.buildContainer}>
      <div className={styles.buildSection}>
        <div className={styles.buildgirl}>
          <img src={buildgirl} alt="buildgirl" />
        </div>
        <div className={styles.buildContent}>
          <div>
            <h1>Build With US</h1>
            <h5>Transforming Ideas into Reality</h5>
            <p>
              From conceptualization to development,implementation,and support,
              we offer comprehensive end-to-end IT solutions, streamling your
              processes and enhancing efficency.
            </p>
            <h5>Creating Tomorrow's Solutions Today</h5>
            <p>
              In a rapidly evolving digital landscape, we pride ourselves on our
              agility and ability to quickly adapt to changes, ensuring that you
              stay ahead of the competition.
            </p>
          </div>
        </div>
        <div className={styles.buildHeads}>
          <div>
            <img src={buildboy} alt="buildboy" />
          </div>

          <div>
            <div className={styles.buildPoints}>
              <div className={styles.website}>
                <h2>Website</h2>
              </div>
            </div>
            <div className={styles.mobileApp}>
              <h2>MobileApp</h2>
            </div>
            <div className={styles.customSoftware}>
              <h2>Custom Software</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
