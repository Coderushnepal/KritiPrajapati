import React, { useState } from "react";
import {updatePost,deletePost} from '../../actions/posts'
import { useDispatch } from "react-redux";





function DropDownDots({ post }) {
    const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

  const onClickEdit = async (id) => {
    try {
      dispatch(updatePost(id));
    } catch (error) {
      console.log(error);
    }
  };
  
  const onClickDelete = async (id) => {
    try {
        console.log(id);
      dispatch(deletePost(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div onClick={() => setShowOptions(!showOptions)}>...</div>

      {showOptions && (
        <div>
          <span onClick={()=>onClickEdit(post.id)}>Edit</span>
          <span onClick={()=>onClickDelete(post.id)}>Delete</span>
        </div>
      )}
    </div>
  );
}
export default DropDownDots;
