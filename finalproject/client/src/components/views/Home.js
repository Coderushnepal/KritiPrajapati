import React from "react";

import CreatePost from "./CreatePost";
import PostInfiniteList from "./PostInfiniteList";
import UserDetail from "../common/UserDetail/UserDetail";

import "./styles/Home.scss";

function Home() {
  return (
    <div className="container home-container clearfix">
      <div className="user_info">
        <UserDetail />
      </div>
      <div className="main scrollbar-hidden">
        <CreatePost />
        <PostInfiniteList />
      </div>
    </div>
  );
}

export default Home;
