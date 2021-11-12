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
// { logout } is shorthand syntax of simply passing an object, the key is whatever i want to call this object in my component, so logout, the value is whatever the value needs to be pointing to, in this case an action creator. because key and value are the same, can just use { logout }
//connect returns a function that takes a component and then returns a component.
//the logout action creator I imported simply gets passed into connect which turns it into a reduxed up action creator
//we can use this reduxed up action creator from this component to ultimately dispatch an action to the reducer which will then update the store.
