import React from "react";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import "./homepage-header.styles.css";

const useStyles = makeStyles({
  headerButtons: {
    marginLeft: "15px",
  },
  headerButtonBold: {
    fontWeight: "bold",
    color: "#9e9e9e",
    "&:hover": {
      color: "black",
    },
  },
});

const HomepageHeader = () => {
  const matClasses = useStyles();
  return (
    <nav className="home-page-nav">
      <div className="home-page-nav__logo">
        <Link to="/">LI Clone</Link>
      </div>
      <div className="home-page-nav__buttons">
        <Link to="/signup">
          <Button
            className={`${matClasses.headerButtons} ${matClasses.headerButtonBold}`}
          >
            Join Now
          </Button>
        </Link>
        <Link to="/signin">
          <Button
            className={matClasses.headerButtons}
            style={{ borderRadius: "25px" }}
            size="large"
            variant="outlined"
            color="primary"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default withRouter(HomepageHeader);
