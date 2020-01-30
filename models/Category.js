const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },

  child_categories : [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Category', categorySchema);
