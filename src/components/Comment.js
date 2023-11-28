import React, { Component } from "react";
import { connect } from "react-redux";
import { removeComment } from "../actions/allPosts";

import "./myStyles.css";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@material-ui/core/Fade";

class Comment extends Component {
  can_delete_comment = () => {
    if (this.props.currentUser.id == this.props.comment.user_id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="wordWrap">
        <li
          style={{ listStyleType: "none", textAlign: "left" }}
          className="textForComments"
        >
          <strong>{this.props.comment.user.username}:</strong>{" "}
          {this.props.comment.text}
        </li>
        {this.can_delete_comment() === true ? (
          <Tooltip
            title="Delete comment"
            placement="right-start"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 0 }}
          >
            <Icon
              icon="octicon:trash-24"
              width="17"
              height="17"
              className="deleteCommentButton"
              type="button"
              onClick={() => {
                this.props.removeComment(
                  this.props.post.id,
                  this.props.comment.id
                );
              }}
            >
              {" "}
            </Icon>
          </Tooltip>
        ) : null}
        <br></br>
      </div>
    );
  }
}

export default connect(null, { removeComment })(Comment);
