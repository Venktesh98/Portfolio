import { makeStyles } from "@material-ui/core";

export const drawerWidth = 250;
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: "1px solid yellow",
    position: "relative",
  },
  navbar: {
    backgroundColor: "#14202e",
    boxShadow: "none",
    // border: "1px solid pink",
    marginTop: "2%",
  },
  menuButton: {
    // marginLeft: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      right: "3%",
      position: "absolute",
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: "3%",

    [theme.breakpoints.up("md")]: {
      //   border: "1px solid red",
      // marginLeft: "3%",
    },
  },
  LogoName: {
    position: "absolute",
    color: "white",
    listStyle: "none",
    fontSize: "30px",
    fontWeight: "500",
    zIndex: 100,
    // border: "1px solid pink",
    marginTop: "-1.8%",

    [theme.breakpoints.down("md")]: {
      marginTop: "-1.8%",
      //   border: "1px solid red",
      // marginLeft: "3%",
    },

    "&::after": {
      border: "1px solid pink",
      position: "absolute",
      left: "-2.3%",
      top: "-18%",
      backgroundColor: "rgb(248, 99, 149)",
      content: '""',
      height: " 60px",
      width: "60px",
      borderRadius: "50%",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  FirstLetter: {
    // position: "absolute",
    position: "relative",
    zIndex: "1",
    color: "#14202e",
    fontSize: "35px",
    fontWeight: "800",
    left: "30%",

    "&::after": {
      content: '"gs"',
      color: "white",
      fontSize: "30.5px",
      fontWeight: "500",
    },
  },
  navbarLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "40%",
    // border: "2px solid rgb(226, 223, 15)",
    marginRight: "2%",
    height:"27px",

    "& li": {
      color: "rgb(172, 170, 170)",
      listStyle: "none",
      cursor: "pointer",
      fontWeight: 600,
    },

    "& li:hover": {
      color: "rgb(255, 255, 255)",
      cursor: "pointer",
      borderBottom: "1.5px solid white"
    },

    [theme.breakpoints.down("md")]: {
      width: "45%",
    },

    [theme.breakpoints.down("sm")]: {
      // width: "50%",
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: "rgb(0,0,0,0.7)",
    backgroundColor: "rgb(20,32,46,0.9)",
  },
  closeMenuButton: {
    margin: "3% auto 0 3%",
    color: "white",
  },

  drawerLinks: {
    color: "white",
    fontSize: "18px",
    listStyle: "none",
    textAlign: "center",
    marginTop: "10%",

    "& li": {
      padding: "15%",
    },

    "& li:hover": {
      color: "rgb(243, 149, 180)",
      cursor: "pointer",
      // backgroundColor: "rgb(0,0,0,0.7)",
      // borderRadius: "22px",
    },
  },
}));
