import React, { useState } from "react";
import Modal from "../common/Modal";
import { useDispatch } from "react-redux";

import { donatePost } from "../../actions/posts";
import Button from "../common/Button";
import InputField from "../common/InputField";

import "./styles/DonatePost.scss";

function DonatePost({ postId, post }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    amount: undefined,
    message: "",
    postId: postId,
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(donatePost(data));
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
    <div className="donate-container">
      <div>
        <Button onClick={handleShow}>Donate</Button>
      </div>
      <Modal show={isOpen} handleClose={handleClose}>
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
          <label htmlFor="amount">
            <b>Enter your Donation</b>
          </label>

          <InputField
            name="amount"
            placeholder="Enter your Amount"
            handleOnChange={onChangeHandler}
            value={data.amount}
          />

          <label htmlFor="message">
            <b>Message</b>
          </label>
          <InputField
            name="message"
            placeholder="Enter your Message"
            handleOnChange={onChangeHandler}
            value={data.message}
          />
          <Button>Donate</Button>
        </form>
      </Modal>
    </div>
  );
}

export default DonatePost;
