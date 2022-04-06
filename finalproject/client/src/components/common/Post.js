import React from "react";
import { Link } from "react-router-dom";
import "./styles/Post.scss";

import DonatePost from "../views/DonatePost";
import DropDownDots from "./DropDownDots";

function Post({ post }) {
  return (
    <div>
 <div className="postContainer">
        <div className="postOwnerInfo">
          <img width="50" src={post.avatar}></img>
          <div>
            <p>{post.ownerName}</p>
            <p>{post.startDate}</p>
          </div>
        </div>

        <div>
          <div>
          <Link to={`/post/${post.id}`}>

            <h4>{post.postTitle}</h4>
            <p>{post.postDescription}</p>
            </Link>
          </div>

          <div>Target Amount: {post.targetAmount}</div>
          <div>Collected Amount: {post.collectedAmount}</div>
          <DonatePost postId = {post.id}/>
        </div>
      </div>
      <DropDownDots post={post} />
     
    </div>
     
    
  );
}
export default Post;
