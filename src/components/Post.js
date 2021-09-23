import React, { Component } from "react";
import Comments from "./Comments.js";
import CommentInput from "./CommentInput";

class Post extends Component {
  render() {
    console.log("NEW LOG", this.props.post);
    // const { image_url, caption, likes } = this.props.post.attributes;
    return (
      <ul className="Post_ul">
        {this.props.post.attributes.image_url ? (
          <img src={this.props.post.attributes.image_url}></img>
        ) : (
          <img
            src={this.props.post.attributes.image.record.seeded_image_data}
          ></img>
        )}
        <br></br>
        Posted by: <li>{this.props.post.attributes.user.username}</li>
        <br></br>
        Caption: <li>{this.props.post.attributes.caption}</li>
        <br></br>
        Amount of likes: <li>{this.props.post.attributes.likes}</li>
        <br></br>
        <CommentInput post={this.props.post} />
        <Comments
          comments={this.props.post.comments}
          currentUser={this.props.currentUser}
          post={this.props.post}
        />
        <br></br>
        <br></br>
        <br></br>
      </ul>
    );
  }
}

export default Post;
