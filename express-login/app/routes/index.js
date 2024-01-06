const userRoutes = require("./user");
const productRoutes = require("./product");
const authRoutes = require("./auth");
module.exports = (express) => {
  const router = express.Router();
  // configuration here
  router.get("/", (req, res) => {
    // res.send("Hello World!");
    res.render("layouts/index", {
      title: "Home page",
      page: "index",
    });
  });
  router.use("/users", userRoutes(express));
  router.use("/products", productRoutes(express));
  router.use("/auth", authRoutes(express));
  return router;
};
