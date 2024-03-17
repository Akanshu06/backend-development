const path=require('path')
const rootdir=require('../helper/path')
const Product = require('../models/product'); 


exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}

exports.postAddProduct=(req,res,next)=>{
    const product= new Product(req.body);
    product.save()
    res.redirect('/');
}

exports.getProducts=(req,res,next)=>{
    const product = Product.fatchAll()
    res.sendFile(path.join(rootdir,'views','shop.html'))
}

exports.Contact_US=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}


exports.success=(req,res)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
}