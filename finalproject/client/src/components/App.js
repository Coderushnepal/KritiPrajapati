import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Post from "./views/Post";
// import PostInfiniteList from "./views/PostInfiniteList";

// import * as routes from "../constants/routes";
import Home from './views/Home';
import Join from './views/Join';
import SinglePost from './views/SinglePost';
import AboutMe from './views/AboutMe';



// Infinite Scroll -->   /beers , /
// Post -->       /beers/id
// Favorites --> /beers/favorite

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path={routes.POSTS} component={PostInfiniteList} /> */}
        <Route exact path={'/feed'} element={<Home />} />
        <Route exact path ={'/post/:postId'} element={<SinglePost />} />
        <Route exact path={'/'} element={<Join />} />
        <Route exact path={'/aboutme'} element={<AboutMe />} />


        {/* <Redirect to={routes.POSTS} /> */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;