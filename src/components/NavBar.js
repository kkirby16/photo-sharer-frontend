//it is wise to build little tiny chunks/representations of our dom in their own components.

import React from "react";
import { connect } from "react-redux";
import "./myStyles.css";

const NavBar = ({ currentUser }) => {
  if (currentUser) {
    return (
      <div>
        <li className="no_bullet_point_lis">
          <strong className="textForWelcome">
            &nbsp;&nbsp; Hi, {currentUser.name}
          </strong>
          <span className="mainPageTitleText">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Photo Sharer
          </span>
        </li>
        {currentUser && <hr className="navbarHr" />}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser, //can use shorthand here since this piece of state is called currentUser in the redux store too
  };
};

export default connect(mapStateToProps)(NavBar);
//connect returns a function that takes a component and then returns a component.
//navbar needs to know about everything that app knew about. needs to know about the current user.
