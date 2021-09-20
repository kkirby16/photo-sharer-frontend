import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <li>{this.props.post.photo}</li>
        <li>{this.props.post.caption}</li>
        <li>{this.props.post.likes}</li>
      </div>
    );
  }
}

export default Post;
