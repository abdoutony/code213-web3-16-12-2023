// no window only global
// global.console.log("Hello from nodejs");

// console.log(__dirname);
// console.log(__filename);

console.log(process.pid);
console.log(process.versions.node);

console.log(process.argv);
const [, , firstname, lastname] = process.argv;

console.log(firstname);
console.log(lastname);
