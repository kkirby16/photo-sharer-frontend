import React, { Component } from "react";
import { addPost } from "../actions/allPosts";
import "./myStyles.css";

class PostInput extends Component {
  state = {
    image: "",
    caption: "",
    //add likes?
  };

  handleChange = (event) => {
    this.setState({
      caption: event.target.value,
    });
  };

  handleImageChange = (event) => {
    if (event.target.files[0]) this.setState({ image: event.target.files[0] });
  };

  uploadPhoto = () => {
    const formData = new FormData();

    formData.append("image", this.state.image);
    formData.append("user_id", this.props.currentUser.id);
    formData.append("caption", this.state.caption);
    formData.append("likes", 0);

    // configure your fetch url appropriately
    this.props.addPost(formData);

    fetch("http://localhost:4500/api/v1/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        addPost(data);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.caption);
    this.uploadPhoto();

    this.setState({
      image: "",
      caption: "",
    });
  };

  render() {
    return (
      <div>
        <p>Upload Post:</p>
        <form>
          <label htmlFor="photo">Photo: </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={this.handleImageChange}
          />
          <label htmlFor="caption">Caption: </label>
          <input
            name="caption"
            type="text"
            value={this.state.caption}
            onChange={this.handleChange}
          />
          <label htmlFor="submit">Create Post: </label>
          <input name="submit" type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default PostInput;
