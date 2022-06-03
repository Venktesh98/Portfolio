import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contactFormContainer: {
    padding: "4% 0 1% 0",
    margin: "3% 0 0",
    backgroundColor: "#1F2937",
    width: "100%",
  },
  contactFormContents: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 4% 3%",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  contactInfo: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contactAwesomeStuff: {
    color: "rgba(75,85,99)",
    fontSize: "26px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
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
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  socialLinksWrapper: {
    marginTop: "2%",
    "& :nth-child(1)": {
      paddingRight: "0.6%",
    },
    "& :nth-child(2),:nth-child(3),:nth-child(4)": {
      paddingRight: "0.5%",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  // Icons
  icons: {
    fontSize: "30px",
    fill: "white",
  },
  contactForm: {
    width: "40%",
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
  bottomTagline: {
    fontSize: "18px",
    fontWeight: "400",
    color: "rgb(255,207,241)",
    display: "flex",
    justifyContent: "center",
  },
  heartIcon: {
    fill: "red",
    padding: "0 5px",
  },
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
