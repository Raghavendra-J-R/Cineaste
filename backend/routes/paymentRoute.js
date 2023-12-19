const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController')

router.post('/razorpay',paymentController.makePayment)

module.exports = router