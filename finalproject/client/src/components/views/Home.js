import React from "react";
import CreatePost from "./CreatePost";
import PostInfiniteList from "./PostInfiniteList";

function Home() {
  return (
    <React.Fragment>
      <div>
        <CreatePost />
      </div>
      <div>
        <PostInfiniteList />
      </div>
    </React.Fragment>
  );
}

export default Home;
