import { makeStyles } from "@material-ui/core";

export const drawerWidth = 250;
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },
  navbar: {
    backgroundColor: "#14202e",
    boxShadow: "none",
    marginTop: "2%",
  },
  menuButton: {
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
  },
  // LogoName: {
  //   position: "absolute",
  //   color: "white",
  //   listStyle: "none",
  //   fontSize: "30px",
  //   fontWeight: "500",
  //   zIndex: 100,
  //   marginTop: "-1.8%",

  //   [theme.breakpoints.down("md")]: {
  //     marginTop: "-1.8%",
  //   },

  //   "&::after": {
  //     border: "1px solid pink",
  //     position: "absolute",
  //     left: "-2.3%",
  //     top: "-18%",
  //     backgroundColor: "rgb(248, 99, 149)",
  //     content: '""',
  //     height: " 60px",
  //     width: "60px",
  //     borderRadius: "50%",
  //   },
  //   "&:hover": {
  //     cursor: "pointer",
  //   },
  // },
  // FirstLetter: {
  //   position: "relative",
  //   zIndex: "1",
  //   color: "#14202e",
  //   fontSize: "35px",
  //   fontWeight: "800",
  //   left: "30%",

  //   "&::after": {
  //     content: '"gs"',
  //     color: "white",
  //     fontSize: "30.5px",
  //     fontWeight: "500",
  //   },
  // },

  LogoName: {
    position: "relative",
    height: "60px",
    width: "60px",
    backgroundColor: "rgb(248, 99, 149)",
    borderRadius: "50%",
    color: "#14202e",
    listStyle: "none",
    fontSize: "35px",
    fontWeight: "800",
    border: "1px solid pink",
    marginTop: "-1.9%",

    [theme.breakpoints.down("md")]: {
      marginTop: "1%",
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
  navIcon: {
    position: "absolute",
    top: "50%",
    left: "49%",
    transform: "translate(-50%, -50%)",
    margin: 0,

    [theme.breakpoints.down("xs")]: {
      top: "52%",
    },
  },
  navIconLetters: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "92%",
    color: "white",
    fontSize: "31px",
    fontWeight: "500",

    [theme.breakpoints.down("xs")]: {
      top: "54%",
    }
  },
  navbarLinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
    marginRight: "2%",
    height: "27px",

    "& li": {
      color: "rgb(172, 170, 170)",
      listStyle: "none",
      cursor: "pointer",
      fontWeight: 600,
    },

    "& li:hover": {
      color: "rgb(255, 255, 255)",
      cursor: "pointer",
      borderBottom: "2px solid white"
    },

    [theme.breakpoints.down("md")]: {
      width: "45%",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
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
    },
  },
}));
