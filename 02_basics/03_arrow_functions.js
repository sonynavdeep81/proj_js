//no function keyword, no function name
//this is also a function expression (a) => a * 5
//a is the parameter and a*5 is the return value
const b = (a) => a * 5;
const c = b(10);
console.log(c);

//multiple paramters
const d = (a, b) => a * b;
const e = d(5, 7);
console.log(`Value=${e}`);

//doing more than one operation
const f = (a, b) => {
  const g = a + b;
  const h = a - b;
  return g * h;
};

const g = f(7, 5); //const valriables are function scoped like let variables so cant be accessed outside function
console.log(g);

//multiple return statements
const f1 = (a, b) => {
  const g = a + b;
  const h = a - b;
  return g;
  return h; //control never comes here, return from previous statement
};

const g1 = f1(7, 5);
console.log(g1);

//multiple return statements
const f2 = (a, b) => {
  const g = a + b;
  const h = a - b;
  return g, h; //first value will be returned
};

const g2 = f1(7, 5);
console.log(g2);
