import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./signin.styles.css";
import Header from "../../components/homepage-header/homepage-header.component";
import { loginUserStartAsync } from "../../redux/user/user.actions";
import {
  isFetchingSelector,
  errorSelector,
} from "../../redux/user/user.selectors";

const useStyles = makeStyles({
  formInput: {
    margin: "5px 0",
  },
  formButton: {
    display: "block",
    marginTop: "20px",
    borderRadius: "25px",
    width: "30%",
    margin: "auto",
    minWidth: "111px",
  },
});

const Signin = ({ loginUser, isUserFetching, ifError }) => {
  const matStyles = useStyles();
  const [signinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });

  const handleChangeEvent = (event) => {
    const { value, name } = event.target;
    setSigninInfo({
      ...signinInfo,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const user = {
      ...signinInfo,
    };
    loginUser(user);
  };

  return (
    <div className="signin-page">
      {console.log("doing signin")}
      <Header />
      <div className="signin-page-content">
        <h3>Login to your professional life</h3>
        <div className="signin-page-content__form">
          <TextField
            className={matStyles.formInput}
            label="Email"
            variant="filled"
            type="email"
            onChange={handleChangeEvent}
            name="email"
          />
          <TextField
            className={matStyles.formInput}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={handleChangeEvent}
            name="password"
          />
          <div style={{ width: "100%" }}>
            <Button
              variant="contained"
              color="primary"
              className={matStyles.formButton}
              size="large"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUserStartAsync(user)),
});

const mapStateToProps = (state) => ({
  isUserFetching: isFetchingSelector(state),
  ifError: errorSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));
