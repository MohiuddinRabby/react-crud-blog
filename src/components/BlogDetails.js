import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useCustomFetch from "../assets/hook/useCustomFetch";
import { deleteBlogPost } from "../api";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, loading, errMsg } = useCustomFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const deletePost = () => {
    deleteBlogPost(data?.id).then(() => history.push("/"));
  };
  return (
    <div>
      {errMsg && <div>{errMsg}</div>}
      {loading && <div>Loading...</div>}
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
      <button className="btn btn-outline-danger btn-sm" onClick={deletePost}>
        Delete
      </button>
    </div>
  );
};

export default BlogDetails;
