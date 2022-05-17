import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contactFormContainer: {
    // border: "1px solid white",
    // display: "flex",
    // justifyContent: "space-between",
    padding: "4% 0 1% 0",
    margin: "3% 0 0",
    backgroundColor: "#1F2937",
    width: "100%",
  },
  contactFormContents: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 4% 3%",
    // border: "1px solid yellow",

    [theme.breakpoints.down("sm")]: {
      border: "1px solid yellow",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // margin: "3% 0 0",
    },
  },
  contactInfo: {
    // border: "2px solid yellow",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contactAwesomeStuff: {
    color: "rgba(75,85,99)",
    fontSize: "26px",
    fontWeight: 600,
    // border: "1px solid yellow",
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
      fontSize: "26px",
      fontWeight: 600,
      textAlign: "center",
    },
  },
  contactGetInTouch: {
    fontSize: "62px",
    color: "#F86395",
    backgroundImage: "linear-gradient(90deg,#f472b6,#fb7185 78.84%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  newOpportunity: {
    marginTop: "3.5%",
    width: "90%",
    fontSize: "22px",
    color: "rgba(156,163,175)",
    // border: "1px solid white",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  socialLinksWrapper: {
    marginTop: "2%",
    // display: "inline",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      border: "1px solid yellow",
    },
    "& :nth-child(1)": {
      paddingRight: "0.6%",
    },
    "& :nth-child(2)": {
      paddingRight: "0.6%",
    },
  },
  // Icons
  icons: {
    fontSize: "40px",
    // fill: "black",
    fill: "white",

    // paddingLeft:"10px",
    // "&:hover": {
    //   fill: "white",
    //   cursor: "pointer",
    // },
  },
  contactForm: {
    // border: "2px solid black",
    width: "40%",
    // height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      width: "80%",
    },
  },
  textArea: {
    width: "99%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: "4px",
    font: "inherit",
    "&:focus": {
      outline: "none !important",
      borderColor: "#14202E",
      borderWidth: 2,
      borderRadius: "4px",
      // padding: "4px !important",
      // borderLeftWidth: 7,
      // borderColor: "#F86395",
    },
    "&:valid": {
      padding: "4px !important",
      borderLeftWidth: 7,
      borderColor: "#F86395",
      width: "97%",
    },
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#14202E",
    color: "#fff",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#14202E",
    },
  },
}));
