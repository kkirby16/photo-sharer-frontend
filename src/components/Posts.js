import React, { Component } from "react";
import Post from "./Post.js";
// import Review from "./Review";

class Posts extends Component {
  renderPosts = () => {
    if (this.props.currentUser !== null && !this.props.posts.error) {
      return (
        this.props.posts &&
        this.props.posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              currentUser={this.props.currentUser}

              // //   review={review}
              // //   deleteReview={this.props.deleteReview}
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

export default Posts;
