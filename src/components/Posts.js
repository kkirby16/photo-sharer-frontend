import React, { Component } from "react";
import Post from "./Post.js";
import "./myStyles.css";
import { connect } from "react-redux";

// import Review from "./Review";

class Posts extends Component {
  renderPosts = () => {
    if (this.props.currentUser !== null && !this.props.posts.error) {
      return (
        this.props.allPosts &&
        this.props.allPosts.map((post) => {
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

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
