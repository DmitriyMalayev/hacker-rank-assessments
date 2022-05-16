// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

//  Arrow function
Array.from(arrayLike, (element) => { /* ... */ } )
Array.from(arrayLike, (element, index) => { /* ... */ } )

//  Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

//  Inline mapping function
Array.from(arrayLike, function mapFn(element) { /* ... */ })
Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)
/*
Parameters
arrayLike
An array-like or iterable object to convert to an array.

mapFn Optional
Map function to call on every element of the array.

thisArg Optional
Value to use as this when executing mapFn.

Return value
A new Array instance.

Description
Array.from() lets you create Arrays from:

array-like objects (objects with a length property and indexed elements); or
iterable objects (objects such as Map and Set).
Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array, and mapFn only receives two arguments (element, index).

Note: This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.

The length property of the from() method is 1.

In ES2015, the class syntax allows sub-classing of both built-in and user-defined classes. As a result, static methods such as Array.from() are "inherited" by subclasses of Array, and create new instances of the subclass, not Array.

*/

// Examples
// Array from a String
Array.from('foo');
 [ "f", "o", "o" ]


// Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
 [ "foo", "bar", "baz" ]


// Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
 [[1, 2], [2, 4], [4, 8]]


const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
 ['a', 'b'];

Array.from(mapper.keys());
 ['1', '2'];


// Array from a NodeList
// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http:'));


// Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

 [ 1, 2, 3 ]


// Using arrow functions and Array.from()
// Using an arrow function as the map function to manipulate the elements
Array.from([1, 2, 3], x => x + x);
 [2, 4, 6]

//  Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position, the val of `v` will be `undefined`
Array.from({length: 5}, (v, i) => i);
 [0, 1, 2, 3, 4]



// Sequence generator (range)
//  Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//  Generate numbers range 0..4
range(0, 4, 1);
 [0, 1, 2, 3, 4]

//  Generate numbers range 1..10 with step of 2
range(1, 10, 2);
 [1, 3, 5, 7, 9]

//  Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
 ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


Array.prototype.copyWithin()
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

/*
Syntax
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)

Parameters
target
Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.

If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.

start Optional
Zero-based index at which to start copying elements from. If negative, start will be counted from the end.

If start is omitted, copyWithin will copy from index 0.

end Optional
Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.

If end is omitted, copyWithin will copy until the last index (default to arr.length).

Return value
The modified array.

Description
The copyWithin works like C and C++'s memmove, and is a high-performance method to shift the data of an Array. This especially applies to the TypedArray method of the same name. The sequence is copied and pasted as one operation; pasted sequence will have the copied values even when the copy and paste region overlap.

The copyWithin function is intentionally generic, it does not require that its this value be an Array object.

The copyWithin method is a mutable method. It does not alter the length of this, but it will change its content and create new properties, if necessary.
*/
// Examples
// Using copyWithin
[1, 2, 3, 4, 5].copyWithin(-2)
[1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
[4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
[4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
[1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
{0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5])

i32a.copyWithin(0, 2)
Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
Int32Array [4, 2, 3, 4, 5]

Array.prototype.entries()
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.


entries();

// Return value
// A new Array iterator object.

// Examples
// Iterating with index and element
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

0 'a'
1 'b'
2 'c'

// Using a for...of loop
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (let element of arrayEntries) {
  console.log(element);
}

[0, 'a']
[1, 'b']
[2, 'c']



// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.



// Syntax
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* ... */ })
every(function(element, index) { /* ... */ })
every(function(element, index, array){ /* ... */ })
every(function(element, index, array) { /* ... */ }, thisArg)

/*
Parameters
callbackFn
A function to test for each element.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array every was called upon.

thisArg Optional
A value to use as this when executing callbackFn.

Return value
true if the callbackFn function returns a truthy value for every array element. Otherwise, false.

Description
The every method executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all elements, every returns true.

Note: Calling this method on an empty array will return true for any condition!

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

callbackFn is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a thisArg parameter is provided to every, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

every does not mutate the array on which it is called.

The range of elements processed by every is set before the first invocation of callbackFn. Therefore, callbackFn will not run on elements that are appended to the array after the call to every begins. If existing elements of the array are changed, their value as passed to callbackFn will be the value at the time every visits them. Elements that are deleted are not visited.

every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)

Examples
Testing size of all array elements
The following example tests whether all elements in the array are bigger than 10.
*/
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   false
[12, 54, 18, 130, 44].every(isBigEnough); true

// Check if one array is a subset of another array
// The following example tests if all the elements of an array are present in another array.

const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); false

