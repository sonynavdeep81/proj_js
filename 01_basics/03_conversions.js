/* Datatypes */
/* Javascript is a dynamically typed language*/
/*Type Conversion*/
let a = "33";
let b = "33a";
let c = null;
let d = undefined;
let e = true;
let f = false;
console.log(Number(a));
console.log(typeof Number(a));

console.log(Number(b)); //Be careful, Javascript has NO STRICT CHECKING
console.log(typeof Number(b)); //It does not produce any error

console.log(Number(c));
console.log(typeof Number(c));

console.log(Number(d));
console.log(typeof Number(d));

console.log(Number(e));
console.log(typeof Number(e));

console.log(Number(f));
console.log(typeof Number(f));

let g = 1;
let h = 0;
let i = "";
let j = "anything";

console.log(Boolean(g));
console.log(typeof Boolean(g));

console.log(Boolean(h));
console.log(typeof Boolean(h));

console.log(Boolean(i));
console.log(typeof Boolean(i));

console.log(Boolean(j));
console.log(typeof Boolean(j));

let k = 33;
console.log(String(k));
console.log(typeof String(k));

/*Type Coercion*/
/*This is automatically performed by javascript */

let a1 = "1" + "2" + 3;
console.log(a1); //123 number to string conversion

let a2 = "5" - "2" - "1";
console.log(a2); //2 string to number conversion

let a3 = "5" - "2" - "1" + "6" + "7";
console.log(a3); //267

let a4 = "5" * 3;
console.log(a4); //15 string to number conversion

let a5 = "6" / 3;
console.log(a5); //2 string to number conversion
