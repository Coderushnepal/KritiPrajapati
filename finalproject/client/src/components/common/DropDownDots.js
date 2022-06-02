import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deletePost, reportPost } from "../../actions/posts";

import "./styles/DropDownDots.scss";

function DropDownDots({ post }) {
  const userId = useSelector((state) => state.user.user.id);
  const [hasReported, setHasReported] = useState(false);

  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

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
    <Fragment>
      {!hasReported && (
        <div className="dropdownDots-container">
          <div
            className="dropdownDot"
            onClick={() => setShowOptions(!showOptions)}
          >
            ...
          </div>

          {showOptions && (
            <div className="dropdownMenu">
              {userId === post.ownerUserId ? (
                <div onClick={() => onClickDelete(post.id)}>Delete</div>
              ) : (
                <span onClick={() => onClickReport(post.id)}>Report</span>
              )}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}
export default DropDownDots;