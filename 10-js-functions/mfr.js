const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map
let r = numbers.map((v, i) => v * i);
// console.log(r);

// filter
let evens = numbers.filter((v) => v % 2 == 0);
// console.log(evens);

// reduce
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log(sum);

sum = 0;
numbers.forEach((v) => sum += v);
// console.log(sum);

let reduceResult = numbers.reduce((p, v) => p + v, 0)
// console.log(reduceResult);

let foods = ["pizza", "pizza", "dumplings", "dumplings", "ice cream", "pasta"];
// Hpw could we use reduce to count how many of each favorite food we have?

let favorites = foods.reduce(
  (acc, v) => {
    if (acc[v] === undefined) {
      acc[v] = 1;
    } else {
      acc[v] += 1;
    }
    return acc;
  },
  {}
);
console.log(favorites);