// import/exports

// import { pi as varPi, a as varA } from './external.js'; // named import
// console.log(varA, varPi);

// import * as test from "./external.js";

// console.log(test.a);

import external, { a, pi } from "./external.js";
console.log(a, pi);
external();