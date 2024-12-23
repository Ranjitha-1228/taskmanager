const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 50 },
  status: { type: String, enum: ["incomplete", "complete"], default: "incomplete" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("tasks", taskSchema);