import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProgressBar from "../../components/common/ProgressBar";
import { fetchPost } from "../../actions/posts";
import Button from "../common/Button";
import "./styles/SinglePost.scss";
import DonarsMessages from "../common/DonarsMessages";
import AvatarImg from "../common/AvatarImg";
import DonatePost from "./DonatePost";

function SinglePost() {
  const { postId } = useParams();
  const singlePost = useSelector(state => state.post.singlePost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch]);


  if (!singlePost) return <div>Loading ...</div>;

  return (
    <div className="singlePost-container container clearfix">
      <div className="main">
        <h1 className="postTitle_h1">{singlePost.postTitle}</h1>
        <div className="organizer_div">
          <AvatarImg avatar={singlePost.avatar} name={singlePost.ownerName} />
          <span className="organizer_span">
            {singlePost.ownerName} is organizing this fundraiser.
          </span>
        </div>
        <hr className="organizer_hr" />
        <p>{singlePost.postDescription}</p>

        <div className="donate_div">
          <DonatePost post={singlePost} postId={singlePost.id} />
        </div>
        {console.log(singlePost, 'singlePost')}

        <DonarsMessages donarsDetail={singlePost.donarDetail} post={singlePost} />
      </div>
      <div className="donationBox">
        <div>
          <div>
            <span>Rs. {singlePost.collectedAmount}</span> raised of Rs.{" "}
            {singlePost.targetAmount} goal.
          </div>
          <div>
            <ProgressBar
              target={singlePost.targetAmount}
              value={singlePost.collectedAmount}
            />
          </div>
          <div>{singlePost?.donarDetail?.length} donations.</div>
        </div>
        <div className="clearFix donationBox_div">
          <div className="donateBtn_div">
            <DonatePost post={singlePost} postId={singlePost.id} />
          </div>
          <div className="shareBtn_div">
            <Button>Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;