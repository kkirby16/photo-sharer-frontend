//it is wise to build little tiny chunks/representations of our dom in their own components.

import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";
import "./myStyles.css";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@material-ui/core/Fade";

//props get passed into a functional component as an argument and they will also come in as an object.
const Logout = ({ logout }) => {
  return (
    <Tooltip
      title="Logout"
      placement="left"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 0 }}
    >
      <Icon
        icon="teenyicons:logout-solid"
        width="25"
        height="25"
        onClick={logout}
        className="logoutButton"
      />
    </Tooltip>
  );
};

export default connect(null, { logout })(Logout);
//the logout action creator I imported simply gets passed into connect which turns it into a reduxed up action creator
//we can use this reduxed up action creator from this component to ultimately dispatch an action to the reducer which will then update the store.
