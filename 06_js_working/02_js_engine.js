/*Javascript engine and runtime */

/*Every web browser has its own engine but google's v8 engine is most popular.  Components of engine are:
1. Call stack: where code is executed using execution context
2. Heap: where all objects are stored
*/

/*Javascript is not an interpreted language anymore. It is now just-in-time compiled, where the code is converted into a machine code and immediately executed (no binary file containing machine code is generated like in compilation). This speeds up javascript code. During just-in-time compilation, the code is first parsed(i.e. read) as an AST(abstract syntax tree) is created from the code. This steps also checks for syntax errors. After parsing, the code is converted into machine code which is then executed immediately. Execution happens in call stack of javascript engine as discussed above. */

/*Javascript tuntime is an environment that contains all tools that are required to execute the javascript code. So it consists of:
1.Javascript engine
2.Web APIs (DOM, timers,fetch, console.log etc.). These APIs are the functionalities provided to the javascript engine but they are not part of the javascript language itself.
3.Callback queue that contain Callback functions like eventhandlers such as addEventListener()  */
