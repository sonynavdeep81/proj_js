/* Datatypes */
/* Javascript is a dynamically typed language*/
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
