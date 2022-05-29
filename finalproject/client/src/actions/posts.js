import { toast } from "react-toastify";
import * as postService from "../services/post";

export const SET_POST = "SET_POST";
export const SET_POSTS = "SET_POSTS";
export const RESET_POSTS = "RESET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const DONATE_POST = "DONATE_POST";
export const REPORT_POST = "REPORT_POST";
export const ADD_POST_UPDATE = "ADD_POST_UPDATE";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED";
export const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED";

export function setPosts() {
  return async function (dispatch) {
    try {
      const data = await postService.fetchPosts({});
      console.log(data, "data actions");
      dispatch(setPostsAction(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchPost(id) {
  return async function (dispatch) {
    try {
      const data = await postService.fetchPost(id);
      console.log(data, "data actions");
      dispatch(setPostAction(data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchPosts(params) {
  const { pageNumber: page, searchQuery: post_title } = params;

  return async function (dispatch) {
    dispatch(fetchPostsPending());
    try {
      const data = await postService.fetchPosts({ page, post_title });
      console.log(data);
      dispatch(fetchPostsFulfilleded(data));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}

export function createNewPost(data) {
  return async function (dispatch) {
    try {
      const response = await postService.createPost(data);
      dispatch(addNewPost(response));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}

export function deletePost(data) {
  return async function (dispatch) {
    try {
      const response = await postService.deletePost(data);
      dispatch(removePost(response));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}

export function donatePost(data, userDetail) {
  return async function (dispatch) {
    try {
      const response = await postService.donatePost(data);
      console.log(response)
      dispatch(donateInPost({...response, ...userDetail}));
      toast.success("Donation Successful");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}

export function reportPost(data) {
  return async function (dispatch) {
    try {
      const response = await postService.reportPost(data);
      dispatch(reportPostAction(response));
      toast.success("Report Successful");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}

export function postUpdate(data) {
  return async function (dispatch) {
    try {
      const response = await postService.postUpdate(data);
      console.log(response)
      dispatch(addPostUpdate(response));
      toast.success("Update Added Successful");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
}
const fetchPostsPending = () => {
  return {
    type: FETCH_POSTS_PENDING,
  };
};

const fetchPostsFulfilleded = (data) => {
  return {
    type: FETCH_POSTS_FULFILLED,
    payload: data,
  };
};
const fetchBeersRejected = (err) => {
  return {
    type: FETCH_POSTS_REJECTED,
    payload: err,
  };
};

const setPostsAction = (data) => {
  return {
    type: SET_POSTS,
    payload: data,
  };
};

const setPostAction = (data) => {
  return {
    type: SET_POST,
    payload: data,
  };
};

const addNewPost = (data) => {
  return {
    type: ADD_NEW_POST,
    payload: data,
  };
};

const removePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

const donateInPost = (data) => {
  return {
    type: DONATE_POST,
    payload: data,
  };
};

const reportPostAction = (data) => {
  return {
    type: REPORT_POST,
    payload: data,
  };
};

const addPostUpdate = (data) => {
  return {
    type: ADD_POST_UPDATE,
    payload: data,
  };
};