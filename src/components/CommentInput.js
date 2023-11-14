import React, { Component } from "react";
import { addComment } from "../actions/allPosts.js";
import { connect } from "react-redux";
import "./myStyles.css";

//have own state not redux state.

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.commentInputRef = React.createRef();
    this.state = {
      comment: "",
    };
  }

  handleReset = () => {
    this.commentInputRef.current.value = "";
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = { ...this.state };
    this.props.addComment(comment, this.props.post.id);
    this.setState({
      comment: "",
    });
    this.handleReset();
  };

  //get post's id from props. when send form say attach this comment to this post id.
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="commentForm">
          <input
            placeholder="Add a comment..."
            name="text"
            onChange={this.handleChange}
            className="commentInput"
            ref={this.commentInputRef}
          />
          <button
            type="submit"
            value="Post comment"
            className="textForComments postButtonLocation"
          >
            &nbsp; &nbsp;&nbsp;&nbsp;{" "}
            <span className="postCommentLabel">Post</span>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentInput);
