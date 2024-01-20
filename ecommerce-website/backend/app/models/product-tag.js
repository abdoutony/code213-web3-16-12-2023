const mongoose = require("mongoose");

const ProductTagSchema = new mongoose.Schema(
  {
    prouduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  },
  { timestamps: true }
);

const ProductTag = mongoose.model("ProductTag", ProductTagSchema);
module.exports = ProductTag;
