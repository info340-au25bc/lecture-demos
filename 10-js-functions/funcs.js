const sayHello = function (personName) {
  return "Hello, " + personName;
}

const sayGoodbye = (name) => "Goodbye, " + name;
// ... is the same as:
// const sayGoodbye = (name) => {
//   return "Goodbye, " + name;
// }
// 
// ... is the same(ish) as:
// function sayGoodbye(name) {
//   return "Goodbye, " + name;
// }

function doSomething(something) {
  return something();
}

console.log(doSomething(sayHello("Alice"))); // didn't work
console.log(doSomething(sayHello)); // didn't work
