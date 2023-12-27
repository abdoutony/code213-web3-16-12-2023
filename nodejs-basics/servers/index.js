const http = require("http");
const url = require("url");
// http
//   .createServer((req, res) => {
//     res.write("Hello from your first nodejs server");
//     res.end();
//   })
//   .listen(3005);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello from your first nodejs server</h1>");
    res.end();
  })
  .listen(3005);

const products = [
  { id: 1, title: "Men tshirt", price: "20$" },
  { id: 2, title: "Sweatshirt", price: "40$" },
];

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true).query.q;
    const urlPathName = url.parse(req.url, true).pathname;
    console.log(urlPathName);

    if (urlPathName == "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello from your first nodejs server");
      res.end();
    }
    if (urlPathName === "/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(products));
      res.end();
    }
    if (urlPathName === "/products/search") {
      const q = url.parse(req.url, true).query.q;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(products.filter((p) => p.title.includes(q))));
      res.end();
    }
  })
  .listen(3006);
