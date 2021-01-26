var express = require('express');
var router = express.Router();

// Require category controller.
var categoryController = require('../controllers/categoryontroller');

// when customers visit /product go to category controller
router.get('/category', categoryController.category_get);
router.post('/category', categoryController.category_post);
router.update('/category', categoryController.category_update);
router.delete('/category', categoryController.category_delete);


module.exports = router;