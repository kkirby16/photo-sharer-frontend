import React, { Component } from "react";
import Post from "./Post.js";
import "./myStyles.css";
import { connect } from "react-redux";

// import Review from "./Review";

class Posts extends Component {
  renderPosts = () => {
    if (this.props.currentUser !== null && !this.props.posts.error) {
      return (
        //helper that returns post array. helper function would say do you have a filter or not. if has filter filter the array.
        this.props.posts && //need to filter this information that is going into our map here that is going to be passed along to the post itself.
        this.props.posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              currentUser={this.props.currentUser}
            />
          );
        })
      );
    } else {
      return [];
    }
  };

  render() {
    return <ul>{this.renderPosts()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
