import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { useStyles } from "./About.styles";
import React from "react";

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
          and facinated in learning and exploring new stuff out of the box, Also
          consistently having an 👀 on Software Development, Promoting
          innovative ideas and delivering results. Having an experience of more
          then 1.5 years under the hood, Constantly been proactively excited and
          comfortable in working with web technologies like
          React,Node,Express.MongoDB and etc....Currently making my hands dirty
          by developing awesome checkout pages on Ecommerce domain to get the
          consumer better User Experience🚀.
          <div>
            Out of the computer💻, I like to Travel, Read Books, Watching
            Movies.
          </div>
          <div>I am also trying to get better in Cricket!</div>
        </div>
      </section>

      <section className={classes.skillsSection}>
        <div
          className={`${classes.aboutMeAndTechnology} ${classes.technologiesAndTools}`}
        >
          Technologis & Tools
        </div>
        <div className={classes.skillsContainer}>
          <div className={classes.skillsContent} boxShadow={3}>
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
              <SiReact className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>React</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiRedux className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Redux</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiNodedotjs className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Node</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiExpress className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Express</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiMongodb className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>MongoDB</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiGraphql className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>GraphQL</div>
          </div>

          <div className={classes.skillsContent}>
            <div className={classes.skillsLogo}>
              <SiApollographql className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Apollo</div>
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
              <SiMysql className={classes.skillImg} />
            </div>
            <div className={classes.skillsTitle}>Mysql</div>
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

export default About;
