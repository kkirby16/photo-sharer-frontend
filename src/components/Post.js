import React, { Component } from "react";
import Comments from "./Comments.js";
import { removePost } from "../actions/allPosts";
import { addLike } from "../actions/allPosts";
import { deleteLike } from "../actions/allPosts";

import CommentInput from "./CommentInput.js";
import { connect } from "react-redux";
import "./myStyles.css";
import { Icon } from "@iconify/react";

class Post extends Component {
  can_delete_post = () => {
    if (this.props.currentUser.id == this.props.post.user.id) {
      return true;
    } else {
      return false;
    }
  };

  users_like = () => {
    return this.props.post.likes.find(
      (like) => like.user_id === this.props.currentUser.id
    );
  };

  handle_likes = () => {
    if (
      !this.props.post.likes.some(
        (like) => like.user_id === this.props.currentUser.id
      )
    ) {
      return (
        <Icon
          icon="fluent:heart-20-regular"
          width="30"
          height="30"
          className="likeButton"
          onClick={() =>
            this.props.addLike(this.props.currentUser.id, this.props.post.id)
          }
        />
      );
    } else {
      return (
        <Icon
          icon="fluent:heart-20-filled"
          width="30"
          height="30"
          className="unlikeButton"
          color="#ed4956"
          onClick={() =>
            this.props.deleteLike(
              this.props.currentUser.id,
              this.props.post.id,
              this.users_like()
            )
          }
        />
      );
    }
  };

  render() {
    return (
      <div>
        <ul className="Post_ul">
          {this.props.post.image_url ? (
            <img src={this.props.post.image_url} className="fitImage"></img>
          ) : (
            <img
              src={this.props.post.seeded_image_data}
              className="fitImage"
            ></img>
          )}{" "}
          {this.handle_likes()}
          <p className="likesAmount">
            {this.props.post.likes.length == 1
              ? this.props.post.likes.length + " like"
              : this.props.post.likes.length + " likes"}{" "}
          </p>
          <li className="textForPosts">
            <strong className="usernameAndCaption">
              {this.props.post.user.username}:
            </strong>{" "}
            <span className="usernameAndCaption">
              {this.props.post.caption}{" "}
            </span>
          </li>
          <br></br>
          <br></br>
          <br></br>
          {this.can_delete_post() === true ? (
            <Icon
              icon="octicon:trash-24"
              width="23"
              height="23"
              className="deleteButton"
              type="button"
              onClick={() => {
                this.props.removePost(this.props.post.id);
              }}
            >
              {" "}
            </Icon>
          ) : null}
          <br></br>
          <br></br>
          <br></br>
          <CommentInput post={this.props.post} />
          <br></br>
          <div className="commentsContainer">
            {this.props.post.comments.length !== 0 ? (
              <u className="textForComments commentsFont">Comments</u>
            ) : null}
            <Comments
              comments={this.props.post.comments}
              currentUser={this.props.currentUser}
              post={this.props.post}
            />
          </div>
          <br></br>
        </ul>
      </div>
    );
  }
}

export default connect(null, { removePost, deleteLike, addLike })(Post);