// Using arrow functions
// Arrow functions provide a shorter syntax for the same test.

[12, 5, 8, 130, 44].every(x => x >= 10);   false
[12, 54, 18, 130, 44].every(x => x >= 10); true

// Affecting Initial Array (modifying, appending, and deleting)
// The following examples tests the behavior of the every method when the array is modified.

// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
1st iteration: [1,1,3,4][0] -> 1
2nd iteration: [1,1,2,4][1] -> 1
3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 3 iterations, even after appending new items

1st iteration: [1, 2, 3, new][0] -> 1
2nd iteration: [1, 2, 3, new, new][1] -> 2
3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off

1st iteration: [1,2,3][0] -> 1
2nd iteration: [1,2][1] -> 2


// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.



/*
fill(value)
fill(value, start)
fill(value, start, end)

Parameters
value
Value to fill the array with. (Note all elements in the array will be this exact value.)

start Optional
Start index (inclusive), default 0.

end Optional
End index (exclusive), default arr.length.

Return value
The modified array, filled with value.

Description
If start is negative, it is treated as array.length + start.
If end is negative, it is treated as array.length + end.
fill is intentionally generic: it does not require that its this value be an Array object.
fill is a mutator method: it will change the array itself and return it, not a copy of it.
If the first parameter is an object, each slot in the array will reference that object.
Note: Using Array.prototype.fill() on an empty array would not modify it as the array has nothing to be modified. To use Array.prototype.fill() when declaring an array, make sure to assign slots to the array. See example.

Polyfill
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      Steps 3-5.
      var len = O.length >>> 0;

      Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      Step 11.
      var finalValue = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      Step 12.
      while (k < finalValue) {
        O[k] = value;
        k++;
      }

      Step 13.
      return O;
    }
  });
}

If you need to support truly obsolete JavaScript engines that don't support Object.defineProperty, it's best not to polyfill Array.prototype methods at all, as you can't make them non-enumerable.
*/
Examples
Using fill
[1, 2, 3].fill(4)                [4, 4, 4]
[1, 2, 3].fill(4, 1)             [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          [1, 2, 3]
Array(3).fill(4)                 [4, 4, 4]

[].fill.call({ length: 3 }, 4)   {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) [{}, {}, {}]
arr[0].hi = "hi"            [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// Using fill() to create a matrix of all 1
// This example shows how to create a matrix of all 1, like the ones() function of Octave or MATLAB.

const arr = new Array(3);
for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); 10
console.log(arr[1][0]); 1
console.log(arr[2][0]); 1

// Using fill() to populate an empty array
// This example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.

let tempGirls = Array(5).fill("girl",0);



Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.



// Syntax
// Arrow function
filter((element) => { /* ... */ } )
filter((element, index) => { /* ... */ } )
filter((element, index, array) => { /* ... */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* ... */ })
filter(function(element, index) { /* ... */ })
filter(function(element, index, array){ /* ... */ })
filter(function(element, index, array) { /* ... */ }, thisArg)
/*
Parameters
callbackFn
Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array on which filter() was called.

thisArgOptional
Value to use as this when executing callbackFn.

Return value
A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

Description
filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

callbackFn is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed
If a thisArg parameter is provided to filter, it will be used as the callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.

filter() does not mutate the array on which it is called.

The range of elements processed by filter() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If existing elements of the array are deleted in the same way they will not be visited.

Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Examples
Filtering out all small values
The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.

function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
filtered is [12, 130, 44]

Find all prime numbers in an array
The following example returns all prime numbers in the array:
*/
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); [2, 3, 5, 7, 11, 13]

