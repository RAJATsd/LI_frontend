import "date-fns";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

import "./form-one.styles.css";

const useStyles = makeStyles({
  inputElement: {
    width: "48%",
    marginBottom: "16px",
  },
  buttonElement: {
    height: "48px",
  },
  dateField: {
    margin: 0,
  },
});

const FormOne = ({ handleNextClick }) => {
  const [dobDate, setDobDate] = useState(new Date("2014-08-18"));
  const handleDateChange = (date) => setDobDate(date);
  const classes = useStyles();
  return (
    <div className="first-login-form first-login-form__form-one">
      <h3>General Information</h3>
      <form>
        <TextField
          id="outlined-multiline-static"
          label="About yourself"
          multiline
          rows={2}
          variant="outlined"
          className={classes.inputElement}
        />
        <TextField
          id="outlined-multiline-static"
          label="State"
          variant="outlined"
          className={classes.inputElement}
        />
        <TextField
          id="outlined-multiline-static"
          label="Country"
          variant="outlined"
          className={classes.inputElement}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-</div>picker-dialog"
            label="Date Of Birth"
            format="dd/MM/yyyy"
            value={dobDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            className={classes.buttonElement}
            variant="contained"
            color="primary"
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
