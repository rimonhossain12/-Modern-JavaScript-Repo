// spread operator

// let numbers = [1, 2, 3]; 
// let a = [...numbers]; // exact copy of numbers;
// numbers.push(4);
// console.log(a);
// console.log(numbers);
// let newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);
// console.log(a);

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers = [...numbers1, ...numbers2]; // this spreat operator;
// numbers = numbers1.concat(numbers2);
console.log(numbers);


// spreate operator work with object
let myObj1 = {
    x: 1,
    y: 2
}

let myObj2 = {
    a: 1,
    b: 2,
};

console.log({
    ...myObj1, ...myObj2
});