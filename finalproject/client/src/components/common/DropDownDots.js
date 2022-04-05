import React, { useState } from "react";
import {updatePost,deletePost} from '../../actions/posts'

const onClickEdit = async (e) => {
  try {
    e.preventDefault();
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};

const onClickDelete = async () => {
  try {
    dispatch(deletePost(data));
  } catch (error) {
    console.log(error);
  }
};

function DropDownDots() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div>
      <div onClick={() => setShowOptions(!showOptions)}>...</div>

      {showOptions && (
        <div>
          <span onClick={onClickEdit}>Edit</span>
          <span onClick={onClickDelete}>Delete</span>
        </div>
      )}
    </div>
  );
}
export default DropDownDots;
