import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { createNewPost } from "../../actions/posts";
import AvatarImg from "../common/AvatarImg";

import "./styles/CreatePost.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function CreatePost() {
  const dispatch = useDispatch();
  let subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user = useSelector((state) => state.user?.user);
  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const [data, setData] = useState({
    postTitle: "",
    postDescription: "",
    targetAmount: 0,
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
        targetAmount: 0,
        category: "",
        endDate: "",
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="createPost-container">
      <div className="createPost clearfix">
        <div className="avatar_div">
          <AvatarImg avatar={user?.avatar} name={user?.name} />
        </div>
        <div className="startPost" onClick={openModal}>
          Start a Post
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="postTitle">Post Title</label>
          <input
            name="postTitle"
            id="postTitle"
            placeholder="Enter your post Title"
            onChange={onChangeHandler}
            value={data.postTitle}
          />

          <label htmlFor="postDescription">Post Description</label>
          <input
            name="postDescription"
            id="postDescription"
            placeholder="Enter your post Description"
            onChange={onChangeHandler}
            value={data.postDescription}
          />

          <label htmlFor="targetAmount">Target Amount</label>
          <input
            name="targetAmount"
            id="targetAmount"
            placeholder="Enter your target Amount"
            onChange={onChangeHandler}
            value={data.targetAmount}
          />
          <label htmlFor="category">Category</label>
          <input
            name="category"
            id="category"
            placeholder="Enter your category"
            onChange={onChangeHandler}
            value={data.category}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            name="endDate"
            id="endDate"
            placeholder="Enter your end date"
            onChange={onChangeHandler}
            value={data.endDate}
          />

          <button>Post</button>
        </form>
      </Modal>
    </div>
  );
}

export default CreatePost;
