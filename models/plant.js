const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const plantSchema = new Schema({
  species : String,
  family: String,
  light: String,
  climate: String,
  maitenance: String,
  comments: [{reviewer: String, content: String}],
  image: String
});

const plantType = mongoose.model('plantType', plantSchema);
module.exports = plantType;