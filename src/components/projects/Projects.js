import React from "react";
import styles from "./Projects.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import delivery from "../../assets/delivery.png";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsSection}>
        <div className={styles.projectDesc}>
          <Card
            body
            style={{
              backgroundColor: "#FAE8E0",
              height: "100%",
              borderRadius: "0px",
            }}
          >
            <p>
              - Accelerate results with our streamlined processes and efficent
              team.
            </p>
            <p>
              - Leverage our extensive pool of skilled developers for rapid
              project completion.
            </p>
            <p>
              - Collaborative problem-solving and transparent communication
              ensure technical excellence.
            </p>
            <p>- Experience efficent, top-tier delivery with us.</p>
            <img src={delivery} alt="delivery" className={styles.delivery} />
          </Card>
        </div>
        <div className={styles.projectSecond}>
          <div className={styles.projectSection2}>
            <Card
              Card
              body
              style={{
                backgroundColor: "#FF0080",
                width: "100%",
                height: "100%",
                borderRadius: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ color: "white", marginTop: "50px" }}>Projects</h1>
              <h4 style={{ color: "white" }}>You name IT we make IT</h4>
              <div className={styles.projectHead}>
                <div>
                  <div className={styles.grayCard}>CRM</div>
                  <div className={styles.card}>E-commerce</div>
                  <div className={styles.grayCard}>Delivery</div>
                </div>
                <div>
                  <div className={styles.card}>OTT</div>
                  <div className={styles.grayCard}>Social Media</div>
                  <div className={styles.card}>Edu tech</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
