import React from "react";
import useCustomFetch from "../assets/hook/useCustomFetch";
import BlogList from "./BlogList";

const Home = () => {
  // data:blogs = destructured as data but gives it's a name blogs
  const { data: blogs, loading, errMsg } = useCustomFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="container">
      {errMsg && <div>{errMsg}</div>}
      {loading && <div>Loading...</div>}
      <div className="py-5">
        <BlogList blogs={blogs} title="All Blogs" />
      </div>
    </div>
  );
};

export default Home;
