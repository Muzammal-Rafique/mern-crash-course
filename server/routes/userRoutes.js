const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getUserById } = require('../controllers/userController');

// GET /api/user/:id
router.get('/:id', authMiddleware, getUserById);

module.exports = router;
