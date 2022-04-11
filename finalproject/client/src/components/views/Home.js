import React from "react";
import CreatePost from "./CreatePost";
import PostInfiniteList from "./PostInfiniteList";
import { logoutUser } from "../../actions/users";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const logout = async () => {
    
      dispatch(logoutUser());
  }
    
  
    return (
    <React.Fragment>
      <button onClick={logout}>Logout</button>

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
