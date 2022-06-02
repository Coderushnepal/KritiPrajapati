import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../common/Post";
import { setPosts } from "../../actions/posts";

function PostInfiniteList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.post?.list ? state.post.list : []
  );

  useEffect(() => {
    dispatch(setPosts({}));
  }, [dispatch]);

  return (
    <>
      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}

export default PostInfiniteList;