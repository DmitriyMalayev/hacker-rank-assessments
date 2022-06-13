let a = { name: "Sherlock" };
let b = { name: "Watson" };
let people = {};

// Using Objects as the Keys for other Objects
// We can't use Objects as keys for other Objects. Object keys are converted into a String.  
// This is why we use Map.
people[a] = "Detective"; //a ["object": Object]
people[b] = "Doctor"; //b ["object": Object]

// console.log(people[a], people[b]);
// console.log(people);

let characters = new Map();
characters.set(a, "Detective");
characters.set(b, "Doctor");

console.log(characters);

for (let [key, value] of characters) {
  console.log(key);
  console.log(`${key} ${value}`);

  console.log(key);
  console.log(value);
}

for (let [key, value] of characters.entries()) {
  console.log(key);
  console.log(value);
}
