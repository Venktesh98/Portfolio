import { TextField } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./InputControl.styles";

function InputControl({ labelText, name, inputLabelProps }) {
  console.log("inputLabelProps:", inputLabelProps);
  const classes = useStyles();

  const ValidationTextField = withStyles({
    root: {
      "& input + fieldset": {
        borderColor: "white",
        borderWidth: 2,
        color: "white",
      },
      "& input:valid:focus + fieldset": {
        borderLeftWidth: 7,
        borderColor: "#F86395",
        padding: "4px !important", // override inline-style
      },
      "& label.Mui-focused": {
        color: "#F672A4",
        fontWeight: 800,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#14202E",
          borderWidth: 2,
        },
      },
    },
  })(TextField);

  // debugger;
  return (
    <div className={classes.root}>
      {/* <TextField
        id="standard-basic"
        label={labelText}
        name={name}
        className={classes.textFieldStyle}
      /> */}
      <div className={classes.textFieldContent}>
        <ValidationTextField
          className={classes.textFieldStyle}
          label={labelText}
          name={name}
          required
          variant="outlined"
          InputLabelProps={inputLabelProps === true ? { shrink: false } : null}
          // defaultValue=""
          id="validation-outlined-input"
        />
      </div>
    </div>
  );
}

export default InputControl;
