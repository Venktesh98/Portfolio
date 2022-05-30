import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  resumeSection: {
    position: "relative",
    // border: "2px solid yellow",
    marginTop: "8%",
  },
  parallex: {
    // backgroundImage: `linear-gradient(rgba(20, 32, 46, 0.2), rgb(31 41 55 / 70%)),url(${
    //   process.env.PUBLIC_URL + "/assets/laptop.jpg"
    // })`,
    backgroundImage: `linear-gradient(rgba(20, 32, 46, 0.2), rgb(31 41 55 / 70%)),url(${
      process.env.PUBLIC_URL + "/assets/laptopPen.jpg"
    })`,
    minHeight: "370px",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0",
  },
  resumeHeaderLineAndResumeCopy: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "45px",
    color: "white",
    fontWeight: "200",
    textTransform: "uppercase",
    letterSpacing: "5px",
    width: "100%",
    textAlign: "center",
  },
  resumeCopy: {
    marginTop: "8%",
    fontSize: "18px",
    border: "1px solid white",
    width: "13.5%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",

    "&:hover": {
      border: "1px solid white",
      backgroundColor: "rgba(20, 32, 46, 0.5)",
      cursor: "pointer",
    },
  },
  resumeCopyLine: {
    textDecoration: "none",
    color: "white",
  },
}));
