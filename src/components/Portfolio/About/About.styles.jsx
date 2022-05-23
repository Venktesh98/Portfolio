import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  technologiesAndTools: {
    fontSize: "58px",
    color: "#F86395",
    backgroundImage: "linear-gradient(90deg,#f472b6,#fb7185 78.84%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,

    display: "flex",
    justifyContent: "flex-start",
    margin: "0 0 1% 2%",
    // [theme.breakpoints.down("sm")]: {
    //   textAlign: "center",
    // },
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  skillsContent: {
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
    boxSizing: "border-box",
    margin: "15px",
    borderRadius: "5px",
    boxShadow: "0px 1px 3px 0 white",
    "&:hover": {
      //   fill: "yellow",
      cursor: "pointer",
    },
  },

  skillsLogo: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    marginTop: "inherit",
  },
  skillImg: {
    width: "55px",
    height: "55px",
  },

  skillsTitle: {
    color: "white",
  },
}));
