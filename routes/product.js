var express = require('express');
var router = express.Router();

// Require post controller.
var productController = require('../controllers/productController');

// when customers visit /product go to product controller
router.get('/product', productController.product_get);
router.post('/product', productController.product_post);
router.update('/product', productController.product_update);
router.delete('/product', productController.product_delete);


module.exports = router;