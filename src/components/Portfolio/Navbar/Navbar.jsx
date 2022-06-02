import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./Navbar.styles";
import { Box } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import NavLinks from "../../Services/NavLinks";

const Navbar = () => {
  const classes = useStyles();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleDrawerToggle = () => {
    console.log("In handleDrawerToggle");
    setToggleDrawer(!toggleDrawer);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <div className={classes.title}>
              <li className={classes.LogoName}>
                <span className={classes.FirstLetter}>V</span>
                <br />
              </li>
            </div>

            <div className={classes.navbarLinks}>
              <NavLinks />
            </div>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

        {/* ............... Navigation Drawer .................. */}
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={toggleDrawer}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          <Box className={classes.links}>
            <div className={classes.drawerLinks}>
              <NavLinks onCloseDrawer={handleDrawerToggle} />
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
