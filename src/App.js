import "./App.css";
import { render } from "@testing-library/react";
import React from "react";
import Login from "./components/Login.js";

class App extends React.Component {
  render() {
    return <Login />;
  }
}

export default App;
