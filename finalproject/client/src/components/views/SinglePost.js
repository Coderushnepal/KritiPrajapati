import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProgressBar from "../../components/common/ProgressBar";
import { fetchPosts } from "../../actions/posts";
import Button from "../common/Button";
import "./styles/SinglePost.scss";

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.post?.list ? state.post.list : []
  );

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      const post = posts.find((post) => post.id === +postId);
      setPost(post);
    }
  }, [posts, postId]);

  if (!post) return <div>Loading ...</div>;

  return (
    <div className="singlePost-container">
      <div className="main">
        <h1>{post.postTitle}</h1>

        <p>{post.postDescription}</p>

        {JSON.stringify(post)}
      </div>
      <div className="donationBox">
        <div>
          <div>
            <span>Rs. {post.collectedAmount}</span> raised of Rs.{" "}
            {post.targetAmount} goal.
          </div>
          <div>
            <ProgressBar
              target={post.targetAmount}
              value={post.collectedAmount}
            />
          </div>
            <div>{post.donarDetail ? post.donarDetail.length : '0'} donations.</div>
        </div>
        <div>
          <Button>Donate</Button>
          <Button>Share</Button>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
