import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById } from "../../store/actions/blogActions";

const Blog = (props) => {
  const dispatch = useDispatch();

  const { blog } = useSelector(({ blogsPage }) => ({
    blog: blogsPage.blog,
  }));

  useEffect(() => {
    dispatch(fetchBlogById(props.match.params.id));
  }, []);
  
    return (
      <div id="content" className="full">
        <h1>{blog.title}</h1>
        <div className="entry">
          <p>{blog.text}</p>
          <h2>{blog.subtitle} </h2>
          <p>{blog.text}</p>
        </div>
      </div>
    );
  
};

export default Blog;
