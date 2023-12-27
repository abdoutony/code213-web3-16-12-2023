const express = require("express");
const app = express();
const port = 3000;

const products = [
  { id: 1, title: "Men tshirt", price: "20$" },
  { id: 2, title: "Sweatshirt", price: "40$" },
];

app.get("/", (req, res) => {
  console.log(req.params);
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  if (product) return res.status(200).json(product);
  return res
    .status(404)
    .json({ message: "Product not found in products list" });
});

app.use("*", (req, res) => res.status(400).send("Bad route"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
