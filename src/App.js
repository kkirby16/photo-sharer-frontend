import "./App.css";
import { render } from "@testing-library/react";
import React from "react";
import { Icon } from "@iconify/react";

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
import "./components/myStyles.css";

class App extends React.Component {
  //using a class for this because we want our lifecycle method.
  constructor(props) {
    super(props);
    this.state = {
      filteredSearch: "",
    };
  }

  handleSearch = (event) => {
    this.setState({
      filteredSearch: event.target.value,
    });
  };

  filteredPosts = () => {
    return this.props.posts.posts.filter((post) => {
      return post.user.username
        .toLowerCase()
        .includes(this.state.filteredSearch.toLowerCase());
    });
  };

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
        {loggedIn ? (
          <input
            label="Filter Posts: "
            placeholder="Search posts by username"
            onChange={this.handleSearch}
            value={this.state.filteredSearch}
            className="searchByUsername"
          />
        ) : null}
        {loggedIn ? (
          <Icon
            icon="bx:bx-search"
            className="searchIcon"
            width="13"
            height="13"
          />
        ) : null}
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
                filteredPosts={this.filteredPosts()}
                currentUser={this.props.currentUser}
                addPost={this.props.addPost}
              />
            )}
          />
        </Switch>
      </div>
    );
    //we would render in a route if we need some logic in it or if we want to pass particular props that won't be automatically supplied.
    //render allows us to be more specific with my props like pass more or less props along to these rendered components I can use render to be more explicit with what I'm doing.
    //withrouter gives app those props.
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
  //need withRouter to give app the router props
  connect(mapStateToProps, {
    getCurrentUser,
    getAllPosts,
    addPost,
  })(App)
);

//routing is not that tough to add in after things are built out.
//the router props of history, match and location are going to be given to any children of a route automatically.
