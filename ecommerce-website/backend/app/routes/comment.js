const CommentController = require("../controllers/comment");
module.exports = (express) => {
  const router = express.Router();
  router.post("/", CommentController.addNewComment);
  router.get("/", CommentController.getAllComments);
  //   router.get("/:id", CommentController.getOneComment);
  //   //   router.put("/:id", CommentController.updateOneComment);
  //   router.delete("/:id", CommentController.deleteComment);
  return router;
};
