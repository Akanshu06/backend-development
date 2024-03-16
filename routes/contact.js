const express=require("express");
const router=express.Router();
const path=require('path')
const rootdir=require('../helper/path')
const productsController = require('../controllers/products');
router.get('/contactus',productsController.Contact_US)

module.exports=router;