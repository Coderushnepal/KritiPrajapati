import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import * as routes from "../constants/routes";
import Home from "./views/Home";
import Join from "./views/Join";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import SinglePost from "./views/SinglePost";
import { fetchUser } from "../actions/users";
import AuthLayout from "./common/Layout/AuthLayout";
import { PublicRoute, ProtectedRoute } from "./common/AuthRoute";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
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