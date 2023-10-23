//function declaration
function fun(a) {
  console.log(a);
}

fun(10);

//function expression (always return a value that is stored in 'b')
//anonymous function
const b = function (a) {
  return a;
};
const c = b(10);
console.log(c);

/*Function declarations are hoisted but function expressions are not */
