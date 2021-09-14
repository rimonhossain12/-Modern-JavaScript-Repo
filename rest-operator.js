// rest operator
function myFunc(a, ...params) { // params must be last parameter
    console.log(a);
    console.log(params);
    // console.log(a, b);
}

myFunc(4, 5, 6, 7, 8, 9);