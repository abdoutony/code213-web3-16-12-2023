const userRoutes = require("./user");
const productRoutes = require("./product");
const authRoutes = require("./auth");
module.exports = (express) => {
  const router = express.Router();
  // configuration here
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  router.use("/users", userRoutes(express));
  router.use("/products", productRoutes(express));
  router.use("/auth", authRoutes(express));
  return router;
};
