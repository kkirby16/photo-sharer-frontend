import React from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Link } from "react-router-dom";

const Home = ({}) => (
  <div>
    <h2>
      Welcome, please <Link to="/signup">sign up</Link> or{" "}
      <Link to="/login">log in</Link>.
    </h2>
  </div>
);

export default Home;

//navlinks are good or navbars where you are going to see those links kinda at all times.
//these are just going to be links where i'm clicking on it, going somewhere, and not going to see it again... so link should be good for this.
