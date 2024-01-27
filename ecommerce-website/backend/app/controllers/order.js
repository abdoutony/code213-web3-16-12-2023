const Order = require("../models/order");
const Product = require("../models/product");
const OrderLine = require("../models/order-line");

exports.addNewOrder = async (req, res) => {
  try {
    console.log(req.body);
    const userId = req.body.user;
    const productBodyData = req.body.products;
    var totalPrice = 0;
    productBodyData.forEach((el) => {
      totalPrice += el.price * el.quantity;
    });

    const newOrder = new Order({
      code: Math.floor(100000 + Math.random() * 900000),
      totalPrice: totalPrice,
      user: userId,
    });
    const savedOrder = await newOrder.save();
    // create order lines
    productBodyData.forEach(async (el) => {
      const newOrderLine = new OrderLine({
        quantity: el.quantity,
        order: savedOrder._id,
        product: el.idProduit,
      });
      await newOrderLine.save();
    });

    console.log(totalPrice);
    res.status(200).json({ msg: "Order added with success", data: savedOrder });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ msg: "Get with success", data: orders });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOneOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id);
    const orderLines = await OrderLine.find(
      { order: order._id },
      {
        _id: 0,
        product: 1,
        quantity: 1,
      }
    ).populate("product");
    const newOrderLines = orderLines.map((el) => {
      const obj = {
        id: el.product._id,
        name: el.product.name,
        price: el.product.price,
        quantity: el.quantity,
      };
      return obj;
    });

    const result = { ...order._doc, produits: newOrderLines };
    return res.status(200).json({
      msg: "Get with success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;

    // delete order lines
    await OrderLine.deleteMany({ order: id });
    await Order.deleteOne({ _id: id });
    res.status(200).json({ msg: "Order deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
