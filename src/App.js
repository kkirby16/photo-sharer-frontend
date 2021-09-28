import "./App.css";
import { render } from "@testing-library/react";
import React from "react";

import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import { getAllPosts, addPost } from "./actions/allPosts.js";

import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Logout from "./components/Logout.js";

import MainContainer from "./components/MainContainer.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

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
    const { loggedIn } = this.props;

    return (
      <div className="App">
        {loggedIn ? <Logout /> : null}
        <NavBar />
        <Switch>
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={(props) => (
              <MainContainer
                {...props}
                posts={this.props.posts}
                currentUser={this.props.currentUser}
                addPost={this.props.addPost}
              />
            )}
          />
        </Switch>
        {/* <Route exact path="/" component={MainContainer} /> */}
      </div>
    );

    //we would render in a route if we need some logic in it or if we want to pass particular props that won't be automatically supplied.
    //render allows us to be more specific with my props like pass more or less props along to these rendered components I can use render to be more explicit with what I'm doing.
    //withrouter gives app those props.
    //think about refactoring this to a navbar.
    //nav should have the welcome user and login/logout functionality.

    // <MainContainer/>
    // {/*main container might have a couple different components in it. */}
    // <Footer/>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.allPosts,
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    getAllPosts,
    addPost,
  })(App)
); //we don't need state here but we need this action and we want it to happen everytime the component mounts

//can also add some routes and might be better to think about sooner rather than later.
//routing has to do with pointing to different components so we can build all the components at once, show them all on the screen, and then split up the components as I want
//routing is not that tough to add in after things are built out.

//logout maybe should be in the navbar once I am logged in.
//do i need to wrap the connect with withRouter?
//**the router props: history, match and location are going to be given to any children of a route automatically. */
//need withRouter to give app the router props
