const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },

  categories : [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Product', productSchema);

