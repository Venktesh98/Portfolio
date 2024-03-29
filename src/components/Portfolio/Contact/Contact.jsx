import { Button, Paper, TextareaAutosize, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import InputControl from "../../Controls/Input/InputControl";
import { useStyles } from "./Contact.styles";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Contact() {
  const classes = useStyles();
  const form = useRef("");
  const [inputLabelProps, setInputLabelProps] = useState(false);
  const [open, setOpen] = useState(false);

  const handleResetForm = () => {
    form.current.reset();
    setInputLabelProps(!inputLabelProps);
  };

  const handleSendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3agbarn",
        "template_zz6nhkl",
        form.current,
        "1tQgtCfxBuXe0iYh3"
      )
      .then(
        (result) => {
          setOpen(true);
          handleResetForm();
          setInputLabelProps(!inputLabelProps);
        },
        (error) => {
          handleResetForm();
        }
      );
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div id="contact">
      <form ref={form} onSubmit={handleSendEmail}>
        <Paper elevation={3} className={classes.contactFormContainer}>
          <div className={classes.contactFormContents}>
            <div className={classes.contactInfo}>
              <div className={classes.contactAwesomeStuff}>
                Some awesome stuff is being cooked in your mind? 😎
              </div>

              <br />
              <div className={classes.contactGetInTouch}>Get in Touch</div>

              <div className={classes.newOpportunity}>
                Thrilled, to work on some cool stuff together? I'm always open
                for new opportunities to learn something out of the box everyday
                curious enough? then let's connect.🤝🏻
              </div>
              <br />

              <div className={classes.socialLinksWrapper}>
                <a href="https://github.com/Venktesh98" target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className={classes.icons} />
                </a>

                <a href="https://www.linkedin.com/in/venktesh-soma-4631aa1b5/" target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin className={classes.icons} />
                </a>

                <a href="https://stackoverflow.com/users/19043829/venkyso" target="_blank"
                  rel="noopener noreferrer">
                  <FaStackOverflow className={classes.icons} />
                </a>

                <a href="https://www.facebook.com/venktesh.soma/" target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebookSquare className={classes.icons} />
                </a>

                <a href="https://www.instagram.com/mr._.vgs/" target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram className={classes.icons} />
                </a>
              </div>
            </div>

            <div className={classes.contactForm}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <InputControl
                    type="text"
                    labelText="Name"
                    name="contactUserName"
                    inputLabelProps={inputLabelProps}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputControl
                    type="email"
                    labelText="Email"
                    name="contactUserEmail"
                    inputLabelProps={inputLabelProps}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputControl
                    type="text"
                    labelText="Subject"
                    name="contactEmailSubject"
                    inputLabelProps={inputLabelProps}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div className={classes.root}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      required
                      minRows={5}
                      placeholder="   Message *"
                      name="contactUserMessage"
                      className={classes.textArea}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.submitButton}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className={classes.bottomTagline}>
            Coded with{" "}
            <span className={classes.heart}>
              <FavoriteIcon className={classes.heartIcon} />
            </span>
            by Venktesh Soma
          </div>
        </Paper>
      </form>

      {/* Snackbar PopUp */}
      <div className={classes.snackbar}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Details Submitted Successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default React.memo(Contact);