// Filtering invalid entries from JSON
// The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
[{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5

// Searching in array
// Following example uses filter() to filter array content based on search criteria.

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  ['banana', 'mango', 'orange']

ES2015 Implementation
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  ['banana', 'mango', 'orange']

// Affecting Initial Array (modifying, appending and deleting)
// The following examples tests the behavior of the filter method when the array is modified.

// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
["spray" ,"limit" ,"elite"]

Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
["spray" ,"limit"]



Array.prototype.find()
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.



If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use Array.prototype.indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use Array.prototype.some().
Syntax
Arrow function
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )

Callback function
find(callbackFn)
find(callbackFn, thisArg)

Inline callback function
find(function(element) { /* ... */ })
find(function(element, index) { /* ... */ })
find(function(element, index, array){ /* ... */ })
find(function(element, index, array) { /* ... */ }, thisArg)

Parameters
callbackFn
Function to execute on each value in the array.

The function is called with the following arguments:

element
The current element in the array.

index
The index (position) of the current element in the array.

array
The array that find was called on.

The callback must return a truthy value to indicate a matching element has been found.

thisArg Optional
Object to use as this inside callbackFn.

Return value
The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

Description
The find method executes the callbackFn function once for each index of the array until the callbackFn returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.

callbackFn is invoked for every index of the array, not just those with assigned values. This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a thisArg parameter is provided to find, it will be used as the this value inside each invocation of the callbackFn. If it is not provided, then undefined is used.

The find method does not mutate the array on which it is called, but the function provided to callbackFn can. If so, the elements processed by find are set before the first invocation of callbackFn. Therefore:

callbackFn will not visit any elements added to the array after the call to find begins.
Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn.
If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time find visits that element's index.
Elements that are deleted are still visited.
Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Examples
Find an object in an array by one of its properties
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
{ name: 'cherries', quantity: 5 }

Using arrow function and destructuring
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) { name: 'cherries', quantity: 5 }

Find a prime number in an array
The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); 5

The following examples show that nonexistent and deleted elements are visited, and that the value passed to the callback is their value when visited:

Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

Shows all indexes, including deleted
array.find(function(value, index) {
  Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
expected output:
Visited index 0 with value 0
Visited index 1 with value 1
Visited index 2 with value undefined
Visited index 3 with value undefined
Visited index 4 with value undefined
Visited index 5 with value 5
Visited index 6 with value 6
Deleting array[5] with value 5
Visited index 0 with value 0
Visited index 1 with value 1
Visited index 2 with value undefined
Visited index 3 with value undefined
Visited index 4 with value undefined
Visited index 5 with value undefined
Visited index 6 with value 6



Array.prototype.findIndex()
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.



See also the find() method, which returns the value of an array element, instead of its index.

Syntax
Arrow function
findIndex((element) => { /* ... */ } )
findIndex((element, index) => { /* ... */ } )
findIndex((element, index, array) => { /* ... */ } )

Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

Inline callback function
findIndex(function(element) { /* ... */ })
findIndex(function(element, index) { /* ... */ })
findIndex(function(element, index, array){ /* ... */ })
findIndex(function(element, index, array) { /* ... */ }, thisArg)

Parameters
callbackFn
A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array findIndex() was called upon.

thisArg Optional
Optional object to use as this when executing callbackFn.

Return value
The index of the first element in the array that passes the test. Otherwise, -1.

Note: if the index of the first element in the array that passes the test is 0, the return value of findIndex will be interpreted as Falsy in conditional statements.

Description
The findIndex() method executes the callbackFn function once for every index in the array until it finds the one where callbackFn returns a truthy value.

If such an element is found, findIndex() immediately returns the element's index. If callbackFn never returns a truthy value (or the array's length is 0), findIndex() returns -1.

Note: Unlike other array methods such as Array.some(), callbackFn is run even for indexes with unassigned values.

callbackFn is invoked with three arguments:

The value of the element
The index of the element
The Array object being traversed
If a thisArg parameter is passed to findIndex(), it will be used as the this inside each invocation of the callbackFn. If it is not provided, then undefined is used.

The range of elements processed by findIndex() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. callbackFn will not process the elements appended to the array after the call to findIndex() begins. If an existing, unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time findIndex() visits the element's index.Elements that are deleted are still visited.

Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Examples
Find the index of a prime number in an array
The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); 2 (array[2] is 7)




Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.



