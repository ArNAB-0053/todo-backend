const express = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/get/:userId", authMiddleware, getTodos);
router.post("/post", authMiddleware, createTodo);
router.put("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
