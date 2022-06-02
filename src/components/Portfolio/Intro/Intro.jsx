import React from "react";
import styles from "./Intro.module.css";
import Typed from "react-typed";
import { Link } from "react-scroll";

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
              <div className={styles.HireMe}>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  Hire Me
                </Link>
              </div>

              <a
                href="https://drive.google.com/file/d/1JpZPm3MwzeIUe5d5V-jBHRhl6BgUi7IF/view?usp=sharing"
                download
                className={styles.Resume}
              >Resume
              </a>

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
