const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      user: req.user,
      title,
      description,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL TASKS OF USER
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
