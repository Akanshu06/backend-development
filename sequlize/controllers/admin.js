const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    imageUrl:imageUrl,
    price:price,
    description:description,
    prodId:req.user.id
  })
  .then(result=>{
    console.log('created product');
    res.redirect('/admin/products');
  })
  .catch(err=>{
    console.log(err);
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then(product=>{
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId).then(product=>{
    product.title=updatedTitle;
    product.price=updatedPrice;
    product.imageUrl=updatedImageUrl;
    product.description=updatedDesc;
    return product.save();
  }).then(result=>{
    console.log('upd');
  }).catch()
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findAll().then(product=>{
   return Product.destroy({
    where: {
      id: prodId // Specify the primary key value to delete
    }
  })
  }).then(result=>{
    console.log('Deleted prodcut');
    res.redirect('/admin/products');
  });
  
};
