const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
