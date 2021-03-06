const Task = require("../models/Task");

function taskList(req, res) {
  Task.find()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => console.log(err));
}

function taskCreate(req, res) {
  Task.create(req.body)
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      res.json(err);
    });
}

function taskGetById(req, res) {
  console.log(req.params);

  res.json(req.params);
}

function taskUpdate(req, res) {
  res.json({ message: "Actualizar una tarea" });
}

function taskDelete(req, res) {
  res.json({ message: "Eliminar una tarea" });
}

module.exports = {
  taskList,
  taskCreate,
  taskGetById,
  taskUpdate,
  taskDelete,
};
