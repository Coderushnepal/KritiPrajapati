import React from "react";
import { Link } from "react-router-dom";
import "./styles/Post.scss";

import DonatePost from "../views/DonatePost";
import DropDownDots from "./DropDownDots";
import ProgressBar from "./ProgressBar";
import Button from "./Button";
import { useSelector } from "react-redux";

function Post({ post }) {
  const userId = useSelector((state) => state.user.user.id);

  return (
    <div className="postContainer">
      <div className="postOwnerInfo clearfix">
        <img
          className="ownerImg"
          width="50"
          src={post.avatar}
          alt={post.ownerName}
        ></img>
        <div className="ownerAndDot clearfix">
          <div className="ownerInfo">
            <p className="ownerName">{post.ownerName}</p>
            <p className="postStartTime">{post.startDate.substring(0, 10)}</p>
          </div>
          <div className="dot_div">
            <DropDownDots post={post} userId={userId} />
          </div>
        </div>
      </div>
      <hr className="hr" />
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
  );
}
export default Post;