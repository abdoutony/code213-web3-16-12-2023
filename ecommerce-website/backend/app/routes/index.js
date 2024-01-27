const userRoutes = require("./user");
const productRoutes = require("./product");
const authRoutes = require("./auth");
const categoriesRoutes = require("./categorie");
const tagRouter = require("./tag");
const orderRoutes = require("./order");
const commentRoutes = require("./comment");
module.exports = (express) => {
  const router = express.Router();
  // configuration here
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  router.use("/categories", categoriesRoutes(express));
  router.use("/tags", tagRouter(express));
  router.use("/users", userRoutes(express));
  router.use("/products", productRoutes(express));
  router.use("/orders", orderRoutes(express));
  router.use("/comments", commentRoutes(express));
  router.use("/auth", authRoutes(express));
  return router;
};
