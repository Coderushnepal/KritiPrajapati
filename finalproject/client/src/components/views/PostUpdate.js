import React, { useState } from "react";
import Modal from "../common/Modal";
import { useDispatch } from "react-redux";

import { postUpdate } from "../../actions/posts";
import Button from "../common/Button";
import InputField from "../common/InputField";

import "./styles/PostUpdate.scss";

function PostUpdate({ postId, post }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    message: "",
    postId: postId,
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(postUpdate(data));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="update-container">
      <div onClick={handleShow}>Update</div>
      <Modal show={isOpen} handleClose={handleClose}>
        <h1 className="title">Updates</h1>
        <div className="description">
          <p>
            Your updates on this post .
          </p>
        </div>
        <form onSubmit={onSubmit}>

          <label htmlFor="message">
            <b>Message</b>
          </label>
          <InputField
            name="message"
            placeholder="Enter your Message"
            handleOnChange={onChangeHandler}
            value={data.message}
          />
          <Button>Post</Button>
        </form>
      </Modal>
    </div>
  );
}

export default PostUpdate;
