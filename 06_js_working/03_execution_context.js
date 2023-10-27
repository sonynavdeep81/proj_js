/*How is javascript code executed */
/*First of all Global execution content(GEC), an environment to execute javascript code is created that contains top-level code (the code that is not inside any function). So top level code is executed first. Functions are executed when they are called. There is only 1 GEC per program and can have multiple execution contexts (EC), each created when a particular function is called. All the execution contexts together make a call stack*/

const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
};

function second() {
  var c = 2;
  return c;
}

/*In the above code GEC will be 
*********************************
name='Jonas'
first=<function>
second=<function>
*/
