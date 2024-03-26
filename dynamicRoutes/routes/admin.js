const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/Add-Product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/Add-Product', productsController.postAddProduct);

module.exports = router;
