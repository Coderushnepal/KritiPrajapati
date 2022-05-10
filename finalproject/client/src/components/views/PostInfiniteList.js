import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../actions/posts";
import Post from "../common/Post";

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
