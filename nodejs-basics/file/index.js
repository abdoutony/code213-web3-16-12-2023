const fs = require("fs");

// sync blocking
// const file = fs.readFileSync("./test.txt", "utf-8");
// console.log(file);
// console.log("Started reading file");

// async non blocking
fs.readFile("./test.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(`Error, ${error.message}`);
  } else {
    console.log(data);
  }
});
console.log("Started reading file");
let newText = `
hey
`;
fs.appendFileSync(__dirname + "/test.txt", newText);
console.log("starting appending in a file");

if (fs.existsSync("./test.txt")) {
  fs.unlink("./test.txt", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File deleted");
    }
  });
}
