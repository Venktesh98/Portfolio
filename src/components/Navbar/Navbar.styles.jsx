import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: "1px solid yellow",
    // position:"relative"
  },
  navbar: {
    backgroundColor: "#14202e",
    boxShadow: "none",
    // border: "1px solid pink",
    marginTop: "2%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

    [theme.breakpoints.up("lg")]: {
      //   border: "1px solid red",
      marginLeft: "3%",
    },
  },
  LogoName: {
    position: "relative",
    color: "white",
    listStyle: "none",
    fontSize: "30px",
    fontWeight: "500",
    // border: "1px solid pink",
    // marginTop:"-5%"

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
  },
  FirstLetter: {
    position: "absolute",
    zIndex: "1",
    color: "#14202e",
    fontSize: "35px",
    fontWeight: "800",

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
    width: "37%",
    // border: "2px solid rgb(226, 223, 15)"

    "& li": {
      color: "rgb(172, 170, 170)",
      listStyle: "none",
      cursor: "pointer",
      fontWeight: 600,
    },

    "& li:hover": {
      color: "rgb(255, 255, 255)",
      cursor: "pointer",
    },
  },
}));
