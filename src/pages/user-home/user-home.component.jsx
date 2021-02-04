import React from "react";

import "./user-home.styles.css";
import HeaderComponent from "../../components/user-header/user-header.component";
import SidebarComponent from "../../components/sidebar/sidebar.component";
import FeedComponent from "../../components/feeds/feeds.component";
import NewsFeedComponent from "../../components/news-feed/news-feed.component";
import FirstLoginFormComponent from "../../components/first-login-form/first-login-form.component";
import HOCForLoggedIn from "../../components/hoc-check-if-logged-in/check-if-logged-in.component";

const UserHome = ({ currentUser }) => {
  return (
    <div>
      <HeaderComponent />
      {currentUser.new_login ? (
        <FirstLoginFormComponent />
      ) : (
        <div className="user-homepage">
          <SidebarComponent />
          <FeedComponent />
          <NewsFeedComponent />
        </div>
      )}
    </div>
  );
};

export default HOCForLoggedIn(UserHome);
