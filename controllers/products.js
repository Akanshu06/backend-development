const path=require('path')
const rootdir=require('../helper/path')

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'))
}

exports.Contact_US=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}


exports.success=(req,res)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
}