/*
1. var, let and const are different types of variables. All of them can be hoisted. In hoisting, we move variables and functions to the top before they are initialized. 
2. During hositing "var" are initialized to "undefined" whereas "let" and "const" are not initialized. Although "let" and "const" can be hoisted like "var" but they cannot be accessed. "var" if accessed before initlization, will return "undefined" whereas "let" and "const" variables remain in temporal dead zone (they will give reference error if accessed in this zone) until they are initialized. Temporal dead zone is the time between when a variable is decleared and when it is initialized.
3. "var" and "let" can be overwritten but const cannot as they cannot be changed.
4. Both "let" and "const" are block-scoped variables i.e. they can be accessed only within the block whereas "var" can be accessed anywhere. const variables must be initialized where they are
declared otherwise we get an error.
5. Block-scoped variables "let" and "const" cannot be redeclared.
6. "var" should never be used.
*/

/* Hoisting */
console.log(a); //undefined (means variable declared but not initialized)
// console.log(b); //not defined (means variable isnt even declared)
// console.log(c); //not defined
var a = "sss";
let b = "hhh";
const c = "ggg";
let d;
e = 45; //By default this variable will be "var"
console.log(d);
