const router = require("express").Router();
const generalissuesRoutes = require("./generalissues");

// GeneralIssue routes
router.use("/generalissues", generalissuesRoutes);

module.exports = router;
