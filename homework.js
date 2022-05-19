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
// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const deleteWords = words.filter((word, index, arr) => {
//   arr.pop();
// console.log(words);
// console.log(word.length);
//   return word.length < 6;
// });

// console.log(deleteWords);
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = (a, b) => a + b;

// ratings.forEach((rating) => {
//   sum = sumFunction(sum, rating);
//   console.log(sum);
// });

// console.log(sum);

// new Array(10)
// const arraySparse = [1, 3,, 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log(element)
//   console.log({ element });
//   numCallbackRuns++;
// });

// console.log({ numCallbackRuns });

// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// after
// items.forEach((item) => {
//   copyItems.push(item);
// });

// const logArrayElements = (element, index, array) => {
//   console.log("a[" + index + "] = " + element);
// };
// [2, 5, , 9].forEach(logArrayElements);

// Notice that index 2 is skipped, since there is no item at that position in the array...
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

// function Counter() {
//   this.sum = 0
//   this.count = 0
// }

// Counter.prototype.add = function(array) {
//   array.forEach(function countEntry(entry) {
//     this.sum += entry;
//     ++this.count;
//   }, this);
// };

// const obj = new Counter();
// obj.add([2, 5, 9]);
// console.log(obj.count); // 3
// console.log(obj.sum); // 1

// const copy = (obj) => {
//   const copy = Object.create(Object.getPrototypeOf(obj));
//   const propNames = Object.getOwnPropertyNames(obj);
//   propNames.forEach((name) => {
//     const desc = Object.getOwnPropertyDescriptor(obj, name);
//     Object.defineProperty(copy, name, desc);
//   });
//   return copy;
// };

// const obj1 = { a: 1, b: 2 };
// const obj2 = copy(obj1);

// const words = ["one", "two", "three", "four"];
// words.forEach((word) => {
//   console.log(word);
//   if (word === "two") {
//     words.shift(); //'one' will delete from array
//   }
// console.log(words)
// }); // one // two // four

// console.log(words);

// function updateVegetablesCollection (veggies, veggie) {
//   if (veggies.indexOf(veggie) === -1) {

//         veggies.push(veggie);
//         console.log('New veggies collection is : ' + veggies);
//     } else {
//         console.log(veggie + ' already exists in the veggies collection.');
//     }
// }

// const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// updateVegetablesCollection(veggies, 'spinach');
// updateVegetablesCollection(veggies, 'spinach');
// updateVegetablesCollection(veggies, 'celery');

// const mappedArray = [1, 4, 9, 16]
// const map1 = mappedArray.map((x) => x * 2)

// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);
// console.log(doubles.reduce((val, newValue) => val + newValue))
// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

// const map = Array.prototype.map;
// const charCodes = map.call("Hello World", (x) => x.charCodeAt(0)); 
// Array.prototype.map.call("Hello World", (x) => x.charCodeAt(0)); 
// "Hello World".split("").map((a) => a.charCodeAt())
// charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// const elems = document.querySelectorAll("select option:checked");
// const values = Array.prototype.map.call(elems, ({ value }) => value);

// ["1", "2", "3"].map(parseInt);

// parseInt(string, radix) -> map(parseInt(value, index))
// /*  first iteration  (index is 0): */ parseInt("1", 0); // 1
// /*  second iteration (index is 1): */ parseInt("2", 1); // NaN
// /*  third iteration  (index is 2): */ parseInt("3", 2); // NaN

// const returnInt = (element) => parseInt(element, 10);

// ["1", "2", "3"].map(returnInt); // [1, 2, 3]  
// ["1","2", "3"].map((value) => parseInt(value))  
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
// ["1", "2", "3"].map((str) => parseInt(str))

// A simpler way to achieve the above, while avoiding the "gotcha":
// ["1", "2", "3"].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
// console.log(["1.1", "2.2e2", "3e300"].map(Number);

// For comparison, if we use parseInt() on the array above:
// ["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]

// const strings = ["10", "10", "10"];
// const numbers = strings.map(parseInt);

// console.log(numbers);
// Actual result of [10, NaN, 2] may be unexpected based on the above description.

// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]







