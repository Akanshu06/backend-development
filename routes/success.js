const express=require('express');
const router=express.Router();

const contactControll=require('../controllers/products')
router.post('/success',contactControll.success)

module.exports=router;