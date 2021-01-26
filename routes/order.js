var express = require('express');
var router = express.Router();

// Require order controller.
var orderController = require('../controllers/orderController');

// when customers visit /order go to order controller
router.get('/order', orderController.order_get);
router.post('/order', orderController.order_post);
router.update('/order', orderController.order_update);
router.delete('/order', orderController.order_delete);


module.exports = router;