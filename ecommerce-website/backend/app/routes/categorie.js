const CategorieController = require("../controllers/categorie");
module.exports = (express) => {
  const router = express.Router();
  router.get("/", CategorieController.getAllCategories);
  router.post("/", CategorieController.addNewCategorie);
  router.get("/:id", CategorieController.getOneCategorie);
  router.put("/:id", CategorieController.updateOneCategory);
  router.delete("/:id", CategorieController.deleteOneCategorie);
  return router;
};
