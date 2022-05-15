import React from "react";
import { Link } from "react-router-dom";
import DonatePost from "../views/DonatePost";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

import "./styles/PostContent.scss";

function PostContent({ post, userId }) {
  return (
    <div className="postContent">
      <div>
        <Link to={`/post/${post.id}`}>
          <h4 className="postTitle">{post.postTitle}</h4>
        </Link>
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