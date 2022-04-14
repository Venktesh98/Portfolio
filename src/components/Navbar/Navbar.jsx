// import React, { useState } from "react";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./Navbar.styles";
import { Hidden } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  // const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <>
      {/* <ul className={styles.NavbarContainer}> */}
      {/* <div className={styles.NavbarContents}>
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
        </div> */}
      {/* </ul> */}

      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Hidden lgUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <div className={classes.title}>
              <li className={classes.LogoName}>
                <span className={classes.FirstLetter}>V</span>
                <br />
              </li>
            </div>

            <div className={classes.navbarLinks}>
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
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
