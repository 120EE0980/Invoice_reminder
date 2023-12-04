// src/routes/invoiceRoutes.js
const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();

router.use(authenticationMiddleware.isAuthenticated);

router.get('/due', invoiceController.getDueInvoices);
router.post('/trigger-automation', invoiceController.triggerAutomation);

module.exports = router;
