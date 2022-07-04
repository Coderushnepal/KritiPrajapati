import axios from "axios";
import { toast } from "react-toastify";

import config from "../config";
import { interpolate, unParseQuery } from "../utils/string";

export const fetchPosts = async (query) => {
  const url = `${config.apiUrl}${config.endpoints.posts}${unParseQuery(query)}`;
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data.data;
};

export const fetchPost = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.post}`;
  const response = await axios.get(interpolate(url, { id }), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data.data;
};

export const createPost = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.addPost}`;
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data.data;
};

export const updatePost = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.postUpdate}`;
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data.data;
};

export const deletePost = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.deletePost}`;
  await axios.delete(interpolate(url, { id }), {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  toast.success("Successfuly removed");
  return id;
};

export const donatePost = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.donatePost}`;
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data.data;
};

export const reportPost = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.reportPost}`;
  console.log(id);
  const response = await axios.patch(
    interpolate(url, { id }),
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  return response.data.data;
};

export const postUpdate = async (data) => {
  const url = `${config.apiUrl}${config.endpoints.postUpdate}`;
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.data.data;
};