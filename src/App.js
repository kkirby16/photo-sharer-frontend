import "./App.css";
import { render } from "@testing-library/react";
import React from "react";
import Login from "./components/Login.js";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <Login />;
  }
}

export default connect(null, { getCurrentUser })(App); //we don't need state here but we need this action and we want it to happen everytime the component mounts
