const OrderController = require("../controllers/order");
module.exports = (express) => {
  const router = express.Router();
  router.post("/", OrderController.addNewOrder);
  router.get("/", OrderController.getAllOrders);
  router.get("/:id", OrderController.getOneOrder);
  //   router.put("/:id", OrderController.updateOneOrder);
  router.delete("/:id", OrderController.deleteOrder);
  return router;
};
