const ProductController = require("../controllers/product");
module.exports = (express) => {
  const router = express.Router();
  router.get("/", ProductController.getAllProducts);
  router.get("/:id", ProductController.getOneProduct);
  router.post("/", ProductController.addNewProduct);
  router.put("/:id", ProductController.updateOneProduct);
  router.delete("/:id", ProductController.deleteOneProduct);
  return router;
};
