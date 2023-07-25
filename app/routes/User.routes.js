const express = require('express');
const router = express.Router();
const { getUser, updateUser, changePassword, forgotPassword, resetPassword } = require('../controllers/User.controller');
const protect = require('../middleware/Auth.middleware');

router.get('/getuser', protect, getUser);
router.patch('/updateuser', protect, updateUser);
router.patch('/changepassword', protect, changePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;