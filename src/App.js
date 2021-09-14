import "./App.css";
import { render } from "@testing-library/react";
import React from "react";

import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import { getAllPosts } from "./actions/allPosts.js";

import NavBar from "./components/NavBar.js";
import MainContainer from "./components/MainContainer.js";

class App extends React.Component {
  //using a class for this because we want our lifecycle method.

  componentDidMount() {
    this.props.getCurrentUser();
    if (this.props.getCurrentUser() !== null) {
      this.props.getAllPosts();
    }
  }
  //need to get the user that getCurrentUser loads into the redux store so App.js has the current user.

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
    //think about refactoring this to a navbar.
    //nav should have the welcome user and login/logout functionality.

    // <MainContainer/>
    // {/*main container might have a couple different components in it. */}
    // <Footer/>
  }
}

export default connect(null, { getCurrentUser, getAllPosts })(App); //we don't need state here but we need this action and we want it to happen everytime the component mounts

//can also add some routes and might be better to think about sooner rather than later.
//routing has to do with pointing to different components so we can build all the components at once, show them all on the screen, and then split up the components as I want
//routing is not that tough to add in after things are built out.
