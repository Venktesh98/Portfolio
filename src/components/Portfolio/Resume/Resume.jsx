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
          href="https://drive.google.com/file/d/15TGfyHFaqP1qclDquFzCr8B5K6Ap0wnx/view?usp=sharing"
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

export default React.memo(Resume)
