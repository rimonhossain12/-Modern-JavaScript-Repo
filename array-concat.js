// array concat add other array but not change main array;

let number1 = [1, 2, 3, 4, 5];
let number2 = [6, 7, 8, 9, 10];
var result = number1.concat(number2);

console.log(result);
console.log(number1, number2);


// array push method
// push change main array;
var number = [1, 2, 3, 4, 5];
const ans = number.push(6, 7, 8, 9);
number.push(10);
console.log(ans);