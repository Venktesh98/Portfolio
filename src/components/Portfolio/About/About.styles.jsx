import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  aboutMeSection: {
    marginTop: "8.3%",
  },
  whoAmI: {
    color: "rgba(75,85,99)",
    fontSize: "28px",
    fontWeight: 600,
    margin: "1% 0 2% 0",
    textAlign: "center",
  },
  bio: {
    fontSize: "22px",
    textAlign: "center",
    // border: "2px solid yellow",
    width: "80%",
    margin: "0 auto",
    lineHeight: "35px",
    color: "white",
    fontWeight: 300,

    "& :nth-child(1),:nth-child(2)": {
      lineHeight: "35px",
    },
  },

  fullName: {
    fontWeight: "500",
  },

  aboutMeAndTechnology: {
    fontSize: "58px",
    color: "#F86395",
    backgroundImage: "linear-gradient(90deg,#f472b6,#fb7185 78.84%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    textAlign: "center",
    // marginBottom: "2.5%",

    // [theme.breakpoints.down("sm")]: {
    //   textAlign: "center",
    //   marginTop: "10%",
    //   lineHeight: "70px",
    // },
  },
  technologiesAndTools: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5% 0 2%",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "10%",
      lineHeight: "70px",
    },
  },
  skillsContainer: {
    display: "flex",
    // justifyContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    // border:"2px solid yellow",
    // width:"90%"
  },
  skillsContent: {
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "18%",
    boxSizing: "border-box",
    margin: "15px",
    borderRadius: "5px",
    boxShadow: "0px 1px 3px 0 white",

    "&:hover": {
      //   fill: "yellow",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25%",
    },
  },

  skillsLogo: {
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    marginTop: "inherit",

    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
  },
  skillImg: {
    width: "55px",
    height: "55px",
  },

  skillsTitle: {
    color: "white",
  },
}));
