import React from "react";
import styles from "./Clone.module.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import clone1 from "../../assets/clone1.jpg";
import clone2 from "../../assets/clone2.jpg";
import clone3 from "../../assets/clone3.jpg";
import clone4 from "../../assets/clone4.jpg";
import clone5 from "../../assets/clone5.jpg";
import clone6 from "../../assets/clone6.jpg";

const Clone = () => {
  return (
    <div className={styles.cloneContainer}>
      <div className={styles.cloneSection}>
        <div className={styles.leftSection}>
          <Card
            style={{
              width: "100%",
              height: "49rem",
              // backgroundColor: "#FF0080",
              // background: "rgb(255,126,9)",
              background:
                "linear-gradient(151deg, rgba(252,88,89,1) 93%, rgba(252,88,89,1) 93%, rgba(251,85,95,1) 100%)",
              color: "white",
              borderRadius: "0px",
            }}
          >
            <Card.Body>
              <h1>Clone Projects</h1>
              <Card.Text>
                Experience the power of our cloning apps, revolutionizing
                seamless replication for enhanced productivity and efficency.
                <h2>Ready to Get Live in 99 Hrs*</h2>
              </Card.Text>

              <div className={styles.cloneHeads}>
                <div>
                  <div className={styles.card}>E-commerce</div>
                  <div className={styles.grayCard}>Delivery</div>
                </div>
                <div>
                  <div className={styles.grayCard}>Social Media</div>
                  <div className={styles.card}>Edu-tech</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.rightSection}>
          <Card body>
            <div className={styles.cloneImages}>
              <div className={styles.cloneImage1}>
                <img src={clone1} alt="clone1" />
                <img src={clone2} alt="clone2" />
                <img src={clone3} alt="clone3" />
              </div>
              <div className={styles.cloneImage2}>
                <img src={clone4} alt="clone4" />
                <img src={clone5} alt="clone5" />
                <img src={clone6} alt="clone6" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Clone;
