// loop-recursion.js
// Looping vs. Recursion
 
let fetch = require("node-fetch");
let url = "http://jsonplaceholder.typicode.com/comments?postId=42";
let count = 0;
const SIZE = 120;

//Looping
console.log("Starting the loop");
for (let i = 0; i < 10; i++) {
  console.log("inside loop", i);
}
console.log("Ended the loop");

//Recursion
let recky = function () {
  console.log("inside recky", count);
  count++;
  if (count < 10) {
    recky();
  }
};
console.log("Starting the recursion");
recky();
console.log("ending the recursion");

//Recursion for countdowns 
let countdown = function (size) {
  console.log("x".repeat(size));
  size = Math.floor(size * 0.95);
  if (size > 2) {
    countdown(size);
  }
};
countdown(SIZE);

//Asynchronous methods
// AJAX, Database, Promises, Timers...

console.log("about to fetch");
for (let c = 0; c < 2; c++) {
  let d = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", JSON.stringify(data));
    });
  console.log(c, d);
}
console.log("after fetch???");
