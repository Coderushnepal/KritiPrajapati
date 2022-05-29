import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../common/Modal";
import Button from "../common/Button";
import AvatarImg from "../common/AvatarImg";
import InputField from "../common/InputField";
import { createNewPost } from "../../actions/posts";
import { requiredValidator,lengthValidator } from "../../utils/validators";

import "./styles/CreatePost.scss";

function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const initialState = {
    postTitle: "",
    postDescription: "",
    targetAmount: "",
    category: "",
    endDate: "",
  };
  const [data, setData] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let isAllFormDataValid = true;
      let tempErrors = {};

      if (!requiredValidator(data.postTitle)) {
        tempErrors.postTitle = "Post title is required";
        isAllFormDataValid = false;
      }
      else if (!lengthValidator(data.postTitle,0,100)){
        tempErrors.postTitle = "Length should be less than 100.";
        isAllFormDataValid = false;
      }
      if (!requiredValidator(data.postDescription)) {
        tempErrors.postDescription = "Post Description is required";
        isAllFormDataValid = false;
      }
      if (!requiredValidator(data.targetAmount)) {
        tempErrors.targetAmount = "Target Amount is required";
        isAllFormDataValid = false;
      }
      if (!requiredValidator(data.endDate)) {
        tempErrors.endDate = "End date is required";
        isAllFormDataValid = false;
      }
      setErrors(tempErrors);

      if (isAllFormDataValid) {
        dispatch(createNewPost(data));
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
    setData(initialState);
    setErrors({});
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
        <div className="createPostModal">
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
                errors={errors}
              />
            </div>

            <div>
              <InputField
                type="textarea"
                label="Post Description"
                name="postDescription"
                placeholder="Enter the post description"
                handleOnChange={onChangeHandler}
                value={data.postDescription}
                errors={errors}
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
                errors={errors}
              />
            </div>

            <div>
              <InputField
                label="Category"
                name="category"
                placeholder="Enter your category"
                handleOnChange={onChangeHandler}
                value={data.category}
                errors={errors}
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
                errors={errors}
              />
            </div>

            <Button className='post-btn'>Post</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CreatePost;
