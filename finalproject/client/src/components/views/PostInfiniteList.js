import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "../../actions/posts";
import Post from "../common/Post";
function PostInfiniteList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post?.list ?  state.post.list : []);

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  console.log(posts, 'posts')
  return (
    <div>
      Post infinite List
      {posts?.map((post) => {
        return (
          <Post key={post.id} post={post} />
        );
      })}
    </div>
  );
}

export default PostInfiniteList;
