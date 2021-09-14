let x = 4;
let y = 5;
let result = x * y;

let myobj = {
    name: 'javascript',
    founder: 'Brendon Eich',
    estd: '1195',
    ranking: 1,
    x,
    y,
    result
};

// get key
let keys = Object.keys(myobj);
// console.log(keys);
// get values
let values = Object.values(myobj);
// console.log(values);

// get two part key value
let entries = Object.entries(myobj);
console.log(entries);


// object shorthand;
