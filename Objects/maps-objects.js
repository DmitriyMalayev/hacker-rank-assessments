// Maps vs Objects
// ES6 Maps are a good replacement for Objects
// in many circumstances but not all

let a = { name: "Sherlock" };
let b = { name: "Watson" };
let people = {};

people[a] = "Detective"; // a  ['object':Object]
people[b] = "Doctor"; // b  ['object':Object]
//can't use objects as keys for other objects
//object keys are converted into a string

console.log(people[a], people[b]);

let characters = new Map(); //allows anything to be used as a key
characters.set(a, "Detective");
characters.set(b, "Doctor");

console.log(characters.get(a), characters.get(b));

for (let [key, value] of characters) {
  console.log(`${key} = ${value}`);
}
