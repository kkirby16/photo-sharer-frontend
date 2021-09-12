import "./App.css";
import { render } from "@testing-library/react";
import React from "react";

import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";

class App extends React.Component {
  //using a class for this because we want our lifecycle method.

  componentDidMount() {
    this.props.getCurrentUser();
  }
  //need to get the user that getCurrentUser loads into the redux store so App.js has the current user.

  render() {
    //think about refactoring this to a navbar.
    return <NavBar />; //nav should have the welcome user and login/logout functionality.
    // <MainContainer/>
    // {/*main container might have a couple different components in it. */}
    // <Footer/>
  }
}

export default connect(null, { getCurrentUser })(App); //we don't need state here but we need this action and we want it to happen everytime the component mounts
