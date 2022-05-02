import {
  Button,
  Paper,
  TextareaAutosize,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import InputControl from "../Controls/Input/InputControl";
import { useStyles } from "./Contact.styles";
import emailjs from "@emailjs/browser";

function Contact() {
  const classes = useStyles();
  const form = useRef("");
  const [inputLabelProps, setInputLabelProps] = useState(false);

  const handleResetForm = () => {
    console.log("In handle Reset");
    form.current.reset();
    setInputLabelProps(!inputLabelProps);
    // debugger;
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    console.log("In handle sunmit!");

    emailjs
      .sendForm(
        "service_3agbarn",
        "template_zz6nhkl",
        form.current,
        "1tQgtCfxBuXe0iYh3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          handleResetForm();
          setInputLabelProps(!inputLabelProps);
        },
        (error) => {
          console.log(error.text);
          handleResetForm();
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSendEmail}>
        <Paper elevation={3} className={classes.contactFormContainer}>
          <div className={classes.contactFormContents}>
            {/* <div className={classes.contactFormImageContainer}>
              <img
                src={process.env.PUBLIC_URL + "/assets/contact.jpg"}
                alt="No Image"
                className={classes.contactFormImage}
              />
            </div> */}

            <div className={classes.contactInfo}>
              <div className={classes.contactAwesomeStuff}>
                Some awesome stuff is being cooked in your mind? 😎
              </div>

              <br />
              <div className={classes.contactGetInTouch}>Get in Touch</div>

              <div className={classes.newOpportunity}>
                Thrilled, to work on some cool stuff together? I'm always open
                for new opportunities to learn something out of the box everyday
                curious enough? then Let's connect. 🤝🏻
              </div>
              <br />

              <div>{/* Social media link */}</div>
            </div>

            <div className={classes.contactForm}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <InputControl
                    labelText="Name"
                    name="contactUserName"
                    inputLabelProps={inputLabelProps}
                    // InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputControl
                    labelText="Email"
                    name="contactUserEmail"
                    inputLabelProps={inputLabelProps}
                    // InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputControl
                    labelText="Subject"
                    name="contactEmailSubject"
                    inputLabelProps={inputLabelProps}
                    // InputLabelProps={{ shrink: true }}
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
        </Paper>
      </form>
    </div>
  );
}

export default Contact;
