import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { donatePost } from "../../actions/posts";
import { requiredValidator } from "../../utils/validators";

import "./styles/DonatePost.scss";

function DonatePost({ postId, post }) {
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    amount: "",
    message: "",
    postId: postId,
  });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let isAllFormDataValid = true;
      let tempErrors = {};

      if (!requiredValidator(data.amount)) {
        tempErrors.amount = "Amount is required";
        isAllFormDataValid = false;
      }
      if (!requiredValidator(data.message)) {
        tempErrors.message =
          "Message is not allowed to be empty. Please write something";
        isAllFormDataValid = false;
      }
      setErrors(tempErrors);

      if (isAllFormDataValid) {
        dispatch(
          donatePost(data, {
            donarId: user.id,
            name: user.fullName,
            donarAvatar: user.avatar,
          })
        );
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
    setIsOpen(false);
    setData({
      amount: "",
      message: "",
      postId: postId,
    });
  };
  return (
    <div className="donate-container">
      <Button
        className="donate-btn"
        disabled={post.postStatus === "banned"}
        onClick={handleShow}
      >
        Donate
      </Button>
      <Modal show={isOpen} handleClose={handleClose}>
        <div className="donate-content">
          <h1 className="title">Donation</h1>
          <div className="description">
            <p>
              You're supporting <b>{post.postTitle}</b>
            </p>
            <p>
              Your donation will benefit <b>{post.ownerName}</b>
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <InputField
              label="Enter your Donation"
              name="amount"
              placeholder="Enter your Amount"
              handleOnChange={onChangeHandler}
              value={data.amount}
              errors={errors}
            />
            <InputField
              label="Message"
              type="textarea"
              name="message"
              placeholder="Enter your Message"
              handleOnChange={onChangeHandler}
              value={data.message}
              errors={errors}
            />
            <Button>Donate</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default DonatePost;