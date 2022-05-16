Array.from();

Array.from("foo");
//  [ "f", "o", "o" ]

const set = new Set(["foo", "bar", "baz", "foo"]);

Array.from(set);
//  [ "foo", "bar", "baz" ]

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);

Array.from(map);
//  [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);

Array.from(mapper.values());
//  ['a', 'b'];

Array.from(mapper.keys());
//  ['1', '2'];

const images = document.getElementsByTagName("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http:"));

function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [ 1, 2, 3 ]
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]
Array.from({ length: 5 }, (v, i) => i);
//  [0, 1, 2, 3, 4]

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

range(0, 4, 1);
//  [0, 1, 2, 3, 4]
range(1, 10, 2);
//  [1, 3, 5, 7, 9]
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) => String.fromCharCode(x));
//  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

[1, 2, 3, 4, 5]
  .copyWithin(-2)
  [(1, 2, 3, 1, 2)][(1, 2, 3, 4, 5)].copyWithin(0, 3)
  [(4, 5, 3, 4, 5)][(1, 2, 3, 4, 5)].copyWithin(0, 3, 4)
  [(4, 2, 3, 4, 5)][(1, 2, 3, 4, 5)].copyWithin(-2, -3, -1)[(1, 2, 3, 3, 4)];

// [].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (let element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

const isBelowThreshold = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(isBelowThreshold));
// expected output: true

// entries()

const a1 = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

[12, 5, 8, 130, 44].every(isBigEnough); //false
[12, 54, 18, 130, 44].every(isBigEnough); //true

const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
true;
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
false[(12, 5, 8, 130, 44)].every((x) => x >= 10);
false[(12, 54, 18, 130, 44)].every((x) => x >= 10);
true;

// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1] -= 1;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 3 iterations, even after appending new items

// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2

// fill(value)
// fill(value, start)
// fill(value, start, end)

const fillArray = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(fillArray.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(fillArray.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(fillArray.fill(6));
// expected output: [6, 6, 6, 6]

[1, 2, 3]
  .fill(4) // [4, 4, 4]
  [(1, 2, 3)].fill(4, 1) // [1, 4, 4]
  [(1, 2, 3)].fill(4, 1, 2) // [1, 4, 3]
  [(1, 2, 3)].fill(4, 1, 1) // [1, 2, 3]
  [(1, 2, 3)].fill(4, 3, 3) // [1, 2, 3]
  [(1, 2, 3)].fill(4, -3, -2) // [4, 2, 3]
  [(1, 2, 3)].fill(4, NaN, NaN) // [1, 2, 3]
  [(1, 2, 3)].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
//  [].fill.call({ length: 3 }, 4)
// {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr2 = Array(3).fill({}); // [{}, {}, {}]
arr2[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

const arr3 = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr3[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr3[0][0] = 10;
console.log(arr3[0][0]); // 10
console.log(arr3[1][0]); // 1
console.log(arr3[2][0]); // 1

// filter((element, index, array)

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

const primeArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(primeArray.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

let invalidArr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrByID = invalidArr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5

let fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

const fruits2 = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};

console.log(filterItems(fruits2, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits2, "an")); // ['banana', 'mango', 'orange']

// Modifying each words
let words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words2.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words3 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words3.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words4 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words4.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]


// find(function(element, index, array)

const findArray = [5, 12, 8, 130, 44];

const found = findArray.find(element => element > 10);

console.log(found);
// expected output: 12