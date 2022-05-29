import React from "react";
import { Link } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";

import Button from "./Button";
import ProgressBar from "./ProgressBar";
import DonatePost from "../views/DonatePost";

import "./styles/PostContent.scss";

function PostContent({ post, userId }) {
  return (
    <div className="postContent">
      <div className="clearfix">
        <Link to={`/post/${post.id}`}>
          <h4 className="postTitle">{post.postTitle}</h4>
        </Link>
        {post.reportCount >= 3 && (
          <div className="infoIcon">
            <IoMdInformationCircle />
            <span class="infoIconText">
              This post has been reported {post.reportCount} times.
            </span>
          </div>
        )}
      </div>
      <p className="postDesc">{post.postDescription}</p>
      <div className="status">
        <ProgressBar target={post.targetAmount} value={post.collectedAmount} />
      </div>

      <div className="clearfix">
        <Link to={`/post/${post.id}`} className="viewBtn">
          <Button>View</Button>
        </Link>
        {userId !== post.ownerUserId && (
          <div className="donateBtn">
            <DonatePost postId={post.id} post={post} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostContent;
