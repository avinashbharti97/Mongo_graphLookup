var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/categoryController');
var product_controller = require('../controllers/productCategory');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET all categories
router.get('/categories', category_controller.category_list);

//add categories
router.post('/categories/create', category_controller.add_category);


//GET all products 
router.get('/products/:cat_id', product_controller.product_list);

//add product 
router.post('/products/create', product_controller.add_product);

//update product
router.post('/products/:p_id/update', product_controller.update_product );


module.exports = router;
