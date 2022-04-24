import React from "react";
import UserDetail from "../common/UserDetail/UserDetail";
import CreatePost from "./CreatePost";
import PostInfiniteList from "./PostInfiniteList";

import "./styles/Home.scss";

function Home() {
  return (
    <div className="home-container clearfix">
      <div className="user_info">
        <UserDetail />
      </div>
      <div className="main">
        <CreatePost />
        <PostInfiniteList />
      </div>
    </div>
  );
}

export default Home;