Syntax
Arrow function
forEach((element) => { /* ... */ })
forEach((element, index) => { /* ... */ })
forEach((element, index, array) => { /* ... */ })

Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

Inline callback function
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)

Parameters
callbackFn
Function to execute on each element.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of element in the array.

array
The array forEach() was called upon.

thisArg Optional
Value to use as this when executing callbackFn.

Return value
undefined.

Description
forEach() calls a provided callbackFn function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

callbackFn is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed
If a thisArg parameter is provided to forEach(), it will be used as callback's this value. The thisArg value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.

The range of elements processed by forEach() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If existing elements of the array are changed or deleted, their value as passed to callbackFn will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped. (See this example, below.)

Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

forEach() does not mutate the array on which it is called. (However, callbackFn may do so)

Note: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple for loop
A for...of / for...in loops
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

Note: forEach expects a synchronous function.

forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
Naively expected output: 14
Actual output: 0

Examples
No operation for uninitialized values (sparse arrays)
const arraySparse = [1, 3,, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

1
3
7
numCallbackRuns: 3
comment: as you can see the missing value between 3 and 7 didn't invoke callback function.

Converting a for loop to forEach
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

after
items.forEach((item) => {
  copyItems.push(item);
});

Printing the contents of an array
Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

The following example illustrates an alternative approach, using forEach().

The following code logs a line for each element in an array:

const logArrayElements = (element, index, array) => {
  console.log('a[' + index + '] = ' + element);
};

Notice that index 2 is skipped, since there is no item at
that position in the array...
[2, 5,, 9].forEach(logArrayElements);
logs:
a[0] = 2
a[1] = 5
a[3] = 9

Using thisArg
The following (contrived) example updates an object's properties from each entry in the array:

function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); 3
console.log(obj.sum); 16

Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.

Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.

An object copy function
The following code creates a copy of a given object.

There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using ECMAScript 5 Object.* meta property functions.

const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); obj2 looks like obj1 now

Modifying the array during iteration
The following example logs one, two, four.

When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving up one position. Because element four is now at an earlier position in the array, three will be skipped.

forEach() does not make a copy of the array before iterating.

const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
  }
}); one two four

console.log(words); ['two', 'three', 'four']

Flatten an array
The following example is only here for learning purpose. If you want to flatten an array using built-in methods you can use Array.prototype.flat().

const flatten = (arr) => {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
}

Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); [1, 2, 3, 4, 5, 6, 7, 8, 9]



Array.prototype.indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.



Syntax
indexOf(searchElement)
indexOf(searchElement, fromIndex)

Parameters
searchElement
Element to locate in the array.

fromIndex Optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

Return value
The first index of the element in the array; -1 if not found.

Description
indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

Note: For the String method, see String.prototype.indexOf().

Examples
Using indexOf()
The following example uses indexOf() to locate values in an array.

const array = [2, 9, 9];
array.indexOf(2);     0
array.indexOf(7);     -1
array.indexOf(9, 2);  2
array.indexOf(2, -1); -1
array.indexOf(2, -3); 0

Finding all the occurrences of an element
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
[0, 2, 4]

Finding if an element exists in the array or not and updating the array
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
spinach already exists in the veggies collection.



Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.



Syntax
Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

Callback function
map(callbackFn)
map(callbackFn, thisArg)

Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg)

Parameters
callbackFn
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array map was called upon.

thisArgOptional
Value to use as this when executing callbackFn.

Return value
A new array with each element being the result of the callback function.

Description
map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).

It is not called for missing elements of the array; that is:

indexes that have never been set;
indexes which have been deleted.
When not to use map()
Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.

You shouldn't be using map if:

you're not using the array it returns; and/or
you're not returning a value from the callback.
Parameters in Detail
callbackFn is invoked with three arguments: the value of the element, the index of the element, and the array object being mapped.

If a thisArg parameter is provided, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.

map does not mutate the array on which it is called (although callbackFn, if invoked, may do so).

The range of elements processed by map is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If existing elements of the array are changed after the call to map, their value will be the value at the time callbackFn visits them. Elements that are deleted after the call to map begins and before being visited are not visited.

Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Due to the algorithm defined in the specification, if the array which map was called upon is sparse, resulting array will also be sparse keeping same indices blank.

