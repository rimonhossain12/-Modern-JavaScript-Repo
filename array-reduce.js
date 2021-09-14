// Array prototype reduce;

// reduce can't change main array;
var numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((preValue, currentValue, currentIndex, arr) => {
    return preValue + currentValue;
}, 0);
console.log(sum);

const myFun = () => {
    console.log('Hello world');
}

// setTimeout(myFun, 2000);
// setInterval(myFun, 2000);

const printAnythig = () => {
    for (let i = 1; i <= 1000; i++) {
        console.log(i);
    }
}

console.time(printAnythig());