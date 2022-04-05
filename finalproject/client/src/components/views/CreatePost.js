import axios from "axios";
import React, { useState } from "react";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";


import {createNewPost} from '../../actions/posts'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function CreatePost() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    postTitle: '',
    postDescription: '',
    targetAmount: 0,
    category:'',
    endDate:''
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      
      e.preventDefault();
        dispatch(createNewPost(data));
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default CreatePost;