Examples
Mapping an array of numbers to an array of square roots
The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

roots is now     [1, 2, 3]
numbers is still [1, 4, 9]

Using map to reformat objects in an array
The following code takes an array of objects and creates a new array containing the newly reformatted objects.

const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

kvArray is still:
[{key: 1, value: 10},
 {key: 2, value: 20},
 {key: 3, value: 30}]

Mapping an array of numbers using a function containing an argument
The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

doubles is now   [2, 8, 18]
numbers is still [1, 4, 9]

Using map generically
This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:

const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));

charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

Using map generically querySelectorAll
This example shows how to iterate through a collection of objects collected by querySelectorAll. This is because querySelectorAll returns a NodeList (which is a collection of objects).

In this case, we return all the selected options' values on the screen:

const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);

An easier way would be the Array.from() method.

Tricky use case
(inspired by this blog post)

It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.

Consider:

['1', '2', '3'].map(parseInt);

While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

parseInt is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array.prototype.map passes 3 arguments:

the element
the index
the array
The third argument is ignored by parseInt—but not the second one! This is the source of possible confusion.

Here is a concise example of the iteration steps:

parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0);  1
/*  second iteration (index is 1): */ parseInt("2", 1);  NaN
/*  third iteration  (index is 2): */ parseInt("3", 2);  NaN

Then let's talk about solutions.

const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt); [1, 2, 3]
Actual result is an array of numbers (as expected)

Same as above, but using the concise arrow function syntax
['1', '2', '3'].map((str) => parseInt(str)); [1, 2, 3]

A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); [1, 2, 3]

But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); [1.1, 220, 3e+300]

For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str)); [1, 2, 3]

One alternative output of the map method being called with parseInt as a parameter runs as follows:

const strings = ['10', '10', '10'];
const numbers = strings.map(parseInt);

console.log(numbers);
Actual result of [10, NaN, 2] may be unexpected based on the above description.

Mapped array contains undefined
When undefined or nothing is returned:

const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

index goes from 0, so the filterNumbers are 1,2,3 and undefined.
filteredNumbers is [1, 2, 3, undefined]
numbers is still [1, 2, 3, 4]



Array.of()
The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)

Array.of(7); [7]
Array(7); array of 7 empty slots

Array.of(1, 2, 3); [1, 2, 3]
Array(1, 2, 3);    [1, 2, 3]

Syntax
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* ... ,*/ elementN)

Parameters
elementN
Elements used to create the array.

Return value
A new Array instance.

Description
This function is part of the ECMAScript 2015 standard.

For more information, see:

Array.of()
Array.from() proposal
Array.of() polyfill
Examples
Using Array.of
Array.of(1);         [1]
Array.of(1, 2, 3);   [1, 2, 3]
Array.of(undefined); [undefined]


Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:



The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

Syntax
Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

Parameters
callbackFn
A "reducer" function.

The function is called with the following arguments:

previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
array: the array to traverse.
initialValue Optional
A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

Return value
The value that results from running the "reducer" callback function to completion over the entire array.

Exceptions
TypeError
The array contains no elements and initialValue is not provided.

Description
The reduce() method takes two arguments: a callback function and an optional initial value. If an initial value is provided, reduce() calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.

reduce() returns the value that is returned from the callback function on the final iteration of the array.

When to not use reduce()
Recursive functions like reduce() can be powerful but sometimes difficult to understand, especially for less experienced JavaScript developers. If code becomes clearer when using other array methods, developers must weigh the readability tradeoff against the other benefits of using reduce(). In cases where reduce() is the best choice, documentation and semantic variable naming can help mitigate readability drawbacks.

Behavior during array mutations
The reduce() method itself does not mutate the array it is used on. However, it is possible for code inside the callback function to mutate the array. These are the possible scenarios of array mutations and how reduce() behaves in these scenarios:

If elements are appended to the array after reduce() begins to iterate over the array, the callback function does not iterate over the appended elements.
If existing elements of the array do get changed, the values passed to the callback function will be the values from the time that reduce() was first called on the array.
Array elements that are deleted after the call to reduce() begins and before being iterated over are not visited by reduce().
Edge cases
If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

