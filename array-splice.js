// array prototype slice();
let numbers = [1, 2, 3, 4, 5];
var result = numbers.splice(1, 2, 10, 12, 13, 19);

// splice changes main array; and return number of delete element;
// console.log(numbers)
// console.log(result);

numbers = [1, 2, 3, 4, 5];
result = numbers.splice(-1, 2, 10, 12, 13, 19);
console.log(numbers);
console.log(result);