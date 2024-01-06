module.exports = (express) => {
  const router = express.Router();
  router.get("/", (req, res) => {
    // res.send("Hello from product router");
    res.render("layouts/index", {
      title: "Products page",
      page: "products/index",
    });
  });
  router.get("/details", (req, res) => {
    res.send("Hello from product details");
  });
  return router;
};
