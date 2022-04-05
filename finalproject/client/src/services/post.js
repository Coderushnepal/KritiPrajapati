import axios from "axios";
import config from "../config";
import { interpolate, unParseQuery } from "../utils/string";

export const fetchPosts = async (query) => {
    try{
        const url = `${config.apiUrl}${config.endpoints.posts}${unParseQuery(query)}`;
        const { data } = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        return data.data;
    }
    catch(error) {
        console.log(error);
    }
  
};
export const createPost = async (data) => {
    try{
        const url = `${config.apiUrl}${config.endpoints.addPost}`;
        const response = await axios.post(url,data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        console.log( response, 'response services')
        return response.data.data;
    }
    catch(error) {
        console.log(error);
    }
  
};

export const updatePost = async (data) => {
    try{
        const url = `${config.apiUrl}${config.endpoints.updatePost}`;
        const response = await axios.post(url,data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        console.log( response, 'response services')
        return response.data.data;
    }
    catch(error) {
        console.log(error);
        return new Error(error)
    }
  
};

export const deletePost = async (data) => {
    try{
        const url = `${config.apiUrl}${config.endpoints.deletePost}`;
        const response = await axios.post(url,data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        console.log( response, 'response services')
        return response.data.data;
    }
    catch(error) {
        console.log(error);
        return new Error(error)
    }
  
};



export const donatePost = async (data) => {
    try{
        const url = `${config.apiUrl}${config.endpoints.donatePost}`;
        const response = await axios.post(url,data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        console.log( response, 'response services')
        return response.data.data;
    }
    catch(error) {
        console.log(error);
        return new Error(error)
    }
  
};
