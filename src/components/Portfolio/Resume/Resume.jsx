import React from "react";
import { useStyles } from "./Resume.styles";

function Resume() {
  const classes = useStyles();
  return (
    <section className={classes.resumeSection} id="resume">
      <div className={classes.parallex}></div>
      <div className={classes.resumeHeaderLineAndResumeCopy}>
        Grab my Resume!
      </div>
      <div
        className={`${classes.resumeHeaderLineAndResumeCopy} ${classes.resumeCopy}`}
      >
        <a
          href="https://drive.google.com/file/d/1Mo_wYzUUK_L_oMl33YgM1H7qWTZbEdKO/view?usp=drive_link"
          download
          target="_blank"
          rel="noopener noreferrer"
          className={classes.resumeCopyLine}
        >
          Get a copy
        </a>
      </div>
    </section>
  );
}

export default React.memo(Resume);
