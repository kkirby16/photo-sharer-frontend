import React, { Component } from "react";
import { addPost } from "../actions/allPosts";
import "./myStyles.css";
import { Icon } from "@iconify/react";

class PostInput extends Component {
  state = {
    image: "",
    caption: "",
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
    const formData = new FormData(); //creating new FormData object

    formData.append("image", this.state.image); //adding key/value pairs to the FormData object
    formData.append("user_id", this.props.currentUser.id);
    formData.append("caption", this.state.caption);
    // formData.append("likes", 0);

    this.props.addPost(formData);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.uploadPhoto();

    this.setState({
      image: "",
      caption: "",
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <p className="heavierWeightNeueHelvetica">Upload Post</p>
        <form>
          <label htmlFor="photo">
            {" "}
            <Icon
              icon="bi:upload"
              width="24"
              height="24"
              className="uploadPhotoIcon"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;Upload Photo:{" "}
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            class="customFileInput"
            onChange={this.handleImageChange}
          />
          <label htmlFor="caption">
            &nbsp;&nbsp;&nbsp;{" "}
            <Icon
              icon="fluent:text-align-left-20-regular"
              width="30"
              height="30"
              className="captionIcon"
            />
            Caption:{" "}
          </label>
          <input
            name="caption"
            type="text"
            value={this.state.caption}
            onChange={this.handleChange}
            className="inputForCaption"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            name="submit"
            type="submit"
            onClick={this.handleSubmit}
            className="createPostButton"
          >
            <Icon
              icon="fluent:add-circle-28-filled"
              className="createPostIcon"
              width="23"
              height="23"
            />
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default PostInput;
