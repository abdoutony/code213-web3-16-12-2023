module.exports = (express) => {
  const router = express.Router();
  router.post("/register", (req, res) => {
    // retrieve data from req.body
    const { firstname, lastname, email, password } = req.body;

    // data validation
    if (!(firstname && lastname && email && password)) {
      const error = "Please fill out all fields";
      return res.status(400).send(error);
    } else {
      // insert user into db

      return res.status(201).send("user registred");
    }
  });
  return router;
};
