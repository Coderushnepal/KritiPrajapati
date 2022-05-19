import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Post from "./views/Post";
// import PostInfiniteList from "./views/PostInfiniteList";

// import * as routes from "../constants/routes";
import Home from "./views/Home";
import Join from "./views/Join";
import SinglePost from "./views/SinglePost";
import Profile from "./views/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/users";
import AuthLayout from "./common/Layout/AuthLayout";
import { PublicRoute, ProtectedRoute } from "./common/AuthRoute";
import NotFound from "./views/NotFound";

function App() {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute isLoggedIn={isLoggedIn} />}>
          <Route exact path={"/"} element={<Join />} />
        </Route>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<AuthLayout />}>
            <Route index path={"feed"} element={<Home />} />
            <Route exact path={"post/:postId"} element={<SinglePost />} />
            <Route exact path={"profile/:profileId"} element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;