/*How is javascript code executed */
/*First of all Global execution content(GEC), an environment to execute javascript code is created that contains top-level code (the code that is not inside any function). So top level code is executed first. Functions are executed when they are called. There is only 1 GEC per program and can have multiple execution contexts (EC), each created when a particular function is called. All the execution contexts together make a call stack*/

'use strict'; //strict mode is javascript used

const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(10, 20);
  a = a + b;
  return a;
};

function second(d, e) {
  var c = d + e;
  console.log(this); //undefined
  return c;
}
const f = first();
console.log(f);

/*In the above code GEC will contain 
*********************************
name='Jonas'
first=<function>
second=<function>
*/

/*Function 'first' is then called which creates Execution Context (EC) for 'first' function and this EC contains the following:
a=1
b=<function>
-----------------------
It also contains SCOPE CHAIN (that is always inherited from the parent). In this case following scope chain:

name='Jonas'
first=<function>
second=<function>

SCOPE CHAIN contains everything that is avaialble to the current function. So now name variable, 'first' and 'second' function are available to 'first' function. Yes function 'first' also available.
----------------------
THIS pointer (Here no THIS pointer as arrow functions does not contain THIS pointer)
*/

/*Now as function 'second' is called from 'first', so another EC is created for 'second' function. GEC and EC for 'first' still exits. The EC for 'second' is as follows:
c=2
argument_object=[10,20]
-----------------------
Following SCOPE CHAIN:
a=1
b=<function>
name='Jonas'
first=<function>
second=<function>
----------------------
THIS pointer --> It is initialized to 'undefined' if we use strict mode and if the mode is not strict, it points to 'global' object('window')
*/

/*So remember that each EC contains following 3 things:
1. Variable Environment
  a. var, let, const
  b. functions
  c. arguments object
2. Scope Chain
3. THIS pointer
*/

/*In the above code, this what CALL STACK will contain at different times

|           |
|           |
|           |
|           |
|           |
|           |
|           |
|____GEC____|


|           |
|           |
|           |
|           |
|           |
| EC (first)|
|           |
|____GEC____|


|           |
|           |
|           |
| EC(second)|
|           |
| EC (first)|
|           |
|____GEC____|
*/
