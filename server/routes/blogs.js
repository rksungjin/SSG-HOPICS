// var express = require('express');
// var router  = express.Router();
// const blogsApi = require("../apis/blogs_api");

// router.get('/blog', blogsApi.findAll);

// module.exports = router;


const router = require("express").Router();
const blogsApi = require("../apis/blogs_api");
// const apiRoutes = require("../apis/blogs");

// API Routes
// router.use("/api", apiRoutes);

// Matches with "/api/blogs"
router.route("/")
  .get(blogsApi.findAll)
  .post(blogsApi.create);

// Matches with "/api/blogs/:id"
router.route("/:id")
  .get(blogsApi.findById)
  .put(blogsApi.update)
  .delete(blogsApi.remove);

module.exports = router;

