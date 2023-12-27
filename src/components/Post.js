import React, { Component } from "react";
import Comments from "./Comments.js";
import { removePost } from "../actions/allPosts";
import { addLike } from "../actions/allPosts";
import { deleteLike } from "../actions/allPosts";

import CommentInput from "./CommentInput.js";
import { connect } from "react-redux";
import "./myStyles.css";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@material-ui/core/Fade";

class Post extends Component {
  can_delete_post = () => {
    if (this.props.currentUser.id == this.props.post.user.id) {
      return true;
    } else {
      return false;
    }
  };

  users_like = () => {
    //returning the actual like object that happened by the current user on this post.
    return this.props.post.likes.find(
      (like) => like.user_id === this.props.currentUser.id
    );
  };

  handle_likes = () => {
    if (
      !this.props.post.likes.some(
        //checks if there aren't any likes on this post where the user_id of the like is equal to the current user's id
        (like) => like.user_id === this.props.currentUser.id
      )
    ) {
      return (
        <Tooltip
          title="Like post"
          placement="right-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 0 }}
        >
          <Icon //like button
            icon="fluent:heart-20-regular"
            width="30"
            height="30"
            className="likeButton"
            onClick={() =>
              this.props.addLike(this.props.currentUser.id, this.props.post.id)
            }
          />
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          title="Unlike post"
          placement="right-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 0 }}
        >
          <Icon //unlike button
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
        </Tooltip>
      );
    }
  };

  render() {
    return (
      <div className="post">
        <ul className="Post_ul">
          {this.props.post.image_url ? (
            <img src={this.props.post.image_url} className="fitImage"></img>
          ) : (
            <img
              crossOrigin="anonymous"
              src={this.props.post.seeded_image_data}
              className="fitImage"
            ></img>
          )}{" "}
          <div className="postInfo">
            {this.handle_likes()}
            {this.can_delete_post() === true ? (
              <Tooltip
                title="Delete post"
                placement="right-start"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
              >
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
              </Tooltip>
            ) : null}
            <li className="likesAmount">
              {this.props.post.likes.length == 1
                ? this.props.post.likes.length + " like"
                : this.props.post.likes.length + " likes"}{" "}
            </li>
            <li className="textForPosts">
              <strong className="usernameAndCaption">
                {this.props.post.user.username}:
              </strong>{" "}
              <span className="usernameAndCaption">
                {this.props.post.caption}{" "}
              </span>
            </li>
          </div>
          <br></br>
          <br></br>
          <br></br>
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
