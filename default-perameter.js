// function default parameter value;

function myFunc(x = 10) { // if you not passing value any it will be set 10 but if you pass any value then passing value will be set
    return x;
}
console.log(myFunc(20));
console.log(myFunc(undefined));