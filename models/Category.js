const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },

  parent_category :{
    type:String,
    required: false,
    unique: false
  }
});

module.exports = mongoose.model('Category', categorySchema);
