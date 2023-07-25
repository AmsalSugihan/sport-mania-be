const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, loginStatus } = require('../controllers/Auth.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/loggedin', loginStatus);

module.exports = router;