const ProductController = require("../controllers/product");
const CommentController = require("../controllers/comment");
const upload = require("../middleware/upload");
module.exports = (express) => {
  const router = express.Router();
  router.get("/", ProductController.getAllProducts);
  router.get("/:id", ProductController.getOneProduct);
  router.post("/", upload.single("image"), ProductController.addNewProduct);
  router.put("/:id", ProductController.updateOneProduct);
  router.delete("/:id", ProductController.deleteOneProduct);
  router.post("/:id/add-tag", ProductController.addTagToProduct);
  router.post("/:id/remove-tag", ProductController.deleteTagfromProduct);
  router.post("/:id/like", ProductController.addLikeToProduct);
  // router.post("/:id/is-liked", ProductController.isLikedProduct);
  router.post("/:id/remove-like", ProductController.dislikeProduct);
  router.post("/", CommentController.addNewComment);
  router.get("/", CommentController.getAllComments);
  return router;
};
