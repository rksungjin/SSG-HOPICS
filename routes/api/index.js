const router = require("express").Router();
const bookRoutes = require("./blogs");

// Book routes
router.use("/blogs", blogRoutes);

module.exports = router;
