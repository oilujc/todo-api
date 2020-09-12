var express = require("express");
var taskController = require("../controllers/TaskController");
var router = express.Router();

/* GET task listing. */
router.route("/").get(taskController.taskList).post(taskController.taskCreate);

router
  .route("/:id")
  .get(taskController.taskGetById)
  .put(taskController.taskUpdate)
  .delete(taskController.taskDelete);

module.exports = router;
