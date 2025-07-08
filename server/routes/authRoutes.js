const express = require('express');
const router = express.Router();
const { login, register, logout, getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', authMiddleware, getUser);

router.get('/users', async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});
router.get('/user/:id', async (req, res) => {
  const SingleUser = await User.findById(req.params.id);
  res.json(SingleUser);
});

module.exports = router;