const getMax = (a, b) => Math.max(a, b);

callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); 100
[    50].reduce(getMax, 10); 50

callback is invoked once for element at index 1
[1, 100].reduce(getMax);     100

callback is not invoked
[    50].reduce(getMax);     50
[      ].reduce(getMax, 1);  1

[      ].reduce(getMax);     TypeError

Examples
How reduce() works without an initial value
The code below shows what happens if we call reduce() with an array and no initial value.

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);

The callback would be invoked four times, with the arguments and return values in each call being as follows:

callback iteration	previousValue	currentValue	currentIndex	array	return value
first call	15	16	1	[15, 16, 17, 18, 19]	31
second call	31	17	2	[15, 16, 17, 18, 19]	48
third call	48	18	3	[15, 16, 17, 18, 19]	66
fourth call	66	19	4	[15, 16, 17, 18, 19]	85
The value returned by reduce() would be that of the last callback invocation (85).

How reduce() works with an initial value
Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce():

[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )

The callback would be invoked five times, with the arguments and return values in each call being as follows:

callback iteration	previousValue	currentValue	currentIndex	array	return value
first call	10	15	0	[15, 16, 17, 18, 19]	25
second call	25	16	1	[15, 16, 17, 18, 19]	41
third call	41	17	2	[15, 16, 17, 18, 19]	58
fourth call	58	18	3	[15, 16, 17, 18, 19]	76
fifth call	76	19	4	[15, 16, 17, 18, 19]	95
The value returned by reduce() in this case would be 95.

Sum all the values of an array
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
sum is 6

Alternatively written with an arrow function:

let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)

Sum of values in an object array
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) logs 6

Alternatively written with an arrow function:

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) logs 6

Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
flattened is [0, 1, 2, 3, 4, 5]

Alternatively written with an arrow function:

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)

Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
countedNames is:
{ 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

Grouping objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
groupedPeople is:
{
  20: [
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ],
  21: [{ name: 'Alice', age: 21 }]
}

Bonding arrays contained in an array of objects using the spread operator and initialValue
friends - an array of objects
where object field "books" is a list of favorite books
const friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

allbooks - list which will contain all friends' books +
additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

allbooks = [
  'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  'Romeo and Juliet', 'The Lord of the Rings',
  'The Shining'
]

Remove duplicate items in an array
Note: If you are using an environment compatible with Set and Array.from(), you could use let arrayWithNoDuplicates = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)

Replace .filter().map() with .reduce()
Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with Array.forEach()).

const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); [12, 4]

Running Promises in Sequence
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   1200

Function composition enabling piping
Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

Function composition enabling pipe functionality
const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

Usage
multiply6(6)   36
multiply9(9)   81
multiply16(16) 256
multiply24(10) 240

Write map using reduce
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) [5, 7, , 10]



Array.prototype.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.



Syntax
slice()
slice(start)
slice(start, end)

Parameters
start Optional
Zero-based index at which to start extraction.

A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If start is undefined, slice starts from the index 0.

If start is greater than the index range of the sequence, an empty array is returned.

end Optional
The index of the first element to exclude from the returned array. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

If end is omitted, slice extracts through the end of the sequence (arr.length).

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

Return value
A new array containing the extracted elements.

Description
slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

For objects, slice copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.
For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.
If a new element is added to either array, the other array is not affected.

Examples
Return a portion of an existing array
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
citrus contains ['Orange','Lemon']

Using slice
In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

Display the values of myCar, newCar, and the color of myHonda
 referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

This script writes:

myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple

Array-like objects
slice method can also be called to convert Array-like objects/collections to a new Array. You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'.

function list() {
  return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3) [1, 2, 3]

Binding can be done with the call() method of Function and it can also be reduced using [].slice.call(arguments) instead of Array.prototype.slice.call.

Anyway, it can be simplified using bind.

let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)

function list() {
  return slice(arguments)
}

let list1 = list(1, 2, 3) [1, 2, 3]



Array.prototype.some()
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.



Syntax
Arrow function
some((element) => { /* ... */ } )
some((element, index) => { /* ... */ } )
some((element, index, array) => { /* ... */ } )

