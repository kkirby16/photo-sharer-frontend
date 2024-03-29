import React from "react";
import Posts from "./Posts.js";
import PostInput from "./PostInput.js";
import Home from "./Home.js";
import "./myStyles.css";
import { connect } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MainContainer = (props) => {
  if (props.currentUser !== null) {
    return (
      <div className="MainContainer greyBackground">
        <PostInput addPost={props.addPost} currentUser={props.currentUser} />
        <br></br>
        <br></br>
        <Posts posts={props.filteredPosts} currentUser={props.currentUser} />
        <ScrollToTop
          smooth
          component={<FontAwesomeIcon icon={faChevronUp} />}
        />
      </div> //good idea for the main thing that is being returned from each component to get a div with the className spelled the exact same way as the component name.
    );
  } else return <Home />;
};

const mapStateToProps = (state) => {
  return {
    posts: state.allPosts.posts,
  };
};

export default connect(mapStateToProps)(MainContainer);
