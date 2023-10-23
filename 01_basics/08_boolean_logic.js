let a = true;
let b = false;

let c = a && b;
let d = a || b;
let e = !b;
console.log(c, d, e);

let f = 7;
let g = 0;

console.log(f && g, f || g, !f, !g); //doesnot return True/False, returns actual values for && and ||. Returns True/False only for negation !
