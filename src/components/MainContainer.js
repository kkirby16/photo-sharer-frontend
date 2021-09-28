import React from "react";
import Posts from "./Posts.js";
import PostInput from "./PostInput.js";
import Home from "./Home.js";

const MainContainer = (props) => {
  console.log("props:", props.posts);
  if (props.currentUser !== null) {
    return (
      <div className="MainContainer">
        <Posts posts={props.posts} currentUser={props.currentUser} />
        <PostInput addPost={props.addPost} currentUser={props.currentUser} />
      </div> //good idea for the main thing that is being returned from each component to get a div of the name of the component spelled the exact same way.
    );
  } else return <Home />;
};
export default MainContainer;

//gonna be where all the action happens probably (like the main thing we are looking at.)
