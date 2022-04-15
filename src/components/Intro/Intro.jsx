import React from "react";
import styles from "./Intro.module.css";
import Typed from "react-typed";

function Intro() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.DetailsContainer}>
        <div className={styles.Details}>
          <div className={styles.FullDetails}>
            <div className={styles.IntroLine}>Hii🙋🏻‍♂️, Geeks I'm </div>
            <h1 className={styles.fullName}>
              Venktesh Soma
              <span className={styles.bounce}></span>
            </h1>

            <p className={styles.Technologies}>
              <Typed
                strings={[
                  "React",
                  "Node",
                  "Express",
                  "JavaScript",
                  "GraphQL",
                  "Material UI/AntD",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </p>

            <span className={styles.TagLine}>
              Enthusiast, for building applications with Frontend and Backend
              operations 🚀
            </span>

            <div className={styles.HireDetails}>
              <div className={styles.HireMe}>Hire Me</div>
              <div className={styles.Resume}>Resume</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.IntroImageContainer}>
        <img
          src={process.env.PUBLIC_URL + "/assets/vgs.jpeg"}
          //   src={process.env.PUBLIC_URL + "/assets/programmer.gif"}
          className={styles.IntroImage}
        />
      </div>
    </div>
  );
}

export default Intro;
