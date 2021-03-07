import axios from "axios";

export const saveBlogPost = async (data) => {
  try {
    const res = await axios.post(`http://localhost:8000/blogs`, data);
    if (res.status === 201) {
      alert("Blog Posted to DB");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteBlogPost = async (blogID) => {
  try {
    const res = await axios.delete(`http://localhost:8000/blogs/${blogID}`);
    if (res.status === 200) {
      alert("Blog deleted from DB");
    }
  } catch (error) {
    console.log(error.message);
  }
};
