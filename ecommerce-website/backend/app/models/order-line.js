const mongoose = require("mongoose");

const OrderLineSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const OrderLine = mongoose.model("OrderLine", OrderLineSchema);
module.exports = OrderLine;
