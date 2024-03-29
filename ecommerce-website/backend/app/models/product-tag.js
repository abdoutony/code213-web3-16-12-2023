const mongoose = require("mongoose");

const ProductTagSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
  },
  { timestamps: true }
);

const ProductTag = mongoose.model("ProductTag", ProductTagSchema);
module.exports = ProductTag;
