import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <ul className={styles.NavbarContainer}>
        <div className={styles.NavbarContents}>
          <div>
            <li className={styles.LogoName}>
              <span className={styles.FirstLetter}>V</span>
              gs
            </li>
          </div>

          <div className={styles.NavbarLinks}>
            <div>
              <li>Home</li>
            </div>

            <div>
              <li>About</li>
            </div>

            <div>
              <li>Projects</li>
            </div>

            <div>
              <li>Resume</li>
            </div>

            <div>
              <li>Contact</li>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
