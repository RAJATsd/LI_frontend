import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { loadAlreadyLoggedinUserStartAsync } from "./redux/user/user.actions";
import SignupPage from "./pages/signup/signup.component";
import Homepage from "./pages/homepage/homepage.component";
import SigninPage from "./pages/signin/signin.component";
import {
  currentUserSelector,
  isCheckingLoggedInSelector,
} from "./redux/user/user.selectors";
import SnackbarComponent from "./components/snackbar/snackbar.component";
import UserHome from "./pages/user-home/user-home.component";

class App extends React.Component {
  componentDidMount = () => {
    const { ifLoggedIn } = this.props;
    ifLoggedIn();
  };

  render() {
    const { ifCheckingLoggedIn, currentUser } = this.props;
    return (
      <div className="app">
        {ifCheckingLoggedIn ? (
          <div>abc</div>
        ) : (
          <div>
            <SnackbarComponent />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" exact component={SignupPage} />
              <Route
                path="/signin"
                exact
                render={() =>
                  currentUser ? <Redirect to="/home" /> : <SigninPage />
                }
              />
              <Route path="/home" exact component={UserHome} />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: currentUserSelector(state),
  ifCheckingLoggedIn: isCheckingLoggedInSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ifLoggedIn: () => dispatch(loadAlreadyLoggedinUserStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
