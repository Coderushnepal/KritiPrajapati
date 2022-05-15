import React from "react";
import { Link } from "react-router-dom";
import "./styles/Post.scss";

import DropDownDots from "./DropDownDots";
import { useSelector } from "react-redux";
import PostContent from "./PostContent";

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
            <Link to={`/profile/${post.ownerUserId}`}>

              <p className="ownerName">{post.ownerName}</p>
              <p className="postStartTime">{post.startDate.substring(0, 10)}</p>
            </Link>

            </div>
            <div className="dot_div">
              <DropDownDots post={post} userId={userId} />
            </div>

          </div>
      </div>
      <hr className="hr" />
      <PostContent post={post} userId={userId} />
    </div>
  );
}
export default Post;