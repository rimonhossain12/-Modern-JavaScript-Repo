// destructuring in js
const user = {
    id: 339,
    name: 'Sakib',
    age: 35,
    euductaion: {
        degree: 'Masters',
    },
};

// get object name;
const { name: title, id: Roll, age: year } = user;
console.log(title, Roll, year);

// get degree
const { euductaion: { degree } = {} } = user;
console.log(degree);

// array destructuring
let numbers = [1, 2, [3, 100, 500], 4, 6];
// single array object
// let [, a, , b] = numbers;
// console.log(a, b);
// multi object
let [, , [, a, b]] = numbers;
console.log(a, b);

// swap value destructuring
let num1 = 1;
let num2 = 2;

// the old way;
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);

// new way 
[num2, num1] = [num1, num2];
console.log(num1, num2);