const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const User     = require('../models/user');
const Plant    = require('../models/plant');


const commentSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  content: String},
  {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);



module.exports = Comment;