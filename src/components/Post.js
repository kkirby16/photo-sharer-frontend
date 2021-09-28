import React, { Component } from "react";
import Comments from "./Comments.js";
import CommentInput from "./CommentInput";
import { removePost } from "../actions/allPosts";
import { connect } from "react-redux";

class Post extends Component {
  can_delete_post = () => {
    if (this.props.currentUser.id == this.props.post.attributes.user.id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    console.log("***NEWEST LOG", this.props.post.id);
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
        {this.can_delete_post() === true ? (
          <button
            type="button"
            onClick={() => {
              this.props.removePost(this.props.post.id);
            }}
          >
            Delete Post
          </button>
        ) : null}
        <br></br>
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

export default connect(null, { removePost })(Post);
