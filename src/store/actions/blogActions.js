import Axios from "axios";
import { setError, setIsLoading } from "./generalAction";


const ADD_BLOG = "ADD_BLOG"
const SET_BLOGS = "SET_BLOGS"
const SET_BLOG = "SET_BLOG"





export const addBlog = (payload) => {
    return {
        type: ADD_BLOG,
        payload
    }
}

export const fetchBlogs = () => (dispatch) => {
    dispatch(setIsLoading(true));
    Axios
        .get(`http://localhost:3001/blogs`)
        .then(({data}) => {
          
          dispatch(setBlogs(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}
export const fetchBlogById = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    Axios
        .get(`http://localhost:3001/blogs/${id}`)
        .then(({data}) => {
          
          dispatch(setBlog(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}


export const fetchLastBlogs = () => (dispatch) => {
    dispatch(setIsLoading(true));
    Axios
        .get(`http://localhost:3001/blogs?_sort=id&_order=desc&_limit=3`)
        .then(({data}) => {
          
          dispatch(setBlogs(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}

export const setBlogs = (payload) => {
    return {
        type: SET_BLOGS,
        payload
    }

}

export const setBlog = (payload) => {
    return {
        type: SET_BLOG,
        payload
    }

}