const express = require("express");
const Task = require("../model/taskModel");
const authenticateToken = require("../middleware/auth");
const jwt = require("jsonwebtoken")

const router = express.Router();



// Dummy user detail 

const userdetail = { username:"admin@123", password:"test123"}
 
// Secret key for JWt Toke
const secretKey = "fghjfstdvsf";

// Get all tasks (with optional pagination)
router.get('/', authenticateToken, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  console.log(req.query)
  try {
    const tasks = await Task.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);  // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  //console.log(req.body)
  
  if (username === userdetail.username && password === userdetail.password) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
   // console.log(token)
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get task by ID
router.get("/:id", authenticateToken,  async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Add a new task
router.post("/", async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.status(201).json(task);
});

// Update a task
router.put("/:id",  async (req, res) => {
  const { title, status } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { title, status, updatedAt: Date.now() },
    { new: true }
  );
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Toggle task status
router.patch("/:id/toggle",  async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.status = task.status === "incomplete" ? "complete" : "incomplete";
  task.updatedAt = Date.now();
  await task.save();
  res.json(task);
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted successfully" });
});

module.exports = router;
