const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Todo", TodoSchema);
