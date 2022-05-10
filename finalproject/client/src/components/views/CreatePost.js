import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import AvatarImg from "../common/AvatarImg";
import InputField from "../common/InputField";
import { createNewPost } from "../../actions/posts";

import "./styles/CreatePost.scss";

function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  const [data, setData] = useState({
    postTitle: "",
    postDescription: "",
    targetAmount: null,
    category: "",
    endDate: "",
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(createNewPost(data));
      setData({
        postTitle: "",
        postDescription: "",
        targetAmount: null,
        category: "",
        endDate: "",
      });
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
    <div className="createPost-container">
      <div className="createPost clearfix">
        <div className="avatar_div">
          <AvatarImg avatar={user?.avatar} name={user?.name} />
        </div>
        <div className="startPost" onClick={handleShow}>
          Start a Post
        </div>
      </div>
      <Modal
        show={isOpen}
        handleClose={handleClose}
        contentLabel="Example Modal"
      >
                <h1 className="title">Create Post</h1>

        <div className="description">
          <p>Let's begin your fundraising journey!</p>
</div>
        <form onSubmit={onSubmit}>
          <div>
            <InputField
              label="Post Title"
              name="postTitle"
              placeholder="Enter your post Title"
              handleOnChange={onChangeHandler}
              value={data.postTitle}
            />
          </div>

          <div>
            <InputField
              label="Post Description"
              name="postDescription"
              placeholder="Enter your post Description"
              handleOnChange={onChangeHandler}
              value={data.postDescription}
            />
          </div>

          <div>
            <InputField
              label="Target Amount"
              name="targetAmount"
              type="number"
              placeholder="Enter your target Amount"
              handleOnChange={onChangeHandler}
              value={data.targetAmount}
            />
          </div>

          <div>
            <InputField
              label="Category"
              name="category"
              placeholder="Enter your category"
              handleOnChange={onChangeHandler}
              value={data.category}
            />
          </div>

          <div>
            <InputField
              label="End Date"
              name="endDate"
              type="date"
              placeholder="Enter your end date"
              handleOnChange={onChangeHandler}
              value={data.endDate}
            />
          </div>

          <Button>Post</Button>
        </form>
      </Modal>
    </div>
  );
}

export default CreatePost;
