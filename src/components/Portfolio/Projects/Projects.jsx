import React from "react";
import { useStyles } from "./Projects.style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useProjectLists } from "../../Services/useProjectLists";
import { SiGitlab } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Projects() {
  const classes = useStyles();
  const projectLists = useProjectLists();

  return (
    <section id="projects">
      <div className={classes.projects}>Projects</div>
      <div className={classes.workedOn}>
        Snapshot of what I have worked so far.
      </div>

      <div className={classes.projectsWrapper}>
        {projectLists.map((projectItem) => (
          <Card className={classes.projectCard}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={projectItem.projectImage}
                title={projectItem.projectName}
              />
              <CardContent className={classes.cardContent}>
                <div className={classes.projectTitle}>{projectItem.projectName}</div>
                <div className={classes.backupOptionsContainer}>
                  <a href={projectItem.projectLink} className={classes.backupOptionsLink}>
                    <span className={classes.backupOptionsText}>{projectItem.isProjectInGitlab ? "Gitlab" : "Github"}</span> <> {projectItem.isProjectInGitlab ? <SiGitlab className={classes.backupIcon} /> : <SiGithub className={classes.backupIcon} />}</>
                  </a>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

      </div>

    </section>
  );
}

export default Projects;
