// comment crud

const Comment = require("../models/comment");
const Product = require("../models/product");
const User = require("../models/user");

const { isObjectId } = require("../utils/validate-objectId");

// create comment
exports.addNewComment = async (req, res) => {
  try {
    const { comment, product } = req.body;
    const user = req.params.id;
    const newComment = new Comment({
      comment: comment,
      user: user,
      product: product,
    });
    const savedComment = await newComment.save();
    res
      .status(200)
      .json({ msg: "Comment added with success", data: savedComment });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ msg: "Get with success", data: comments });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOneComment = async (req, res) => {
  try {
    const id = req.params.id;
    await Comment.deleteOne({ _id: id });
    res.status(200).json({ msg: "Comment deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
