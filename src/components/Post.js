import React, { Component } from "react";
import Comments from "./Comments.js";
import { addComment } from "../actions/allPosts.js";
import { removePost } from "../actions/allPosts";
import CommentInput from "./CommentInput.js";
import { connect } from "react-redux";
import "./myStyles.css";
import { Icon } from "@iconify/react";

class Post extends Component {
  can_delete_post = () => {
    if (this.props.currentUser.id == this.props.post.attributes.user.id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    // console.log("***NEWEST LOG", this.props.post.id);
    // console.log("OUR COMMENTS", this.props.post.attributes.comments);
    // const { image_url, caption, likes } = this.props.post.attributes;
    return (
      <div>
        <ul className="Post_ul">
          {this.props.post.attributes.image_url ? (
            <img
              src={this.props.post.attributes.image_url}
              className="fitImage"
            ></img>
          ) : (
            <img
              src={this.props.post.attributes.image.record.seeded_image_data}
              className="fitImage"
            ></img>
          )}
          <br></br>
          <li>
            <strong className="usernameAndCaption">
              {this.props.post.attributes.user.username}:
            </strong>{" "}
            <span className="usernameAndCaption">
              {this.props.post.attributes.caption}{" "}
            </span>
          </li>
          {this.can_delete_post() === true ? (
            <Icon
              icon="octicon:trash-24"
              width="22"
              height="22"
              className="deleteButton"
              type="button"
              onClick={() => {
                this.props.removePost(this.props.post.id);
              }}
            >
              {" "}
            </Icon>
          ) : null}
          Likes: {this.props.post.attributes.likes}
          <br></br>
          <br></br>
          <CommentInput post={this.props.post} />
          <br></br>
          <u>Comments</u>
          <br></br>
          <br></br>
          <Comments
            comments={this.props.post.attributes.comments}
            currentUser={this.props.currentUser}
            post={this.props.post}
          />
          <br></br>
          <br></br>
          <br></br>
        </ul>
      </div>
    );
  }
}

export default connect(null, { removePost })(Post);
