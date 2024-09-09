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
            <div className={styles.IntroLine}>Hii, Geeks I'm </div>
            <h1 className={styles.fullName}>
              Venktesh Soma
              <span className={styles.bounce}></span>
            </h1>

            <p className={styles.Technologies}>
              <Typed
                strings={[
                  "React",
                  "TypeScript",
                  "Next",
                  "Redux",
                  "React Query",
                  "JavaScript",
                  "Firebase",
                  "Material UI/AntD",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </p>

            <span className={styles.TagLine}>
              Enthusiast and Passionate for building fullStack applications 🚀
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
                href="https://drive.google.com/file/d/1bEhIHB6Y4zb3FNvEaXBx_BRRAkq18wsI/view?usp=drive_link"
                download
                className={styles.Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.IntroImageContainer}>
        <img
          src={process.env.PUBLIC_URL + "/assets/vgs.jpeg"}
          className={styles.IntroImage}
          alt="Not loaded"
        />
      </div>
    </div>
  );
}

export default React.memo(Intro);
