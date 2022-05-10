import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "./Button";
import ProgressBar from "./ProgressBar";
import DropDownDots from "./DropDownDots";
import DonatePost from "../views/DonatePost";

import "./styles/Post.scss";

function Post({ post }) {
  const userId = useSelector((state) => state.user.user.id);

  return (
    <div>
      <div className="postContainer">
        <div className="postOwnerInfo clearfix">
          <img
            className="ownerImg"
            width="50"
            src={post.avatar}
            alt={post.ownerName}
          />
          <div className="ownerAndDot clearfix">
            <div className="ownerInfo">
              <p className="ownerName">{post.ownerName}</p>
              <p className="postStartTime">{post.startDate.substring(0, 10)}</p>
            </div>
            <div className="dot_div">
              <DropDownDots post={post} />
            </div>
          </div>
        </div>

        <hr className="hr" />
        <div> {
          post.postStatus 
        }</div>
        <div className="postContent">
          <div>
            <Link to={`/post/${post.id}`}>
              <h4 className="postTitle">{post.postTitle}</h4>
            </Link>
          </div>
          <p className="postDesc">{post.postDescription}</p>
          <div className="status">
            <ProgressBar
              target={post.targetAmount}
              value={post.collectedAmount}
            />
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

      </div>
    </div>
  );
}

export default Post;