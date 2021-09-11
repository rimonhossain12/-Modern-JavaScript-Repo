// Array.prototype.find();

var numbers = [1, 2, 3, 4, 5, 6, 10];
const result = numbers.find(function (currentValue) { // currentValue,currentIndex,numberArray get this function;
    return currentValue > 4;
    // output 5 and returna the ans;
}, this);
console.log(result);
// array.find can't changes main array;
console.log(numbers);


//  more example for this

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('Hello');
    }
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(function () {
            this.test();
        }, this);
    }
}

let student = new Student('Rimon', 18);
student.exampleFunction();