//it is wise to build little tiny chunks/representations of our dom in their own components.

//for login forms you can put state for the login into react or into redux.

import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";
import "./myStyles.css";
import { Icon } from "@iconify/react";

//props get passed into a functional component as an argument and they will also come in as an object.
const Logout = ({ logout }) => {
  return (
    // <form onSubmit={logout}>
    //   <input className="logoutButton" type="submit" value="Log Out" />
    // </form>
    <Icon
      icon="teenyicons:logout-solid"
      width="25"
      height="25"
      onClick={logout}
      className="logoutButton"
    />
  );
};

export default connect(null, { logout })(Logout);
//shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, let's call it updateLoginForm, the value is whatever the value needs to be pointing to usually an action creator. and because key and value are the same, can just use { updateLoginForm }
//connect returns a function that takes a component and then returns a component.
//the updateLoginForm action creator you import simply gets passed into connect.
