import "date-fns";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./form-two.styles.css";

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

const FormTwo = () => {
  const classes = useStyles();
  const [experienceFormValue, setExperienceFormValue] = useState({
    position: "",
    company: "",
    from: new Date("2020-06-01"),
    to: new Date("2020-06-01"),
  });

  const [educationFormValue, setEducationFormValue] = useState({
    institution: "",
    course: "",
    subject: "",
    from: new Date("2020-06-01"),
    to: new Date("2020-06-01"),
  });

  const [totalEducation, setTotalEducation] = useState([]);
  const [totalExperience, setTotalExperience] = useState([]);

  const handleAddExperience = () => {
    setTotalExperience([...totalExperience, experienceFormValue]);
    setExperienceFormValue({
      ...experienceFormValue,
      position: "",
      company: "",
    });
  };
  const handleExperienceFromChange = (date) =>
    setExperienceFormValue({ ...experienceFormValue, from: date });
  const handleExperienceToChange = (date) =>
    setExperienceFormValue({ ...experienceFormValue, to: date });
  const handleFieldValueChange = (event) => {
    const { value, name } = event.target;
    setExperienceFormValue({ ...experienceFormValue, [name]: value });
  };
  return (
    <div className="first-login-form first-login-form__form-two">
      <div className="first-login-form__form-two__experience">
        <h3>Experience</h3>
        <div className="first-login-form__form-two__experience__added">
          {totalExperience.map((experience, i) => (
            <div
              key={i}
              className="first-login-form__form-two__experience__added-single"
            >
              <h3>{experience.company}</h3>
              <h5>{experience.position}</h5>
              <h4>{`${experience.from} - ${experience.to}`}</h4>
            </div>
          ))}
        </div>
        <form>
          <TextField
            id="outlined-basic"
            size="small"
            label="Position"
            variant="outlined"
            value={experienceFormValue.position}
            name="position"
            className={classes.inputElement}
            onChange={handleFieldValueChange}
          />
          <TextField
            id="outlined-basic"
            size="small"
            value={experienceFormValue.company}
            name="company"
            label="Company"
            variant="outlined"
            className={classes.inputElement}
            onChange={handleFieldValueChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-</div>picker-dialog"
              label="From"
              name="from"
              format="dd/MM/yyyy"
              className={classes.dateField}
              value={experienceFormValue.from}
              onChange={handleExperienceFromChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-</div>picker-dialog"
              label="To"
              name="to"
              format="dd/MM/yyyy"
              className={classes.dateField}
              value={experienceFormValue.to}
              onChange={handleExperienceToChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <div className="first-login-form__form-two__experience__button">
            <button type="button" onClick={handleAddExperience}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="first-login-form__form-two__experience">
        <h3>Education</h3>
        <div className="first-login-form__form-two__experience__added">
          {totalExperience.map((experience, i) => (
            <div
              key={i}
              className="first-login-form__form-two__experience__added-single"
            >
              <h3>{experience.company}</h3>
              <h5>{experience.position}</h5>
              <h4>{`${experience.from} - ${experience.to}`}</h4>
            </div>
          ))}
        </div>
        <form>
          <TextField
            id="outlined-basic"
            size="small"
            label="Institution"
            variant="outlined"
            value={experienceFormValue.position}
            name="institution"
            className={classes.inputElement}
            onChange={handleFieldValueChange}
          />
          <TextField
            id="outlined-basic"
            size="small"
            value={experienceFormValue.company}
            name="course"
            label="Course"
            variant="outlined"
            className={classes.inputElement}
            onChange={handleFieldValueChange}
          />
          <TextField
            id="outlined-basic"
            size="small"
            value={experienceFormValue.company}
            name="subject"
            label="Subject"
            variant="outlined"
            className={classes.inputElement}
            onChange={handleFieldValueChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-</div>picker-dialog"
              label="From"
              name="from"
              format="dd/MM/yyyy"
              className={classes.dateField}
              value={experienceFormValue.from}
              onChange={handleExperienceFromChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-</div>picker-dialog"
              label="To"
              name="to"
              format="dd/MM/yyyy"
              className={classes.dateField}
              value={experienceFormValue.to}
              onChange={handleExperienceToChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <div className="first-login-form__form-two__experience__button">
            <button type="button" onClick={handleAddExperience}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
