const router = require("express").Router();
const generalissuesController = require("../../controllers/generalissuesController");

// Matches with "/api/generalissues"
router.route("/")
  .get(generalissuesController.findAll)
  .post(generalissuesController.create);

// Matches with "/api/generalissues/:id"
router
  .route("/:id")
  .get(generalissuesController.findById)
  .put(generalissuesController.update)
  .delete(generalissuesController.remove);

module.exports = router;
