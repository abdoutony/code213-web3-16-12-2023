const Product = require("../models/product");
const ProductTag = require("../models/product-tag");
const Tag = require("../models/tag");
const Comment = require("../models/comment");
const Like = require("../models/like");
// const User = require("../models/user");
const { isObjectId } = require("../utils/validate-objectId");

exports.getAllProducts = async (req, res) => {
  try {
    const {query,category,userId}=req.query
    console.log(query)
    const products = await Product.find(query && query !==""  ?{
      $or: [{ name: { $regex: query , $options: "i" } },
      { description: { $regex: query , $options: "i" } },
    ]}:{}).populate("category");

  //  console.log("pppp",products)
   if(userId && userId !==""){
    const productLikesByUser = await Promise.all(products.map(async(el)=>{
       const id = el._id
       const like = await Like.findOne({user:userId,product:id})
      //  console.log("dddd",like)
       if(like){
         return {...el._doc,isLiked:true}
       }else{
         return {...el._doc,isLiked:false}
       }
    }))
    return res.status(200).json({ msg: "Get with success", data: productLikesByUser });
 }

    if(category && category !==""){
       const filtredProducts = products.filter(el=>el.category.name===category)
      //  console.log('iam here')
       return res.status(200).json({ msg: "Get with success", data: filtredProducts });
    }
    // console.log(products)
    res.status(200).json({ msg: "Get with success", data: products });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addNewProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const url = req.protocol + "://" + req.get("host"); // http://localhost:4000

    const newProduct = new Product({
      name,
      description,
      price,
      image: url + "/uploads/" + req.file.filename,
      category: category,
    });
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
    // validate object id
    if (!isObjectId(id)) {
      return res.status(400).json({ msg: "Invalid product id" });
    }

    const product = await Product.findById(id).populate("category");

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    const productsTags = await ProductTag.find(
      { product: product._id },
      { tag: 1, _id: 0 }
    ).populate("tag", "name");
    const newProuctTag = productsTags.map((el) => el.tag.name);

    // get Product comments
    const comments = await Comment.find(
      { product: product._id },
      { user: 1, comment: 1 }
    );

    res.status(200).json({
      msg: "Get with success",
      data: product,
      tags: newProuctTag,
      comments: comments,
    });
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

exports.addTagToProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;

    const idTag = req.body.idTag;

    // verification si le produit existe
    const product = await Product.findById(idProduct);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // verification si le tag existe
    const tag = await Tag.findById(idTag);
    if (!tag) {
      return res.status(404).json({ msg: "Tag not found" });
    }

    // verification si le tag est deja ajouté a ce produit
    const productTag = await ProductTag.findOne({
      product: idProduct,
      tag: idTag,
    });

    if (productTag) {
      return res.status(400).json({ msg: "Tag already added to this product" });
    }
    const newProuctTag = new ProductTag({ product: idProduct, tag: idTag });
    const savedProuctTag = await newProuctTag.save();
    res
      .status(201)
      .json({ msg: "Tag added to product with success", data: savedProuctTag });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteTagfromProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;
    const idTag = req.body.idTag;
    const productTag = await ProductTag.findOne({
      product: idProduct,
      tag: idTag,
    });
    if (!productTag) {
      return res.status(404).json({ msg: "Tag not found in this product" });
    }
    await ProductTag.deleteOne({ product: idProduct, tag: idTag });
    res.status(200).json({ msg: "Tag deleted from product with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addLikeToProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    const userId = req.body.userId;

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // if (!user) {
    //   return res.status(404).json({ msg: "User not found" });
    // }

    const like = await Like.findOne({ user: userId, product: product._id });

    if (like) {
      await Like.deleteOne({ user: userId, product: product._id });
      // decrement product like
      product.likes = product.likes - 1;
      await product.save();
      return res
        .status(200)
        .json({ msg: "Like removed with success", data: like });
        
    }

    const newLike = new Like({
      user: userId,
      product: product._id,
    });

    const savedLike = await newLike.save();

    // increment product like
    product.likes = product.likes + 1;
    await product.save();

    res.status(200).json({ msg: "Like added with success", data: savedLike });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.dislikeProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    // const user = await User.findById(req.userId);
    const userId = req.body.userId;
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // if (!user) {
    //   return res.status(404).json({ msg: "User not found" });
    // }

    const like = await Like.findOne({ user: userId, product: product._id });

    if (!like) {
      return res.status(400).json({ msg: "Product not liked" });
    }

    await Like.deleteOne({ user: userId, product: product._id });
    // decrement product likes
    product.likes = product.likes <= 0 ? 0 : product.likes - 1;
    await product.save();
    res.status(200).json({ msg: "Like deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
