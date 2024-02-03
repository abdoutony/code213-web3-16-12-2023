const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes");
require("dotenv").config();
const dbUrl = process.env.DB_DEV_URL;
const db = require("./config/db");
// express middldeware
function myMiddleWare(req, res, next) {
  console.log(new Date());
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure public and uploads
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.use(myMiddleWare);

app.use("/api", mainRoutes(express));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
  db.connect(dbUrl);
});