Callback function
some(callbackFn)
some(callbackFn, thisArg)

Inline callback function
some(function(element) { /* ... */ })
some(function(element, index) { /* ... */ })
some(function(element, index, array){ /* ... */ })
some(function(element, index, array) { /* ... */ }, thisArg)

Parameters
callbackFn
A function to test for each element.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array some() was called upon.

thisArgOptional
A value to use as this when executing callbackFn.

Return value
true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

Description
The some() method executes the callbackFn function once for each element present in the array until it finds the one where callbackFn returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. Otherwise, some() returns false. callbackFn is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.

callbackFn is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a thisArg parameter is provided to some(), it will be used as the callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.

some() does not mutate the array on which it is called.

The range of elements processed by some() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If an existing, unvisited element of the array is changed by callbackFn, its value passed to the visiting callbackFn will be the value at the time that some() visits that element's index. Elements that are deleted are not visited.

Warning: Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Note: Calling this method on an empty array returns false for any condition!

Examples
Testing value of array elements
The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  false
[12, 5, 8, 1, 4].some(isBiggerThan10); true

Testing array elements using arrow functions
Arrow functions provide a shorter syntax for the same test.

[2, 5, 8, 1, 4].some(x => x > 10);  false
[12, 5, 8, 1, 4].some(x => x > 10); true

Checking whether a value exists in an array
To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   false
checkAvailability(fruits, 'banana'); true

Checking whether a value exists using an arrow function
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   false
checkAvailability(fruits, 'banana'); true

Converting any value to Boolean
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   false
getBoolean('false'); false
getBoolean(1);       true
getBoolean('true');  true


Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.



Syntax
Functionless
sort()

Arrow function
sort((a, b) => { /* ... */ } )

Compare function
sort(compareFn)

Inline compare function
sort(function compareFn(a, b) { /* ... */ })

Parameters
compareFn Optional
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

a
The first element for comparison.

b
The second element for comparison.

Return value
The sorted array. Note that the array is sorted in place, and no copy is made.

Description
If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

Note: In UTF-16, Unicode characters above \uFFFF are encoded as two surrogate code units, of the range \uD800-\uDFFF. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair \uD855\uDE51 will be sorted before the character \uFF3A.

If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).

compareFunction(a, b) return value	sort order
> 0	sort b before a
< 0	sort a before b
=== 0	keep original order of a and b
Note: compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.

So, the compare function has the following form:

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  a must be equal to b
  return 0;
}

Note: Applications should not rely on order of arguments or calls, as those are implementation dependent.

To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
  return a - b;
}

The sort method can be conveniently used with function expressions:

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

[1, 2, 3, 4, 5]

ES2015 provides arrow function expressions with even shorter syntax.

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

[1, 2, 3, 4, 5]

Arrays of objects can be sorted by comparing the value of one of their properties.

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

sort by name
items.sort(function(a, b) {
  const nameA = a.name.toUpperCase(); ignore upper and lowercase
  const nameB = b.name.toUpperCase(); ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  names must be equal
  return 0;
});

Examples
Creating, displaying, and sorting an array
The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numberArray = [40, 1, 5, 200];
let numericStringArray = ['80', '9', '700'];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); 'Blue,Humpback,Beluga'
stringArray.sort(); ['Beluga', 'Blue', 'Humpback']

numberArray.join(); '40,1,5,200'
numberArray.sort(); [1, 200, 40, 5]
numberArray.sort(compareNumbers); [1, 5, 40, 200]

numericStringArray.join(); '80,9,700'
numericStringArray.sort(); ['700', '80', '9']
numericStringArray.sort(compareNumbers); ['9', '80', '700']

mixedNumericArray.join(); '80,9,700,40,1,5,200'
mixedNumericArray.sort(); [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); [1, 5, '9', 40, '80', 200, '700']

Sorting non-ASCII characters
For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.localeCompare. This function can compare those characters so they appear in the right order.

const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

Sorting with map
The compareFunction can be invoked multiple times per element within the array. Depending on the compareFunction's nature, this may yield a high overhead. The more work a compareFunction does and the more elements there are to sort, it may be more efficient to use map() for sorting. The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.

the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo'];

temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
})

sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);

There is an open source library available called mapsort which applies this approach.

Sort stability
Since version 10 (or EcmaScript 2019), the specification dictates that Array.prototype.sort is stable.

For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 }
];

After sorting this array by grade in ascending order:

students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

The students variable will then have the following value:

[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }  original maintained for similar grade (stable sorting)
];

It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

Before version 10 (or EcmaScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, original order not maintained
  { name: "Alex",   grade: 15 }  original order not maintained
];



Array.prototype.splice()
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().



Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

Parameters
start
The index at which to start changing the array.

If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided.

If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If start is negative infinity, it will begin from index 0.

deleteCount Optional
An integer indicating the number of elements in the array to remove from start.

If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted. However, it must not be omitted if there is any item1 parameter.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

item1, item2, ... Optional
The elements to add to the array, beginning from start.

If you do not specify any elements, splice() will only remove elements from the array.

Return value
An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

Description
If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed.

Examples
Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
removed is [], no elements removed

Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
removed is [], no elements removed

Remove 1 element at index 3
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

myFish is ["angel", "clown", "drum", "sturgeon"]
removed is ["mandarin"]

Remove 1 element at index 2, and insert "trumpet"
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

myFish is ["angel", "clown", "trumpet", "sturgeon"]
removed is ["drum"]

Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
removed is ["angel", "clown"]

Remove 2 elements, starting from index 2
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

myFish is ["parrot", "anemone", "sturgeon"]
removed is ["blue", "trumpet"]

Remove 1 element from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

myFish is ["angel", "clown", "sturgeon"]
removed is ["mandarin"]

Remove all elements, starting from index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

myFish is ["angel", "clown"]
removed is ["mandarin", "sturgeon"]


Array.prototype.toLocaleString()
The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").



Syntax
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);

Parameters
locales Optional
A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.

options Optional
An object with configuration properties, for numbers see Number.prototype.toLocaleString(), and for dates see Date.prototype.toLocaleString().

Return value
A string representing the elements of the array.

Polyfill
https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      1. Let O be ? ToObject(this value).
      if (this === null) {
        throw new TypeError('"this" is null or not defined');
      }

      const a = Object(this);

      2. Let len be ? ToLength(? Get(A, "length")).
      const len = a.length >>> 0;

      3. Let separator be the String value for the
         list-separator String appropriate for the
         host environment's current locale (this is
         derived in an implementation-defined way).
      NOTE: In this case, we will use a comma
      const separator = ',';

      4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }

      5. Let firstElement be ? Get(A, "0").
      const firstElement = a[0];
      6. If firstElement is undefined or null, then
       a.Let R be the empty String.
      7. Else,
       a. Let R be ?
          ToString(?
            Invoke(
             firstElement,
             "toLocaleString",
             « locales, options »
            )
          )
      let r = firstElement === null ?
        '' : firstElement.toLocaleString(locales, options);

      8. Let k be 1.
      let k = 1;

      9. Repeat, while k < len
      while (k < len) {
        a. Let S be a String value produced by
          concatenating R and separator.
        const s = r + separator;

        b. Let nextElement be ? Get(A, ToString(k)).
        const nextElement = a[k];

        c. If nextElement is undefined or null, then
          i. Let R be the empty String.
        d. Else,
          i. Let R be ?
            ToString(?
              Invoke(
               nextElement,
               "toLocaleString",
               « locales, options »
              )
            )
        r = nextElement === null ?
          '' : nextElement.toLocaleString(locales, options);

        e. Let R be a String value produced by
          concatenating S and R.
        r = s + r;

        f. Increase k by 1.
        k++;
      }

      10. Return R.
      return r;
    }
  });
}

If you need to support truly obsolete JavaScript engines that don't support Object.defineProperty, it's best not to polyfill Array.prototype methods at all, as you can't make them non-enumerable.

Examples
Using locales and options
The elements of the array are converted to strings using their toLocaleString methods.

Object: Object.prototype.toLocaleString()
Number: Number.prototype.toLocaleString()
Date: Date.prototype.toLocaleString()
Always display the currency for the strings and numbers in the prices array:

const prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

"￥7,￥500,￥8,123,￥12"

