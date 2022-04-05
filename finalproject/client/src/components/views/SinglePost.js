import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {fetchPosts} from "../../actions/posts";

function SinglePost() {
    const {postId} = useParams();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post?.list ?  state.post.list : []);

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  console.log(posts, 'posts')
  return (
    <div>
    This is Post #{postId}
    </div>
  );
}

export default SinglePost;
