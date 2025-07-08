const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Create task (attach logged-in user)
router.post('/', authMiddleware, async (req, res) => {
  const { title } = req.body;

  try {
    const task = await Task.create({
      title,
      completed: false,
      user: req.userId
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
});

// ✅ Fetch only logged-in user's tasks
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
});

// Update Task
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, completed } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { title, completed },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: 'Task not found or unauthorized' });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task' });
  }
});

// Delete all completed tasks - must come BEFORE '/:id'
// ✅ Clear all completed tasks
router.delete('/clear-completed/all', authMiddleware, async (req, res) => {
  try {
    const result = await Task.deleteMany({ user: req.userId, completed: true });

    res.json({ message: `Deleted ${result.deletedCount} completed task(s)` });
  } catch (err) {
    res.status(500).json({ message: 'Failed to clear completed tasks' });
  }
});

// DELETE single task by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });

    if (!task) return res.status(404).json({ message: 'Task not found or unauthorized' });

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
});


module.exports = router;
