var Product = require('../models/Product.js');

//display all products 
exports.product_list = function(req, res){
  Product.find({"categories": req.params.cat_id})
    .then(products=>{
      res.send(products);
    })
};

//add a product


exports.add_product = async(req, res)=>{
  console.log("yahoo")
  var product = new Product({
    name: req.body.name,
    categories: req.body.categories,
    price: req.body.price,
    description: req.body.description
  });

  const product_exist = await Product.findOne({name:req.body.name});
  if(product_exist){
    return res.status(400).send(error);
  }
  else{
    try{
      const savedProduct = await product.save();
      res.send({ product: product._id });
    }catch(err){res.status(400).send(err)}
  }
};

//update product
exports.update_product = function(req, res){
  Product.findByIdAndUpdate(req.params.p_id, {
      name: req.body.name,
      price: req.body.price,
      categories: req.body.categories,
      description: req.body.description
  }, {new: true})
  .then(product => {
      if(!product) {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          });
      }
      res.send(product);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Product not found with id " + req.params.productId
          });
      }
      return res.status(500).send({
          message: "Error updating Product with id " + req.params.productId
      });
  });
}

