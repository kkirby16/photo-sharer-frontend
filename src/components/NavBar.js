//it is wise to build little tiny chunks/representations of our dom in their own components.

//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Logout from "./Logout.js";

const NavBar = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? `Welcome, ${currentUser.name}` : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser, //can use shorthand here since this piece of state is called currentUser in the redux store too
  };
};

export default connect(mapStateToProps)(NavBar);
//connect returns a function that takes a component and then returns a component.
//navbar needs to know about everything that app knew about. needs to know about the current user.
