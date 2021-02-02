const express = require('express')
const customerController = require('../controllers/customers')
const router = express.Router()

router.get('/customers', customerController.getCustomers)

router.post('/customers', customerController.createCustomer)


module.exports = router