const TagController = require("../controllers/tag");
module.exports = (express) => {
  const router = express.Router();
  router.get("/", TagController.getAllTags);
  router.post("/", TagController.addNewTag);
  router.get("/:id", TagController.getOneTag);
  router.put("/:id", TagController.updateOneTag);
  router.delete("/:id", TagController.deleteOneTag);
  return router;
};
