import React from "react";
import react, { Component } from "react";
import Comment from "./Comment.js";
import "./myStyles.css";

class Comments extends Component {
  renderComments = () => {
    if (this.props.currentUser != null) {
      return (
        this.props.comments &&
        this.props.comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={this.props.currentUser}
              post={this.props.post}
            />
          );
        })
      );
    } else {
      return [];
    }
  };

  render() {
    return <ul>{this.renderComments()}</ul>;
  }
}

export default Comments;
