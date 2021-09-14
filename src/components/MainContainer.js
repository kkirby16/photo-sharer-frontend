import React from "react";
import Posts from "./Posts.js";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <Posts posts={this.props.posts} />
    </div> //good idea for the main thing that is being returned from each component to get a div of the name of the component spelled the exact same way.
  );
};
export default MainContainer;

//gonna be where all the action happens probably (like the main thing we are looking at.)
