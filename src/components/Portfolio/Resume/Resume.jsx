import React from "react";
import { useStyles } from "./Resume.styles";

function Resume() {
  const classes = useStyles();
  return (
    <section className={classes.resumeSection} id="resume">
      <div className={classes.parallex}></div>
      <div className={classes.resumeHeaderLineAndResumeCopy}>
        Check Out My Resume!
      </div>
      <div
        className={`${classes.resumeHeaderLineAndResumeCopy} ${classes.resumeCopy}`}
      >
        <a
          href="https://drive.google.com/file/d/1JpZPm3MwzeIUe5d5V-jBHRhl6BgUi7IF/view?usp=sharing"
          download
          className={classes.resumeCopyLine}
        >
          Get a copy
        </a>
        {/* <a
          href={process.env.PUBLIC_URL + "/assets/contact.jpg"}
          download
          className={classes.resumeCopyLine}
        >
          Get a copy
        </a> */}
      </div>
    </section>
  );
}

export default React.memo(Resume)
