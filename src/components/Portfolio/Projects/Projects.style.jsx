import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  projects: {
    fontSize: "58px",
    color: "#F86395",
    backgroundImage: "linear-gradient(90deg,#f472b6,#fb7185 78.84%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    textAlign: "center",
    marginTop: "7%",
  },
  workedOn: {
    color: "rgba(75,85,99)",
    fontSize: "28px",
    fontWeight: 600,
    margin: "1% 0 2% 0",
    textAlign: "center",
  },
  projectsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  projectCard: {
    width: "400px",
    backgroundColor: "#1F2937",
    boxShadow: "0px 1px 3px 0 white",
    height: 265,
    margin: "15px"
  },
  media: {
    height: 200,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  projectTitle: {
    fontSize: "17px",
    fontWeight: 600,
    backgroundImage: "linear-gradient(90deg,#f472b6,#fb7185 78.84%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

  },
  backupOptionsContainer: {
    // border: "1px solid white",
    width: "30%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "#111827",
    height: "2.5rem"
  },
  backupOptionsLink: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "200px",
    textDecoration: "none",
    color: "white"
  },
  backupOptionsText: {
    fontSize: "15px",
    fontWeight: 200
  },
  backupIcon: {
    width: "22px",
    height: "22px"
  }
}));
