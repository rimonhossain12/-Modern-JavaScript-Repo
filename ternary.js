// ternary operator

var age = 18;

var type = age >= 18 ? "Adult" : "Child";
console.log(type);
if (age >= 18) {
    type = 'Adult';
} else {
    type = 'child';
}

// multiple checking
age = 9;
type = age >= 18 ? "adult" : age < 10 ? "child" : "young";
console.log(type);

var marks = 90;
var result = marks >= 80 ? "A+" : "A";
console.log(result);

//  next exaple

var isLoggined = false;
var access = isLoggined ? "login" : "wrongPassword";
console.log(access);
