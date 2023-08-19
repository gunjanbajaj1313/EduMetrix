import React from "react";
import styles from "./Team.module.css";
import ceo from "../../assets/15.jpg";
import teamBanner from "../../assets/10.png"

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamSection}>
        <div>
          <h1>Our Tech Team</h1>
          <p>"Meet Our Expertise in Technology and Innovation"</p>
        </div>
        <div className={styles.teamBox1}>
          <div className={styles.ceo}>
            <img src={ceo} alt="" />
            <h2>Mohammed Shafan</h2>
            <p>Cheif Executive Officer</p>
          </div>
          <div className={styles.teamMates}>
            <div>
              <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
              <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
            </div>
            <div>
            <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
              <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.teamBox2}>
        <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
              <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
              <div className={styles.teamMate}>
                <div style={{ width: "30%" }}>
                  <img src={ceo} alt="" />
                </div>

                <div style={{ width: "70%" }}>
                  <h2>Mohammed Shafan</h2>
                  <p>Cheif Executive Officer</p>
                </div>
              </div>
        </div>
      </div>
      <div className={styles.teamBanner}>
        <img src={teamBanner} alt="" />
      </div>
    </div>
  );
};

export default Team;
