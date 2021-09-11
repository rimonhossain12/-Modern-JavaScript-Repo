// for loop, for in, for of
let i = 1;
for (; i <= 5; i++) {
    console.log(i);
}

// for in
const myObj = {
    name: 'javascript',
    estd: '1995',
    founder: 'Brendon Eich'
};

// for (property in myObj) {
//     console.log(property);
// }


// for of loop
for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key} : ${value}`)
}
const myArr = [1, 2, 3, 4, 5];
for (value of myArr) { // if use in get the array index;
    console.log(value);
}
for (value in myArr) {
    console.log(value);
}
//  if use in we can get index but use of get the orginal value;
const myString = 'i love Javascript';
for (str of myString) {
    console.log(str);
}