const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Ensure these match the exact path your frontend is calling
router.post('/login', login);
router.post('/register', register);

module.exports = router;