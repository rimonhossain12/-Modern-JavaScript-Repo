// Array prototype map();
var numbers = [1, 2, 3, 4, 5, 6];

// map return an array but not change main array;
const result = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(result);