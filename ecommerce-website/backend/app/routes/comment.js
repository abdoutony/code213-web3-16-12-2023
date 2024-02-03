const CommentController = require("../controllers/comment");
module.exports = (express) => {
  const router = express.Router();

  //   router.get("/:id", CommentController.getOneComment);
  //   //   router.put("/:id", CommentController.updateOneComment);
  //   router.delete("/:id", CommentController.deleteComment);
  return router;
};
