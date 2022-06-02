import React from "react";
import { useDispatch } from "react-redux";

import { reportPost } from "../../actions/posts";

const ReportPost = ({ postId }) => {
  const hasClick = false;
  const dispatch = useDispatch();
  const onClickReport = async (id) => {
    const confirm = window.confirm("Are you sure you want to report?");

    try {
      if (confirm) {
        dispatch(reportPost(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <span onClick={() => onClickReport(postId)}>Report</span>
    </div>
  );
};

export default ReportPost;