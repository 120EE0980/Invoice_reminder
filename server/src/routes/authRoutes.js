// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();

router.get('/google', authController.googleAuthHandler);
router.get('/google/callback', authController.googleAuthCallback);
router.get('/logout', authController.logout);

module.exports = router;
