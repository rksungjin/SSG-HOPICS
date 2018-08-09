import axios from "axios";

export default {
  // Gets all blogs
  getBlogs: function() {
    return axios.get("/apis/blogs");
  },
  // Gets the blog with the given id
  getBlog: function(id) {
    return axios.get("/apis/blogs/" + id);
  },
  // Deletes the blog with the given id
  deleteBlog: function(id) {
    return axios.delete("/apis/blogs/" + id);
  },
  // Updates the blog with the given id ??????????????????????????????????
  editBlog: function(id, data) {
    return axios.put("/apis/blogs/" + id, data);
  },

  // Saves a blog to the database
  saveBlog: function(blogData) {
    return axios.post("/apis/blogs", blogData);
  }
};
