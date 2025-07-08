const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read All Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update Task
router.put('/:id', async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete all completed tasks - must come BEFORE '/:id'
router.delete('/clear-completed', async (req, res) => {
  try {
    await Task.deleteMany({ completed: true });
    res.json({ message: 'All completed tasks deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE single task by ID
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
