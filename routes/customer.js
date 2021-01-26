var express = require('express');
var router = express.Router();

// Require customer controller.
var customerController = require('../controllers/customerController');

// when customers visit /customer go to customer controller
router.get('/customer', customerController.customer_get);
router.post('/customer', customerController.customer_post);
router.update('/customer', customerController.customer_update);
router.delete('/customer', customerController.customer_delete);


module.exports = router;