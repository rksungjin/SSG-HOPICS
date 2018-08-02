const router = require("express").Router();
const blogsApi = require("../../apis/blogs_api");

// Matches with "/api/blogs"
router.route("/")
  .get(blogsApi.findAll)
  .post(blogsApi.create);

// Matches with "/api/blogs/:id"
router
  .route("/:id")
  .get(blogsApi.findById)
  .put(blogsApi.update)
  .delete(blogsApi.remove);

module.exports = router;
