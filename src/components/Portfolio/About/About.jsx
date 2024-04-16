import React from "react";
import {
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTypescript
} from "react-icons/si";
import { useStyles } from "./About.styles";

function About() {
  const classes = useStyles();
  return (
    <div id="about">
      <section className={classes.aboutMeSection}>
        <div className={classes.aboutMeAndTechnology}>About Me</div>
        <div className={classes.whoAmI}>Who am I?</div>
        <div className={classes.bio}>
          Hey, I am <span className={classes.fullName}>Venktesh Soma</span> well
          you can call me <span className={classes.fullName}>Venky </span>
          too😊. An Enthusiastic web developer based out in Ahmedabad(India)
          working as a Software Engineer at Cybage Sft Pvt Ltd, Always been keen
          and fascinated in learning and exploring new stuff out of the box,
          Also consistently having an 👀 on Software Development, Promoting
          innovative ideas and delivering results. Having an experience of more
          then 3 years under the hood, Excited and comfortable in working with
          web technologies like React, Next, Node etc.... Currently making my
          hands dirty by developing awesome features for Travel & Hospitality
          domain to get the consumer better User Experience🚀.
          <div>
            Out of the computer💻, much more into Travel, Hook up with friends,
            Watching Movies.
          </div>
          <div>Also trying to get better in Cricket!</div>
        </div>
      </section>

      <section className={classes.skillsSection}>
        <div
          className={`${classes.aboutMeAndTechnology} ${classes.technologiesAndTools}`}
        >
          Tools & Technologies
        </div>
        <div className={classes.skillsContainer}>
          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiReact className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>React</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiTypescript className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>TypeScript</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiHtml5 className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>HTML</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiCss3 className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>CSS</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiJavascript className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>JavaScript</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiJquery className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>JQuery</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiRedux className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Redux</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiNextdotjs className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Next.js</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiMongodb className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>MongoDB</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiPython className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Python</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiMaterialui className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>MaterialUI</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiBootstrap className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Bootstrap</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiAntdesign className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>AntD</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiGit className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Git</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiFirebase className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Firebase</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiHeroku className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Heroku</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiPostman className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Postman</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(About);
