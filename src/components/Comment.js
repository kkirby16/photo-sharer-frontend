import React, { Component } from "react";
import "./myStyles.css";

class Comment extends Component {
  render() {
    console.log("WHAT IS CURRENT USER?", this.props.currentUser);
    console.log("WHAT IS COMMENT HERE??", this.props.comment);

    return (
      <div>
        <li style={{ listStyleType: "none" }}>
          <strong>{this.props.currentUser.attributes.username}:</strong>{" "}
          {this.props.comment.text}
        </li>
        {/* <li>{this.props.comment.date}</li> */}
        {/* <li style={{ listStyleType: "none" }}>
          Posted by: {this.props.currentUser.attributes.username}
        </li> */}
        <br></br>
      </div>
    );
  }
}

export default Comment;
