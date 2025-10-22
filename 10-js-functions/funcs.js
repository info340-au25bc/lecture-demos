
// 2: personName is undefined

const sayHello = function (personName) {
  return "Hello, " + personName;
}

const sayGoodbye = (name) => "Goodbye, " + name;
/*
const sayGoodbye = (name) => {
  return "Goodbye, " + name;
}

const sayGoodbye = function(name) {
  return "Goodbye, " + name;
}
*/

// Let's assume that this doSomething is NOT modifiable.
function doSomething(something) {
  return something();
}

// Using anonymous functions (aka function literals)...
// 1. pass a function to `doSomething`
// 2. pass a string to `sayHello`
// 3. console.log the return value from doSomething
console.log(doSomething(function () {}));
