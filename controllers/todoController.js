const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const userId = req.params.userId;    
    const todos = await Todo.find({ user: userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({ user: req.user.id, title: req.body.title });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "ToDo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
