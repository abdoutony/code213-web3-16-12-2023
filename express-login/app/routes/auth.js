module.exports = (express) => {
  const router = express.Router();
  router.get("/login", (req, res) => {
    res.render("layouts/index", {
      title: "Login",
      page: "auth/login",
    });
  });

  router.get("/register", (req, res) => {
    res.render("layouts/index", {
      title: "Regiter",
      page: "auth/register",
      error: "",
    });
  });

  router.post("/register", (req, res) => {
    // retrieve data from req.body
    const { firstname, lastname, email, password } = req.body;

    // data validation
    if (!(firstname && lastname && email && password)) {
      const error = "Please fill out all fields";
      return res.render(`layouts/index`, {
        title: "Register",
        page: "auth/register",
        error,
      });
    } else {
      // insert user into db
      return res.redirect("/app");
    }
  });
  return router;
};
