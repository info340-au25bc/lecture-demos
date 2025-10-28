// From https://stackoverflow.com/a/11444416

// make 3 functions that each log to the console.
// Store them in a list.
var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log("My value: " + i);
  };
}

// run all three functions
for (var j = 0; j < 3; j++) {
  funcs[j]();
}