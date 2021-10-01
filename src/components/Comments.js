import react, { Component } from "react";
import Comment from "./Comment.js";
import "./myStyles.css";

class Comments extends Component {
  //   componentDidUpdate(nextProps) {
  // //     if (nextProps.comments !== this.props.comments) {
  // //       this.props.comments = nextProps.comments;
  // //     }
  // //   }
  renderComments = () => {
    if (this.props.currentUser != null) {
      console.log("what is this?", this.props.comments);

      return (
        this.props.comments &&
        this.props.comments.map((comment) => {
          console.log("food is good", comment);
          return (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={this.props.currentUser}

              // //   review={review}
              // //   deleteReview={this.props.deleteReview}
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
