var Category = require('../models/Category.js');

//display all categories
exports.category_list = (req, res)=>{
  Category.aggregate([
     {
   $graphLookup: {
     from: "categories",
      startWith:"$name",
      connectFromField: "name",
       connectToField: "parent_category",
     //depthField: "depth",
      as: "child_category"
   }
     }
  ]).then(categories => {
      res.send(categories);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving categories."
      });
  });
};

//add a category
exports.add_category = async(req, res)=>{
  console.log("yahoo")
  var category = new Category({
    name: req.body.name,
    parent_category: req.body.parent || 0
  });

  const cat_exist = await Category.findOne({name:req.body.name});
  if(cat_exist){
    return res.status(400).send(error);
  }
  else{
    try{
      const savedCategory = await category.save();
      res.send({ category: category._id });
    }catch(err){res.status(400).send(err)}
  }
};
