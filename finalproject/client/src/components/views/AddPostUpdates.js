import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { postUpdate } from "../../actions/posts";
import { requiredValidator } from "../../utils/validators";

import "./styles/AddPostUpdates.scss";

function AddPostUpdates({ postId }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let isAllFormDataValid = true;
      let tempErrors = {};

      if (!requiredValidator(message)) {
        tempErrors.message = "Update message is required";
        isAllFormDataValid = false;
      }
      setErrors(tempErrors);

      if (isAllFormDataValid) {
        dispatch(postUpdate({ message: message, postId: postId }));

        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setMessage("");
    setIsOpen(false);
  };
  return (
    <div className="updates-modal-container">
      <Button className="updates_button" onClick={handleShow}>
        Add Updates
      </Button>
      <Modal show={isOpen} handleClose={handleClose}>
        <div className="addPostUpdateModal">
          <div className="update-modal-content">
            <h1 className="title">Updates</h1>
            <p className="description">
              Your updates will ensure your supporter and helps them know about
              your endevours and hardwork.
            </p>
            <form onSubmit={onSubmit}>
              <InputField
                type="textarea"
                label="Update Message"
                name="message"
                placeholder="Enter your updates"
                handleOnChange={onChangeHandler}
                value={message}
                errors={errors}
              />
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddPostUpdates;