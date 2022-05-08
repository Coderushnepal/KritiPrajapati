import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePost, deletePost, reportPost } from "../../actions/posts";

function DropDownDots({ post }) {
  const userId = useSelector((state) => state.user.user.id);
  const [hasReported, setHasReported] = useState(false);

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

  const onClickReport = async (id) => {
    const confirm = window.confirm("Are you sure you want to report?");

    try {
      if (confirm) {
        dispatch(reportPost(id));
        setHasReported(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!hasReported && (
        <Fragment>
          <div onClick={() => setShowOptions(!showOptions)}>...</div>
          {showOptions && (
            <div>
              {userId === post.ownerUserId ? (
                <div>
                  <span onClick={() => onClickEdit(post.id)}>Edit</span>
                  <span onClick={() => onClickDelete(post.id)}>Delete</span>
                </div>
              ) : (
                <span onClick={() => onClickReport(post.id)}>Report</span>
              )}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
export default DropDownDots;
