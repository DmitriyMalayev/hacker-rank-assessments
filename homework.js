// const array1 = ["a", "b", "c"];
// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// for (const [index, element] of array1.entries()) {
//   console.log(index, element);
// }

// for (let element of array1) {
//   console.log(element);
// }

// for (let element of iterator1) {
//   console.log(element);
// }

// let arr = [1, 2, 3, 4]
// arr.every((elem, index, arr) => {

//   arr[index + 1] -= 1
//   console.log([`${arr}[${index}] -> ${elem} ]`])
//   return elem < 2
// })

// const fillArray = [1, 2, 3, 4]
// console.log(fillArray.fill(0,2, 4))

// console.log(Array(3).fill(5));
// console.log([].fill.call({ length: 3 }));
// console.log([].fill.call({ length: 3 }, 4));

// Calls a method of an object, substituting another object for the current object.

// let arr2 = Array(5).fill({ })
// console.log(arr2)
// console.log(arr2[0].hi = "hello")

// console.log(arr2[0].hi = "hellos")

// console.log(arr2)

// const arr3 = new Array(3);
// console.log(arr3);

// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = new Array(3).fill(1);

//   console.log(arr3);
// }
// console.log(arr3);
// console.log((arr3[0][0] = "10"));
// console.log(arr3[0][0]);

// let newArray = Array(2);
// newArray[0] = "1";
// newArray[1] = new Array(3).fill(3);

// console.log(newArray);

// function isBigEnough(value) {
//   return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered)

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime));

// let invalidArray = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];

// let invalidEntries = 0;

// function filterByID(item) {
//   console.log(item.id)
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// let arrByID = invalidArray.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// console.log("Number of Invalid Entries = ", invalidEntries);

// Returns true if passed value is finite. Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a number. Only finite values of the type number, result in true.

// @param number — A numeric value.

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// const filterItems = (arr, query) => {
//   return arr.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
// };

// console.log(filterItems(fruits, "ap"));
// console.log(filterItems(fruits, "an"));

// Modifying each words
// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

// const modifiedWords = words.filter( (word, index, arr) => {
//   arr[index + 1] += ' extra'
//   console.log(word)
//   return word.length < 6
// })

// console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   console.log(arr)
//   return word.length < 6
// })

// console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  // console.log(words);
  // console.log(word.length);
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]
