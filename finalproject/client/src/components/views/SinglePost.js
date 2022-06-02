import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../common/Button";
import DonatePost from "./DonatePost";
import AvatarImg from "../common/AvatarImg";
import PostUpdates from "../common/PostUpdates";
import { fetchPost } from "../../actions/posts";
import DonarsMessages from "../common/DonarsMessages";
import ProgressBar from "../../components/common/ProgressBar";

import "./styles/SinglePost.scss";

function SinglePost() {
  const userId = useSelector((state) => state.user.user.id);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.post?.singlePost || {});

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  if (!singlePost) return <div>Loading ...</div>;

  return (
    <div className="singlePost-container container clearfix">
      <div className="main">
        <h1 className="postTitle_h1">{singlePost.postTitle}</h1>
        <div className="organizer_div">
          <AvatarImg
            avatar={singlePost.ownerAvatar}
            name={singlePost.ownerName}
          />
          <span className="organizer_span">
            {singlePost.ownerName} is organizing this fundraiser.
          </span>
        </div>
        <hr className="organizer_hr" />
        <p>{singlePost.postDescription}</p>
        {userId !== singlePost.ownerUserId && (
          <div className="donate_div">
            <DonatePost post={singlePost} postId={postId} />
          </div>
        )}
        <PostUpdates
          userId={userId}
          postOwnerId={singlePost.ownerUserId}
          postId={postId}
          updatesDetail={singlePost.postUpdates}
        />
        <DonarsMessages
          donarsDetail={singlePost.donarDetail}
          post={singlePost}
          postId={postId}
          selfPost={userId === singlePost.ownerUserId}
        />
      </div>

      <div className="donationBox">
        <div className="amount_div">
          <span className="collectedAmount_span">
            Rs. {singlePost.collectedAmount}
          </span>{" "}
          <span className="targetAmount_span">
            raised of Rs. {singlePost.targetAmount} goal.
          </span>
        </div>
        <ProgressBar
          target={singlePost.targetAmount}
          value={singlePost.collectedAmount}
          hideText={true}
        />
        <div className="donationCount">
          {singlePost?.donarDetail?.length
            ? singlePost.donarDetail.length
            : "0"}{" "}
          donations.
        </div>
        <div className="clearFix donationBox_div">
          {userId !== singlePost.ownerUserId && (
            <div className="donateBtn_div">
              <DonatePost post={singlePost} postId={postId} />
            </div>
          )}
          <div className="shareBtn_div">
            <Button>Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;