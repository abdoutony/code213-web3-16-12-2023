const Product = require("../models/product");
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json({ msg: "Get with success", data: products });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addNewProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res
      .status(201)
      .json({ msg: "Product added with success", data: savedProduct });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).populate("category");
    res.status(200).json({ msg: "Get with success", data: product });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCategoie = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res
      .status(200)
      .json({ msg: "Product updated with success", data: updatedCategoie });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.deleteOne({ _id: id });
    res.status(200).json({ msg: "Product deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
