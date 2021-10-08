import React, { Component } from "react";
import { addComment } from "../actions/allPosts.js";
import { connect } from "react-redux";
import "./myStyles.css";
import { Icon } from "@iconify/react";

//have own state not redux state.

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      comment: event.target.value,
    });
    // const { text } = event.target;
    // updateCommentInput(text);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = { ...this.state };
    this.props.addComment(comment, this.props.post.id);
    this.setState({
      comment: "",
    });
  };

  //get post's id from props. when send form say attach this comment to this post id.
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add a comment"
            name="text"
            onChange={this.handleChange}
            className="commentInput"
          />

          <input
            type="submit"
            value="Post comment"
            className="textForComments"
          />
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addComment: (comment) => dispatch(addComment(comment)),
//   };
// };

export default connect(null, { addComment })(CommentInput);

// //  create_table "comments", force: :cascade do |t|
// t.integer "user_id"
// t.integer "post_id"
// t.string "text"
// t.datetime "date"
// t.integer "likes"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// end
