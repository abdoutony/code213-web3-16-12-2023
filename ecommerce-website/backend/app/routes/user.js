module.exports = (express) => {
  const router = express.Router();
  router.get("/", (req, res) => {
    res.send("Hello from user router");
  });
  router.get("/details", (req, res) => {
    res.send("Hello from user details");
  });
  return router;
};
