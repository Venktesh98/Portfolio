import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <ul className={styles.navbarContainer}>
        <div className={styles.navbarContents}>
          <div>
            <li className={styles.logoName}>Venktesh Soma</li>
          </div>

          <div className={styles.navbarLinks}>
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
