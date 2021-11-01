const express = require('express');

const router = express.Router();
const authController = require('../../controllers/api/v1/authController')

// User Login
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword)
router.post('/subscribe', authController.subscribe)
router.patch('/updatePassword', authController.updatePassword)
router.patch('/resetPassword/:resetToken', authController.resetPassword)

module.exports = router;

