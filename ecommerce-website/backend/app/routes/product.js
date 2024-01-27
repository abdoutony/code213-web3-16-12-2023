const ProductController = require("../controllers/product");

module.exports = (express) => {
  const router = express.Router();
  router.get("/", ProductController.getAllProducts);
  router.get("/:id", ProductController.getOneProduct);
  router.post("/", ProductController.addNewProduct);
  router.put("/:id", ProductController.updateOneProduct);
  router.delete("/:id", ProductController.deleteOneProduct);
  router.post("/:id/add-tag", ProductController.addTagToProduct);
  router.post("/:id/remove-tag", ProductController.deleteTagfromProduct);
  router.post("/:id/add-like", ProductController.addLikeToProduct);
  router.post("/:id/remove-like", ProductController.dislikeProduct);
  return router;
};
