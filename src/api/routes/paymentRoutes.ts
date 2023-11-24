const express = require('express');
import { processPayment } from '../controllers/paymentProcessorController';

const router = express.Router();

// Handle POST request for processing payment
router.post('/process-payment', processPayment);

export default router;
