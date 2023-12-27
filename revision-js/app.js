//  var
var a = 8;
// we ca redeclare var variables
// var a = 5;
// we can't redeclare let varaible
var b = 5;
// on peut peut pas ecraser la valeur d'une variable de type const et on ne peut pas la redeclarer
var c = 6;
// console.log(a);
// console.log(b);
// console.log(c);
function test() {
    // let variables can't be accessed outside the function
    var d = 44;
    console.log("a = ".concat(a));
}
// test();
// console.log(d);
// conditions
// if (a > 5) {
//   console.log("a > 5");
// } else if (a < 5) {
//   console.log("a < 5");
// } else {
//   console.log("a == 5");
// }
// if else with ternary
// a === 5 ? console.log("a == 5") : console.log("a != 5");
// a > 5 ? console.log("a>5") : a < 5 ? console.log("a<5") : console.log("a==5");
// functions
function add(a, b) {
    return a + b;
}
// console.log(add(a, b));
// arrow functions
var sub = function (a, b) {
    return a - b;
};
// higher order functions
//  are functions that take other functions as arguments or return a function
function handleSub(callback) {
    console.log(callback(4, 5));
    return function (msg) { return msg; };
}
// console.log(handleSub(sub)("substraction done successfully"));
// array functions
var arr = [1, 2, 3, 4, 5];
// looop over array element
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// array foreach
// arr.forEach((element: number) => {
//   console.log(element);
// });
// array map
var newArr = arr.map(function (element) {
    element = element + 1;
    return element;
});
// console.log(newArr);
// filter array
var evenArr = arr.filter(function (element) {
    return element % 2 === 0;
});
// console.log(evenArr);
// reduce array
var sum = arr.reduce(function (acc, current) {
    console.log("Accumulator: ".concat(acc, " / Current: ").concat(current));
    return acc + current;
});
console.log(sum);
