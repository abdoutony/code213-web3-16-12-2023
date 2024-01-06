module.exports = (express) => {
  const router = express.Router();
  router.get("/", (req, res) => {
    // res.send("Hello from user router");
    res.render("layouts/index", {
      title: "Users page",
      page: "users/index",
    });
  });
  router.get("/details", (req, res) => {
    res.send("Hello from user details");
  });
  return router;
};
