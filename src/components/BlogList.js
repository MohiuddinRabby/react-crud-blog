import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      {blogs?.map((blog) => (
        <div className="blog-preview" key={blog?.id}>
          <Link to={`/details/${blog?.id}`}>
            <h3 className="text-info">{blog?.title}</h3>
          </Link>
          <p className="text-primary">Written by: {blog?.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
