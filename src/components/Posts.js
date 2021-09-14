import React, { Component } from "react";
import Post from "./Post.js";
// import Review from "./Review";

class Posts extends Component {
  //     return matchingReviews.map((review) => {
  //       return (
  //         <Review
  //           key={review.id}
  //           review={review}
  //           deleteReview={this.props.deleteReview}
  //         />
  //       );
  //     });
  //   };

  render() {
    return (
      <ul>
        {this.props.posts.map((post) => {
          return <Post />;
        })}
      </ul>
    );
  }
}

export default Posts;
