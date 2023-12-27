//  var

var a: number = 8;

// we ca redeclare var variables
// var a = 5;

// we can't redeclare let varaible
let b: number = 5;

// on peut peut pas ecraser la valeur d'une variable de type const et on ne peut pas la redeclarer
const c: number = 6;

// console.log(a);
// console.log(b);
// console.log(c);

function test(): void {
  // let variables can't be accessed outside the function
  let d = 44;
  console.log(`a = ${a}`);
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
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(a, b));

// arrow functions
const sub = (a: number, b: number) => {
  return a - b;
};

// higher order functions
//  are functions that take other functions as arguments or return a function
function handleSub(callback: Function): Function {
  console.log(callback(4, 5));
  return (msg: string) => msg;
}
// console.log(handleSub(sub)("substraction done successfully"));

// array functions

const arr: number[] = [1, 2, 3, 4, 5];

// looop over array element
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// array foreach
// arr.forEach((element: number) => {
//   console.log(element);
// });

// array map
const newArr: number[] = arr.map((element: number) => {
  element = element + 1;
  return element;
});

// console.log(newArr);

// filter array
const evenArr: number[] = arr.filter((element: number) => {
  return element % 2 === 0;
});

// console.log(evenArr);

// reduce array
const sum: number = arr.reduce((acc: number, current: number) => {
  console.log(`Accumulator: ${acc} / Current: ${current}`);
  return acc + current;
});

console.log(sum);
