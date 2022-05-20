import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import { postUpdate } from "../../actions/posts";

import "./styles/AddPostUpdates.scss";

function AddPostUpdates({ postId, post }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(postUpdate({ message: message, postId: postId }));
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
    <div className="updates-modal-container">
      <Button className="updates_button" onClick={handleShow}>
        Add Updates
      </Button>
      <Modal show={isOpen} handleClose={handleClose}>
        <div className="update-modal-content">
          <h1 className="title">Updates</h1>
          <p className="description">
            Your updates will ensure your supporter and helps them know about
            your endevours and hardwork.
          </p>
          <form onSubmit={onSubmit}>
            <label htmlFor="message" className="label">
              <b>Update Message</b>
            </label>
            <textarea
              name="message"
              placeholder="Enter your updates"
              onChange={onChangeHandler}
              value={message}
              cols="10"
            />
            <Button>Send</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default AddPostUpdates;