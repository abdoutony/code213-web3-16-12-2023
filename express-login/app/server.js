const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes");

// express middldeware
function myMiddleWare(req, res, next) {
  console.log(new Date());
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(myMiddleWare);

app.use("/app", mainRoutes(express));

app.get("/", (req, res) => res.send("Hello World!"));

// configurer ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// path.join(__dirname, "views")  ==> "f:/code213-web3-16-12-2023/express-login/app/views"

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
